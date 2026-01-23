import { ColorsType } from "@/shared/types/ColorsType"
import { StyleSheet, View } from "react-native"
import { ExerciseCatalogSearchInput } from "./ExerciseCatalogSearchInput"
interface ExerciseCatalogToolBarProps {
    colors: ColorsType,
    valueInput: string,
    setValueInput: (t: string) => void,
    clearValueInput: () => void
}
export const ExerciseCatalogToolBar = ({colors,valueInput,setValueInput,clearValueInput} : ExerciseCatalogToolBarProps) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 25
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
        </View>
    )
}