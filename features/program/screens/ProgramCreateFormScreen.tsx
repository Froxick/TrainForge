import {  ScrollView, StyleSheet, View } from "react-native"

import { useProgramForm } from "../hooks/useProgramForm"

import { router } from "expo-router"
import { ProgramCreateFormHeader } from "../ui/ProgramCreateFormHeader"
import { ProgramCreateFormStepButtons } from "../ui/ProgramCreateFormStepButtons"
import { ProgramFormStepOne } from "../ui/ProgramFormStepOne"
import { ProgramFormStepTwo } from "../ui/ProgramFormStepTwo"



export const ProgramCreateFormScreen = () => {
    const {step,formValue,buildProgamStructure,changeFormStep,
        generateDefaultWeeksName,changeFormValue,validationInStep,setWeekCount,
        handleWeekNameChange
    } = useProgramForm()

    const handleBack = () => {
        if (step > 1) {
            changeFormStep(step - 1)
        } else {
            router.back()
        }
    }
   
    const handleForward = () => {
        changeFormStep(step + 1)
    }


    const styles = StyleSheet.create({
        scrollContainer: {
            flexGrow: 1, 
            justifyContent: 'center', 
            padding: 20,
            
        },
        container: {
             flex: 1, 
             
             
        },
        headerContainer: {
           justifyContent: 'center',
           alignItems:'center',
        },
        contentForm : {
            justifyContent: 'center',
           alignItems:'center',
           marginTop: 10
        },
        contentContainer: {
            gap: 30,
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100%',
        },
        
     
    })

    return (
        <View style={styles.container}>
            <View style={{
                position: 'absolute',
                width: 300,
                height: 300,
                borderRadius: 150,
                backgroundColor: 'rgba(255, 0, 0, 0.055)',
                top: -120,
                right: -120
            }} />
             <View style={{
                position: 'absolute',
                width: 300,
                height: 300,
                borderRadius: 150,
                backgroundColor: 'rgba(255, 0, 0, 0.05)',
                bottom: -120,
                left: -120
            }} />
            <ScrollView contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false} >
                <View style={styles.contentContainer}>
                     <View style={styles.headerContainer}>
                        <ProgramCreateFormHeader 
                            step={step}
                        />
                    </View>
                    <View style={styles.contentForm}>
                       {
                        step === 1 && (
                             <ProgramFormStepOne 
                                    nameState={formValue.name}
                                    descriptionState={formValue.description as string}
                                    changeName={(text: string) => changeFormValue('name',text)}
                                    changeDescription={(text: string) => changeFormValue('description',text)}
                                    weekCount={formValue.weekCount}
                                    changeWeekCount={setWeekCount}

                             />
                        )
                       }
                       {
                        step === 2 && (
                            <ProgramFormStepTwo 
                                weekNames={formValue.weekNames}
                                changeWeekName={handleWeekNameChange}
                            />
                        )
                       }
                    </View>
                    <View style={styles.headerContainer}>
                        <ProgramCreateFormStepButtons 
                            disabledNextStep={step === 1 ? !validationInStep(1) : (
                                step === 2 ? !validationInStep(2) : false
                            )

                            }
                            back={handleBack}
                            forward={handleForward}
                            backTitle={step > 1 ? 'Назад' : 'Отмена'}
                            forwardTitle={step !== 4 ? 'Продолжить' : 'Создать'}
                        />
                    </View>
                </View>
               
            </ScrollView>
            
        </View>
        
    )
}