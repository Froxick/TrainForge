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
    
    
    return {
        formValue,step,
        clearFormValue,buildProgamStructure,
        changeFormStep,generateDefaultWeeksName,
        changeFormValue
    }
}