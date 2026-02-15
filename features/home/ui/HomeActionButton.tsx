import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"
export interface HomeActionButtonProps {
    title: string,
    icon: React.ComponentProps<typeof Ionicons>['name'],
    onPress: () => void
}
const {width} = Dimensions.get('window')
export const HomeActionButton = ({title,icon,onPress} : HomeActionButtonProps) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: Colors.surface,
            borderColor: Colors.border,
            borderWidth: 1,
            borderRadius: 15,
            alignItems: 'center',
            padding: 6,
            gap: 3,
        },
        title: {
            color: Colors.text,
            fontSize: 14,
            width: width / 4,
            textAlign: 'center'
        },
    })
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons  size={34} name={icon} color={Colors.primary}/>
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}