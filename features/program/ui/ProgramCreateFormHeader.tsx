import { Colors } from "@/shared/constants/theme"
import { ProgressBar } from "@/shared/ui/ProgresBar"
import { StyleSheet, Text, View } from "react-native"
interface ProgramCreateFormHeaderProps {
    step: number,
}
export const ProgramCreateFormHeader = ({step} : ProgramCreateFormHeaderProps) => {
    const headerInfoText = [
        'Укажите название программы','Придумайте названия неделям','Укажите дни отдыха','Настройте первую неделю'
    ]
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
        },
        infoBlock: {
            padding: 15,
            backgroundColor: '#1c1212',
            borderRadius: 15,
            marginTop: 10,
            borderWidth: 1,
            borderColor: Colors.border
        },
        infoBlockText: {
            color: Colors.darkTextSecondary,
            fontWeight: 'bold',
            fontSize: 15
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
            <View style={styles.infoBlock}>
                <Text style={styles.infoBlockText}>
                    {headerInfoText[step - 1]}
                </Text>
            </View>
        </View>
    )
}