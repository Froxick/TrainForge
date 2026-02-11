
import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { View,StyleSheet, Text } from "react-native"
interface HomeAdviceCardProps {
    title: string,
    subTitle: string
}
export const HomeAdviceCard = ({title,subTitle} : HomeAdviceCardProps) => {
    const styles = StyleSheet.create({
        container: {
            borderColor: Colors.primary,
            borderWidth: 2,
            borderRadius: 14,
            padding: 14,
            gap: 4,
            backgroundColor: '#a31f1f10'
        },
        headerContainer: {
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center'
        },
        headerText: {
            color: Colors.darkTextSecondary,
            fontSize: 15
        },
        content: {
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            paddingVertical: 10
        },
        contextText: {
            color: '#ffe3e3',
            fontSize: 15,
            paddingLeft: 4
            
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Ionicons name='bulb' size={18} color={Colors.primary}/>
                <Text style={styles.headerText}>
                    Совет дня
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contextText}>
                    {title}
                    
                </Text>
                <Text style={styles.contextText}>
                    {subTitle}
                </Text>
            </View>
        </View>
    )
}