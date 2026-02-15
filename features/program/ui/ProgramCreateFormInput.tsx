
    import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"

    import { StyleSheet, TextInput, View } from "react-native"
   
    interface  ProgramCreateFormInputProps{
        value: string,
        setValue: (text: string) => void,
        placheholder: string,
        icon: React.ComponentProps<typeof Ionicons>['name'],
        multiline?: boolean, 
        numberOfLines?: number,
        maxHeight?: number,
        minHeight?: number
    }
    export const ProgramCreateFormInput = ({value,setValue,placheholder,icon,
        multiline = false,
        numberOfLines = 1,
        maxHeight = 150,
        minHeight,
    } : ProgramCreateFormInputProps) => {

         const [isFocused, setIsFocused] = useState(false);

        const styles = StyleSheet.create({
            container: {
                flexDirection: 'row',
                alignItems: multiline ? 'flex-start' : 'center',
                borderWidth: 1,
                borderColor: isFocused ? Colors.primary : Colors.darkTextSecondary,
                borderRadius: 14,
                paddingHorizontal: 12,
                minHeight: minHeight || 'auto',
                maxHeight: multiline ? maxHeight : undefined, 
                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
            },
            input: {
                paddingVertical: 16,
                flex: 1,
                fontSize: 17,
                color: Colors.text,
            },
            icon: {
                marginLeft: 8,
                marginRight: 10,
                marginTop: multiline ? 10 : 0,
                color: isFocused ? Colors.primary : Colors.darkTextSecondary,
            },
          

        })
        return(
            <View style={styles.container}>          

                <Ionicons style={styles.icon} name={icon} color={Colors.darkTextSecondary} size={18}/>
                <TextInput
                    placeholderTextColor={Colors.darkTextSecondary}
                    style={styles.input} value={value}
                    onChangeText={setValue} placeholder={placheholder}
                    multiline={multiline}
                    numberOfLines={multiline ? numberOfLines : 1}
                    scrollEnabled={multiline}
                    blurOnSubmit={!multiline} 
                    returnKeyType={multiline ? 'default' : 'done'} 
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />

            
            </View>
        )
    }