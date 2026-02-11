import { Colors } from "@/shared/constants/theme"
import { Text, TouchableOpacity, StyleSheet, View  } from "react-native"

import { HomeCardContainer } from "./HomeCardContainer"
interface HomeActiveProgramCardProps {
    item: undefined,
    onOpen: () => void
}
export const HomeActiveProgramCard = () => {
    const styles = StyleSheet.create({
        headerTitle: {
            color: Colors.darkTextSecondary,
            fontSize: 15
        },
        titleContainer: {
            gap: 4
        },
        title: {
            color: Colors.text,
            fontSize: 20,
            fontWeight: 'bold'
        },
        week: {
            color: Colors.text
        },
        button: {
            borderWidth: 2,
            borderColor: Colors.primary,
            borderRadius: 10,
            padding: 8,
            alignItems: 'center',
            marginTop: 12

        },
        textButton :{
            color: Colors.primary,
            fontSize: 15
        }
    })
    return (
        <HomeCardContainer title="Активная программа" icon='barbell'>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Жим 200кг
                    </Text>
                    <Text style={styles.week}>
                        Неделя 2 из 6
                    </Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Открыть программу
                    </Text>
                </TouchableOpacity>
            </View>
        </HomeCardContainer> 
    )
}