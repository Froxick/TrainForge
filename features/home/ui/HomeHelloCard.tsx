import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { HomeCardContainer } from "./HomeCardContainer"
import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { HomeHelloItemText } from "./HomeHelloTextItem"

export const HomeHelloCard = () => {
    const styles = StyleSheet.create({
        titleText: {
            color: Colors.text,
            fontWeight: 'bold',
            fontSize: 18
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
        <HomeCardContainer
            title="Добро пожаловать в TrainForge"
            icon='hand-right'
        >
            <View>
                <View style={{
                    gap: 8
                }}>
                    <Text style={styles.titleText}>
                        Чтобы начать тренироваться:
                    </Text>
                    <View style={{
                        gap: 8
                    }}>
                        <HomeHelloItemText number="1" icon='create' text="Создайте программу"/>
                        <HomeHelloItemText number="2" icon='train' text="Запланируйте тренировки"/>
                        <HomeHelloItemText number="3" icon='stats-chart' text="Отслеживайте прогресс"/>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Создать первую программу
                    </Text>
                </TouchableOpacity>
            </View>   
        </HomeCardContainer>
    )
}