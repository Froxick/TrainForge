
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from "react-native"
import { WelcomeHeader } from "../ui/WelcomeHeader"
import { WelcomeInput } from "../ui/WelcomeInput"
import { ColorsType } from "@/shared/types/ColorsType"
import { Button } from "@/shared/ui/Button"
import { useState } from "react"
import { secureStoreUtil } from "@/shared/lib/secureStoreUtil"
import { router } from "expo-router"
import { Colors } from "@/shared/constants/theme"

const {height} = Dimensions.get('screen')
export const OnBoardingScreen = () => {
    
    const [name,setName] = useState('')
    const validateName = () => {
        return name.length >= 3
    }
    const onSubmit = () => {
        secureStoreUtil.addItem('name',name)
        router.replace('/(tabs)')
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
            backgroundColor: Colors?.surface,
            borderRadius: 16,
            padding: 20,
            borderWidth: 1,
            borderColor: Colors?.border,
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
            <View style={styles.headerContainer}>
                <WelcomeHeader 
                    subTitle="Кузница твоей силы"
                    subTitleColor={Colors?.textSecondary as string}
                    subTitleSize={16}
                    title="TrainForge"
                    size={52}
                    color={Colors?.primary as string}

                />
            </View>
            <View style={styles.inputContainer}>
                <WelcomeInput 
                    onChange={(t) => editName(t)}
                    placeholderSub="Как вас зовут?"
                    colors={Colors as ColorsType}
                    placeholder="Имя"
                    value={name}
                    maxLength={14}
                />
                <Button 
                    disabledColor={Colors?.disabledColor as string}
                    disable={!validateName()}
                    title="Начать"
                    titleSize={16}
                    bold
                    backgraundColor={Colors?.primary as string}
                    textColor={Colors?.text as string}
                    onPress={onSubmit}
                    padding={10}
                    heigh={50}
                    subTitle="Твой прогресс начинается здесь"
                    subTitleColor={Colors?.darkTextSecondary}
                />
                
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}