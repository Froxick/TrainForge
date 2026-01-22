import { ReactNode } from "react"
import { StyleSheet, View } from "react-native"

export const PaddingContainer = ( {children} : {children: ReactNode}) => {
    const styles = StyleSheet.create({
        container : {
            paddingVertical: 45,
                     paddingHorizontal: 22
        }
    })
    return ( <View style={styles.container}>
        {children}
    </View>)
}