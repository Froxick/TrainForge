import { useTheme } from "@/shared/hooks/useTheme"
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native"
import { WelcomeHeader } from "../ui/WelcomeHeader"
import { WelcomeInput } from "../ui/WelcomeInput"
import { ColorsType } from "@/shared/types/ColorsType"
import { Button } from "@/shared/ui/Button"
import { useState } from "react"
import { secureStoreUtil } from "@/shared/lib/secureStoreUtil"

const {height} = Dimensions.get('screen')
export const OnBoardingScreen = () => {
    const {themeColors} = useTheme()
    const [name,setName] = useState('')
    const validateName = () => {
        return name.length >= 3
    }
    const onSubmit = () => {
        secureStoreUtil.addItem('name',name)
    }
    const editName = (t: string) => {
        setName(t)
    }

    const styles = StyleSheet.create({
        container : {
            flex: 1,
            marginTop: height * 0.1
           
        },
        headerContainer : {

        },
        inputContainer : {
            backgroundColor: themeColors?.surface,
            borderRadius: 16,
            padding: 20,
            borderWidth: 1,
            borderColor: themeColors?.border,
            gap: 43,
            marginTop: height / 25

            
        }
    })
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
        >
        <ScrollView contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 10,
            paddingBottom: 40
        }} style={styles.container}>
            <View>
                <WelcomeHeader 
                    subTitle="Кузница твоей силы"
                    subTitleColor={themeColors?.textSecondary as string}
                    subTitleSize={16}
                    title="TrainForge"
                    size={52}
                    color={themeColors?.primary as string}

                />
            </View>
            <View style={styles.inputContainer}>
                <WelcomeInput 
                    onChange={(t) => editName(t)}
                    placeholderSub="Как вас зовут?"
                    colors={themeColors as ColorsType}
                    placeholder="Имя"
                    value={name}
                    maxLength={14}
                />
                <Button 
                    disabledColor={themeColors?.disabledColor as string}
                    disable={!validateName()}
                    title="Начать"
                    titleSize={16}
                    bold
                    backgraundColor={themeColors?.primary as string}
                    textColor={themeColors?.text as string}
                    onPress={onSubmit}
                    padding={10}
                    heigh={50}
                    subTitle="Твой прогресс начинается здесь"
                    subTitleColor={themeColors?.darkTextSecondary}
                />
                
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}