import { ActivityIndicator, View } from "react-native"

import { Header } from "@/shared/ui/Header"
import { useTheme } from "@/shared/hooks/useTheme"
import { useExerciseCatalog } from "../hooks/useExerciseCatalog"

export const ExerciseCatalogScreen = () => {
    const {themeColors} = useTheme()
    const {items,loading} = useExerciseCatalog()
    console.log(items[0].tags)
    return (
        <View>
            <View>
                <Header 
                    title="Упражнения"
                    size={30}
                    color={themeColors?.text as string}
                />
            </View>
            <View>
                {
                    loading ? (<ActivityIndicator size={'large'}/>) : (
                        <View></View>

                    )
                }
            </View>
        </View>
    )
}