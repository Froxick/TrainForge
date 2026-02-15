
import { Colors } from "@/shared/constants/theme"
import { secureStoreUtil } from "@/shared/lib/secureStoreUtil"
import { Header } from "@/shared/ui/Header"
import {  ActivityIndicator, ScrollView, View } from "react-native"
import { HomeActionBar } from "../ui/HomeActionBar"
import { HomeActionButtonProps } from '../ui/HomeActionButton';
import { HomeActiveProgramCard } from "../ui/HomeActiveProgramCard"
import { HomeTodayTrain } from "../ui/HomeTodayTrain"
import { HomeAdviceCard } from "../ui/HomeAdviceCard"
import { HomeHelloCard } from "../ui/HomeHelloCard"
import { HomeEmptyActiveTrainCard } from "../ui/HomeEmptyActiveTrainCard"
import { useProgram } from "@/features/program/hooks/useProgram"
import { HomeEmptyActiveProgamCard } from "../ui/HomeEmptyActiveProgramCard"


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

    const {programs,loading,checkActiveProgram} = useProgram()
    console.log(programs.length)
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
           
                {
                    loading ? (<View style={{justifyContent:"center",alignItems:"center"}}>
                        <ActivityIndicator color={Colors.primary} size={'large'}/>
                    </View>) : (
                        <View style={{gap: 20}}>
                            
                            
                            {
                                programs.length === 0 ? <HomeHelloCard /> : 
                                    (
                                        checkActiveProgram() ? <HomeActiveProgramCard /> :
                                            <HomeEmptyActiveProgamCard />
                                    )  
                            }
                            {
                                programs.length !== 0 &&   <HomeEmptyActiveTrainCard 
                                    disableButton={
                                        !checkActiveProgram()
                                    }
                            /> 
                            }
                            <HomeAdviceCard 
                                title="Регулярность важнее интенсивности."
                                subTitle="Даже короткая тренировка лучше пропуска."
                            />
                        </View>
                    )
                }
           
            
        </ScrollView>
    )
}