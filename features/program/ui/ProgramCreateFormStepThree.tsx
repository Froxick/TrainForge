import { Dimensions, StyleSheet, View } from "react-native"
import { ProgramRestDaySelector } from "./ProgramRestDaySelector"
interface ProgramCreateFormStepThreeProps {
    restDays: number[],
    onPickDay: (index: number) => void
}
const {width} = Dimensions.get('window')
export const ProgramCreateFormStepThree = ({
    restDays,onPickDay
} : ProgramCreateFormStepThreeProps) => {
    const styles = StyleSheet.create({
        container: {
            width: width / 1.2
        }
    })
    return (

        <View style={styles.container}>
            <ProgramRestDaySelector 
                restDayList={restDays}
                dayPick={onPickDay}
            />
        </View>
    )
}