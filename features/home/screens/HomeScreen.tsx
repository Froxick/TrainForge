
import { Colors } from "@/shared/constants/theme"
import { secureStoreUtil } from "@/shared/lib/secureStoreUtil"
import { Header } from "@/shared/ui/Header"
import {  ScrollView, View } from "react-native"
import { HomeActionBar } from "../ui/HomeActionBar"
import { HomeActionButtonProps } from '../ui/HomeActionButton';
import { HomeActiveProgramCard } from "../ui/HomeActiveProgramCard"
import { HomeTodayTrain } from "../ui/HomeTodayTrain"
import { HomeAdviceCard } from "../ui/HomeAdviceCard"
import { HomeHelloCard } from "../ui/HomeHelloCard"


export const HomeScreen = () => {
    const actionButtons : HomeActionButtonProps[] = [
        {
            title: 'Создать программу',
            icon: 'add-circle',
            onPress: () => {}
        },
        {
            title: 'Мои программы',
            icon: 'book',
            onPress: () => {}
        },
        {
            title: 'История',
            icon: 'stats-chart',
            onPress: () => {}
        },
    ]

    return (
        <ScrollView >
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
            <View style={{
                marginTop: 20,
                marginBottom: 15
            }}>
                <HomeActionBar items={actionButtons}/>
            </View>
            <View style={{
                gap: 20
            }}>
                {/* <HomeActiveProgramCard /> */}
                <HomeHelloCard />
                <HomeTodayTrain />
                <HomeAdviceCard 
                    title="Регулярность важнее интенсивности."
                    subTitle="Даже короткая тренировка лучше пропуска."
                />
            </View>
            
        </ScrollView>
    )
}