
import { Colors } from "@/shared/constants/theme"
import { secureStoreUtil } from "@/shared/lib/secureStoreUtil"
import { Header } from "@/shared/ui/Header"
import {  View } from "react-native"

export const HomeScreen = () => {
    

    return (
        <View >
            <View>
                <Header
                    title={`Привет, ${secureStoreUtil.getItem('name')}`}
                    size={26}
                    color={Colors?.text as string}
                    subTitle="23.01.2026"
                    subTitleColor={Colors?.darkTextSecondary}
                    subTitleFontSize={16}
                 />
            </View>
        </View>
    )
}