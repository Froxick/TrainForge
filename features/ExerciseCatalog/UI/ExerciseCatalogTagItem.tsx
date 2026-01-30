import { Colors } from "@/shared/constants/theme"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'

interface ExerciseCatalogTagItemProps {
    title: string,
    isSelect: boolean,
    onPress: () => void
}

export const ExerciseCatalogTagItem = ({
    title, isSelect,onPress
}: ExerciseCatalogTagItemProps) => {
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: isSelect ? Colors.primary : Colors.background,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: isSelect ? Colors.primary : Colors.border,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            shadowColor:  'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: isSelect ? 0.2 : 0.05,
            shadowRadius: 4,
            elevation: isSelect ? 4 : 1,
        },
        title: {
            color: isSelect ? Colors.surface : Colors.text,
            fontSize: 16,
            fontWeight: isSelect ? '600' : '400',
            flex: 1,
        },
        checkContainer: {
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: isSelect ? Colors.surface : Colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            borderWidth: 1,
            borderColor: isSelect ? Colors.surface : Colors.border,
        },
        checkIcon: {
            
        }
    })
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            {isSelect && (
                <View style={styles.checkContainer}>
                    <Ionicons 
                        name="checkmark" 
                        size={18} 
                        color={Colors.primary} 
                    />
                </View>
            )}
        </TouchableOpacity>
    )
}