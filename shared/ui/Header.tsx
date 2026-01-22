import { StyleSheet, Text, View } from "react-native"
interface HeaderProps {
    title : string,
    size: number,
    color: string,
    subTitle?: string,
    subTitleColor?: string,
    subTitleFontSize?: number
}
export const Header = ({size,title,color,subTitle,subTitleColor,subTitleFontSize} : HeaderProps) => {
    const styles = StyleSheet.create({
        container : {

        },
        text : {
            color: color,
            fontSize: size,
            fontWeight: 'bold'
        },
        subTitle: {
            color: subTitleColor,
            fontSize: subTitleFontSize
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
            {
                subTitle && (<Text style={styles.subTitle}>
                    {subTitle}
                </Text>)
            }
        </View>
    )
}