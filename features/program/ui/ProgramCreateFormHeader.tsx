import { Colors } from "@/shared/constants/theme"
import { ProgressBar } from "@/shared/ui/ProgresBar"
import { StyleSheet, Text, View } from "react-native"
interface ProgramCreateFormHeaderProps {
    step: number,
}
export const ProgramCreateFormHeader = ({step} : ProgramCreateFormHeaderProps) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6
        },
        textStep: {
            color: Colors.text,
            fontSize: 18
        },
        textTitle: {
            color: Colors.text,
            fontSize: 22,
            fontWeight: 'bold'
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Создание программы
            </Text>
            <Text style={styles.textStep}>
                Шаг <Text
                    style={{color:Colors.primary,fontWeight:'bold'}}
                >{step}</Text> из 4
            </Text>
          
            <ProgressBar 
                width={100}
                progress={step}
                maxProgress={4}
                height={10}
                lineColor='#343434'
                progressLineColor={Colors.primary}
            />
        </View>
    )
}