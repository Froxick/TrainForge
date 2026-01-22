import { useTheme } from "@/shared/hooks/useTheme"
import { secureStoreUtil } from "@/shared/lib/secureStoreUtil"
import { Header } from "@/shared/ui/Header"
import {  View } from "react-native"

export const HomeScreen = () => {
    const {themeColors} = useTheme()

    return (
        <View >
            <View>
                <Header
                    title={`Привет, ${secureStoreUtil.getItem('name')}`}
                    size={26}
                    color={themeColors?.text as string}
                    subTitle="23.01.2026"
                    subTitleColor={themeColors?.darkTextSecondary}
                    subTitleFontSize={16}
                 />
            </View>
        </View>
    )
}