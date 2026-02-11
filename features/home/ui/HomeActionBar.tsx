import { StyleSheet, View } from "react-native"
import { HomeActionButton, HomeActionButtonProps } from "./HomeActionButton"

interface HomeActionBarProps {
    items: HomeActionButtonProps[]
}
export const HomeActionBar = ({items} : HomeActionBarProps) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 8
        }
    })
    return (
        <View style={styles.container}>
            {items.map(el => (
                <HomeActionButton 
                    key={el.title}
                    icon={el.icon}
                    title={el.title}
                    onPress={el.onPress}
                />
            ))}
        </View>
    )
}