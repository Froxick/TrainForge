import { View } from "react-native"
import { useExerciseCatalog } from "../hooks/useExerciseCatalog"

export const ExerciseCatalogScreen = () => {
    const {exerciseCatalogItem} = useExerciseCatalog()
    
    return (
        <View>

        </View>
    )
}