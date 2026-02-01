import { ColorsType } from "@/shared/types/ColorsType"
import { StyleSheet, View } from "react-native"
import { ExerciseCatalogSearchInput } from "./ExerciseCatalogSearchInput"
import { ExerciseCatalogFilters } from "./ExerciseCatalogFilters"
interface ExerciseCatalogToolBarProps {
    colors: ColorsType,
    valueInput: string,
    setValueInput: (t: string) => void,
    clearValueInput: () => void,
    onToggleRatingFilter: () => void,
    onToggleCreateByUserFilter: () => void,
    ratingFilter: boolean,
    createByUserFilter: 'user' | 'default' | 'all'

}
export const ExerciseCatalogToolBar = ({colors,valueInput,setValueInput,clearValueInput,
    onToggleCreateByUserFilter,onToggleRatingFilter,ratingFilter,createByUserFilter
} : ExerciseCatalogToolBarProps) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 25,
            gap: 15
        }
    })
    return (
        <View style={styles.container}>
            <ExerciseCatalogSearchInput
                clearInput={clearValueInput}
                value={valueInput}
                setValue={setValueInput}
                placheholder="Поиск"
                colors={colors}
            />
            <ExerciseCatalogFilters 
                onToggleCreateByUserFilter={onToggleCreateByUserFilter}
                onToggleRatingFilter={onToggleRatingFilter}
                ratingFilter={ratingFilter}
                createByUserFilter={createByUserFilter}
            />
        </View>
    )
}