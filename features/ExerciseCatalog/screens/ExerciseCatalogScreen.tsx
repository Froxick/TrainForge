import { ActivityIndicator, View } from "react-native"

import { Header } from "@/shared/ui/Header"
import { useTheme } from "@/shared/hooks/useTheme"
import { useExerciseCatalog } from "../hooks/useExerciseCatalog"
import { ColorsType } from "@/shared/types/ColorsType"
import { ExerciseCatalogListRender } from "../UI/ExerciseCatalogListRender"


export const ExerciseCatalogScreen = () => {
    const {themeColors} = useTheme()
    const {items,loading} = useExerciseCatalog()
    
    return (
        <View>
            <View>
                <Header 
                    title="Упражнения"
                    size={30}
                    color={themeColors?.text as string}
                />
            </View>
            <View style={{marginTop: 30}}>
                {
                    loading ? (<ActivityIndicator size={'large'}/>) : (
                        <ExerciseCatalogListRender 
                            items={items}
                            colors={themeColors as ColorsType}
                        />

                    )
                }
            </View>
        </View>
    )
}