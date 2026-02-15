import { Colors } from "@/shared/constants/theme"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
interface ProgramCreateFormStepButtonsProps {
    forward: () => void,
    back: () => void,
    backTitle: string,
    forwardTitle: string,
   
}
export const ProgramCreateFormStepButtons = ({forward,back,
    backTitle,forwardTitle
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
            backgroundColor: Colors.primary,
            borderRadius: 15,
            padding: 12,
            alignItems: 'center',
            width: 160
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
                <TouchableOpacity style={styles.forwardButton} onPress={forward}>
                    <Text style={styles.text}>
                        {forwardTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        )
  
}