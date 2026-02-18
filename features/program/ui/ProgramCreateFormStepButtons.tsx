import { Colors } from "@/shared/constants/theme"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
interface ProgramCreateFormStepButtonsProps {
    forward: () => void,
    back: () => void,
    backTitle: string,
    forwardTitle: string,
    disabledNextStep: boolean
   
}
export const ProgramCreateFormStepButtons = ({forward,back,
    backTitle,forwardTitle,disabledNextStep
} : ProgramCreateFormStepButtonsProps) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 15
        },
        backButton : {
            backgroundColor: "#353535",
            padding: 12,
            borderRadius: 15,
            width: 120,
            alignItems: 'center'
        },
        forwardButton : {
            backgroundColor: disabledNextStep ? Colors.disabledColor : Colors.primary,
            opacity: disabledNextStep ? 0.5 : 1,
            borderRadius: 15,
            padding: 12,
            alignItems: 'center',
            width: 160,
            
        },
        text: {
            fontSize: 16,
            color: Colors.text,
            fontWeight: 'bold'
        }
        
    })
    
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={back}>
                    <Text style={styles.text}>
                        {backTitle}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity disabled={disabledNextStep}  style={styles.forwardButton} onPress={forward}>
                    <Text style={styles.text}>
                        {forwardTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        )
  
}