import { Colors } from "@/shared/constants/theme"
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
const {height} = Dimensions.get('window')
export const ExerciseCatalogEmptyList = () => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: height / 1.8 
        },
        text: {
            color: Colors.darkTextSecondary,
            fontSize: 18,
            fontWeight: '600',
            textAlign: 'center'
        },
        image: {
            width: 150,
            height: 150
        }
    })
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={require('../../../assets/images/no-results.png')}
            />
            <Text style={styles.text}>
                Не найдено
            </Text>
        </View>
    )
}