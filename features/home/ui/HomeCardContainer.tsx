import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { ReactNode } from "react"
import { StyleSheet, Text, View } from "react-native"
interface HomeCardContainerProps {
    children: ReactNode,
    title: string,
    icon: React.ComponentProps<typeof Ionicons>['name'],
}
export const HomeCardContainer =  ({children,title,icon} : HomeCardContainerProps) => {
    const styles = StyleSheet.create({
         container: {
            backgroundColor: Colors.surface,
            borderColor: Colors.border,
            borderWidth: 1,
            borderRadius: 15,
            padding: 18,
            gap: 10
        },
        header: {
            flexDirection: 'row',
            gap: 5,
            alignItems:'center'
        },
        headerTitle: {
            color: Colors.darkTextSecondary,
            fontSize: 15
        },
        content: {
            
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name={icon} size={18} color={Colors.primary}/>
                <Text style={styles.headerTitle}>
                    {title}
                </Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
}