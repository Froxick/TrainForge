import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity } from "react-native"
interface ExerciseCatalogAddButtonProps {
    onPress: () => void
}
export const ExerciseCatalogAddButton = ({onPress} : ExerciseCatalogAddButtonProps) => {
    const styles = StyleSheet.create({
        container: {
            padding: 6,
            backgroundColor: Colors.border,
            borderRadius: 999
        },
        icon : {
            
        }
    })
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Ionicons name='add' size={24} style={styles.icon} color={Colors.text}/>
        </TouchableOpacity>
    )
}