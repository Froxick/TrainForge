import { useState } from "react"
import { IProgramForm } from "../types/types"

export const useProgramForm = () => {
    const initialState : IProgramForm = {
        name: '',
        description: '',
        weekCount: 0,
        weekNames: [],
        restDays: [1,3,5,6],
        weekTemplate: {
            trainingDays: []
        }
    }
    const [formValue,setFormValue] = useState<IProgramForm>(initialState)
    const [step,setStep] = useState<number>(1)

    const changeFormValue = <K extends keyof IProgramForm>(field: K, value: IProgramForm[K]) => {
        setFormValue(prev => ({
            ...prev,
            [field]: value
        }))
    }

    const validationInStep = (step: number) => {
      if(step === 1) {
          return formValue.name.length > 3 && 
            formValue.weekCount !== 0
      } else if(step === 2) {
        let isValid = true;
        formValue.weekNames.forEach(week => {
            if(week.length < 3) {
                isValid = false
            }
        })
        return isValid;
      }
    }

    const clearFormValue = () => {
        setFormValue(initialState)
    }

    const changeFormStep = (newStep: number) => {
        setStep(newStep)
    }


    const generateDefaultWeeksName = () => {
       const generatedWeeksName =  Array.from({length: formValue.weekCount}, (_, i) => `Неделя ${i + 1}`) 
       changeFormValue('weekNames',generatedWeeksName);
    }  


    const buildProgamStructure = () => {
        const weeks = Array.from({length:formValue.weekCount}, (_,weekIndex) => {
            const days = Array.from({length: 7} , (_,dayIndex) => {
                const isRest = formValue.restDays.includes(dayIndex);

                if(isRest) {
                    return {
                        dayIndex,
                        name: 'День отдыха',
                        type: 'Rest',
                        exercises: []
                    }
                }

                const templateDay = formValue.weekTemplate?.trainingDays
                    ?.find(d => d.dayIndex === dayIndex);

                return {
                    dayIndex,
                    name: templateDay?.name ?? `День ${dayIndex + 1}`,
                    description: templateDay?.description,
                    type: 'Training',
                    exercises: templateDay?.exercises ?? []
                }
            })

            return {
                name: formValue.weekNames[weekIndex] || `Неделя ${weekIndex + 1}`,
                weekIndex,
                days
            }
        })
        return {
            name: formValue.name,
            description: formValue.description,
            weeks
        }
    }

    const setWeekCount = (count: number) => {


        setFormValue(prev => {
            const currentLength = prev.weekNames.length
            
            let newWeekNames = [...prev.weekNames]

            if(currentLength < count) {
                const additional = Array.from(
                    {length: count - currentLength},
                    (_,i) => `Неделя ${currentLength + i +1}`
                )
                newWeekNames = [...newWeekNames,...additional]
            }
            if(currentLength > count) {
                newWeekNames = newWeekNames.slice(0,count)
            }
            return {
                ...prev,
                weekCount: count,
                weekNames: newWeekNames
            }
        })
    }

    const handleWeekNameChange = (index: number, value:string) => {
      const updated = [...formValue.weekNames]
      updated[index] = value
      changeFormValue('weekNames',updated)
    }
    
    
    return {
        formValue,step,
        clearFormValue,buildProgamStructure,
        changeFormStep,generateDefaultWeeksName,
        changeFormValue,validationInStep,setWeekCount,handleWeekNameChange
    }
}