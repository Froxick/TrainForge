import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export const HomeHelloItemText = ({number,icon,text} : {number: string,text: string,
        icon: React.ComponentProps<typeof Ionicons>['name']
    }) => {
        const styles = StyleSheet.create({
             itemContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5
            },
            itemNumber: {
                color:Colors.primary,
                fontWeight: 'bold'
            },
            itemText: {
                color: Colors.text,
                fontSize: 16
            }
        })
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.itemNumber}>
                    {number}
                </Text>
                <Ionicons name={icon} size={18} color={Colors.primary}/>
                <Text style={styles.itemText}>
                    {text}
                </Text>
            </View>
        )
}
