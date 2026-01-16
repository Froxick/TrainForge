import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
interface ButtonProps {
    title: string,
    titleSize: number,
    padding: number,
    textColor: string,
    backgraundColor: string,
    bold: boolean,
    heigh: number,
    onPress: () => void,
    disable: boolean,
    disabledColor: string,
    subTitle? : string,
    subTitleColor? :string
}
export const Button = ({...props} : ButtonProps) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: props.disable ? props.disabledColor : props.backgraundColor,
            padding: props.padding,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            height: props.heigh
        },
        text : {
            color: props.textColor,
            fontSize: props.titleSize,
            fontWeight: props.bold ? 'bold' : 'normal' 
        },
        subTitle : {
            color: props.subTitleColor,
            textAlign: 'center'
        }
    })
    return (
       <View style={{gap: 5}}>
             <TouchableOpacity disabled={props.disable} style={[
                styles.button,props.disable && {opacity: 0.6}
            ]} onPress={props.onPress}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </TouchableOpacity>
            {
                props.subTitle && (
                    <Text style={styles.subTitle}>
                            {props.subTitle}
                    </Text>
                )
            }
       </View>
    )
}