
    import { Ionicons } from "@expo/vector-icons"

    import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
    import { Colors } from "../constants/theme"
    interface FormInpuProps {
        value: string,
        setValue: (text: string) => void,
        placheholder: string,
        clearInput: () => void,
        icon?: React.ComponentProps<typeof Ionicons>['name'],
        multiline?: boolean, 
        numberOfLines?: number,
        maxHeight?: number,
        minHeight?: number
    }
    export const FormInput = ({value,setValue,placheholder,clearInput,icon,
        multiline = false,
        numberOfLines = 1,
        maxHeight = 150,
        minHeight,
    } : FormInpuProps) => {
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                alignItems: multiline ? 'flex-start' : 'center',
                borderWidth: 1,
                borderColor: Colors.darkTextSecondary,
                borderRadius: 10,
                paddingHorizontal: 10,
                minHeight: minHeight || 'auto',
                maxHeight: multiline ? maxHeight : undefined, 
            },
            input: {
                paddingVertical: 10,
                flex: 1,
                fontSize: 16,
                color: Colors.text,
            },
            icon: {
            marginLeft: 8,
            marginRight: 10,
            marginTop: multiline ? 10 : 0,
            },
            button: {
                marginLeft: 8,
                borderRadius: 999,
                backgroundColor: Colors.danger,
                padding: 3,
                marginTop: multiline ? 10 : 0,
            }

        })
        return(
            <View style={styles.container}>
                {
                    value.length < 1 && (
                        icon && (
                            <Ionicons style={styles.icon} name={icon} color={Colors.darkTextSecondary} size={18}/>
                        )
                    ) 
                }
                <TextInput
                    placeholderTextColor={Colors.darkTextSecondary}
                    style={styles.input} value={value}
                    onChangeText={setValue} placeholder={placheholder}
                    multiline={multiline}
                    numberOfLines={multiline ? numberOfLines : 1}
                    scrollEnabled={multiline}
                    blurOnSubmit={!multiline} 
                    returnKeyType={multiline ? 'default' : 'done'} 
                />
                {
                    value.length > 1 && (
                        <TouchableOpacity onPress={clearInput} style={styles.button}>
                            <Ionicons name='close' color={Colors.text} size={18}/>
                        </TouchableOpacity>
                    )
                }
            
            </View>
        )
    }