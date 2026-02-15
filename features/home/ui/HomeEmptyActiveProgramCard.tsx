import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { HomeCardContainer } from "./HomeCardContainer"
import { Colors } from "@/shared/constants/theme"

export const HomeEmptyActiveProgamCard = () => {
    const styles = StyleSheet.create({
        text: {
            color: Colors.text,
            fontSize: 18,
            fontWeight: 'bold'
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
        <HomeCardContainer title="Активная программа" icon="barbell">
            <View style={{justifyContent:'center',alignItems:'center',
                paddingVertical: 30}}>
                <Text style={styles.text}>
                    У вас нет активной программы
                </Text>
                
            </View>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>
                        Выбрать
                    </Text>
                </TouchableOpacity>
        </HomeCardContainer>
    )
}