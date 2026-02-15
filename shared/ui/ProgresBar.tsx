import { StyleSheet, View } from "react-native"

interface ProgressBarProps {
    maxProgress: number,
    progress: number,
    height: number,
    lineColor: string,
    progressLineColor: string,
    width: number
}
export const ProgressBar = ({maxProgress,progress,height
    ,lineColor,progressLineColor,width
} : ProgressBarProps) => {
     const progressPercentage = Math.min(progress / maxProgress, 1)
    const styles = StyleSheet.create({
        line: {
            width: width,
            height: height,
            backgroundColor: lineColor,
            borderRadius: height / 2, 
            overflow: 'hidden',
        },
        progressLine: {
            width: `${progressPercentage * 100}%`,
            height: '100%',
            backgroundColor: progressLineColor,
        }
    })
    return (
        <View style={styles.line}>
            <View 
                style={styles.progressLine}
            />
        </View>
    )
}