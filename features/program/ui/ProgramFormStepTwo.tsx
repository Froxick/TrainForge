import { StyleSheet, Text, View } from "react-native"
import { ProgramFormStetTwoInput } from "./ProgramFormStepTwoInput"
import { Colors } from "@/shared/constants/theme"
interface ProgramFormStepTwoProps {
    weekNames: string[],
    changeWeekName : (index: number,value:string) => void

}
export const ProgramFormStepTwo = ({weekNames,changeWeekName} : ProgramFormStepTwoProps) => {
    const styles= StyleSheet.create({
        container: {
            paddingHorizontal: 40
        },
        titleText: {
            color: Colors.text,
            fontSize: 18
        }
    })
    return (
        <View style={styles.container}>
            {
                weekNames.map((weekName,index) => (
                    <ProgramFormStetTwoInput 
                        value={weekName}
                        key={index}
                        changeText={(text: string) => changeWeekName(index,text)}
                        placheHolder="Название недели"
                        weekNumber={index+ 1}
                    />
                ))
            }
        </View>
    )
}