import { ColorsType } from "@/shared/types/ColorsType"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
interface ExerciseCatalogSearchInputProps {
    value: string,
    setValue: (text: string) => void,
    placheholder: string,
    colors: ColorsType,
    clearInput: () => void
}
export const ExerciseCatalogSearchInput = ({value,setValue,placheholder,colors,clearInput} : ExerciseCatalogSearchInputProps) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 10,
            paddingHorizontal: 10,
        },
        input: {
            paddingVertical: 10,
            flex: 1,
            fontSize: 16,
            color: colors.text,
        },
        icon: {
          marginLeft: 8
        },
        button: {
            marginLeft: 8,
            borderRadius: 999,
            backgroundColor: colors.danger,
            padding: 3
        }

    })
    return(
        <View style={styles.container}>
            <TextInput
                placeholderTextColor={colors.darkTextSecondary}
                style={styles.input} value={value}
                onChangeText={setValue} placeholder={placheholder}
            />
            {
                value.length < 1 ? (
                    <Ionicons style={styles.icon} name='search' color={colors.darkTextSecondary} size={18}/>
                ) : (
                    <TouchableOpacity onPress={clearInput} style={styles.button}>
                        <Ionicons name='close' color={colors.text} size={18}/>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}