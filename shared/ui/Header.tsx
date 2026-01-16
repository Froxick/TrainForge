import { StyleSheet, Text, View } from "react-native"
interface HeaderProps {
    title : string,
    size: number,
    color: string
}
export const Header = ({size,title,color} : HeaderProps) => {
    const styles = StyleSheet.create({
        container : {

        },
        text : {
            color: color,
            fontSize: size,
            fontWeight: 'bold'
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}