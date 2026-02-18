import { StyleSheet, Text, View } from "react-native"
import { ProgramCreateFormInput } from "./ProgramCreateFormInput"
import { Colors } from "@/shared/constants/theme"
interface ProgramFormStetTwoInputProps {
    weekNumber: number,
    changeText: (text:string) => void,
    value: string,
    placheHolder: string
}
export const ProgramFormStetTwoInput = ({weekNumber,changeText,value,placheHolder} : ProgramFormStetTwoInputProps) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 15,
            alignItems:'center',
            justifyContent: 'center',
            marginVertical: 10
        },
        textNumber: {
            color: Colors.primary,
            fontSize: 18,
            fontWeight: 'bold',
           
        },
        numberContainer: {
             backgroundColor: '#282222',
             padding: 10,
             alignItems:'center',
             justifyContent: 'center',
             borderRadius: 100,
             width: 45,
             height: 45
        }
    })
    return(
        <View style={styles.container}>
            <View style={styles.numberContainer}>
                <Text style={styles.textNumber}>
                    {weekNumber}
                </Text>
            </View>
            
            <ProgramCreateFormInput 
                value={value}
                setValue={changeText}
                placheholder={placheHolder}
                icon='document'

            />
        </View>
    )
}