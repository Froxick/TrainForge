import { Header } from "@/shared/ui/Header"
import { Image, StyleSheet, Text, View } from "react-native"

interface WelcomeHeaderProps {
    title : string,
    subTitle: string,
    subTitleColor: string,
    subTitleSize: number
    size: number,
    color: string
}
export const WelcomeHeader = ({size,title,color,subTitle,subTitleColor,subTitleSize} : WelcomeHeaderProps) => {
    const styles = StyleSheet.create({
        subText: {
            color: subTitleColor,
            fontSize: subTitleSize,
        },
        container : {
            justifyContent: 'center',
            alignItems: 'center'
        },
        icon: { 
            width: 200,
            height: 200
        }
    })
    return (
        <View style={styles.container}>
            <Image 
                style={styles.icon}
                source={require("../../../assets/images/fire.png")}
                resizeMode="contain"
            />
             <Header 
                title={title}
                size={size}
                color={color}
            />
            <Text style={styles.subText}>
                {subTitle}
            </Text>
        </View>
    )
}