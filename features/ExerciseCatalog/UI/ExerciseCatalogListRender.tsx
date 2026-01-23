import { ExerciseCatalog } from "@/db/type"
import { ColorsType } from "@/shared/types/ColorsType"
import { ScrollView, StyleSheet, View } from "react-native"
import { ExerciseCatalogCard } from "./ExerciseCatalogCard"
interface ExerciseCatalogListRenderProps {
    items: ExerciseCatalog[]
    colors: ColorsType
}   
export const ExerciseCatalogListRender = ({
    items,colors
}: ExerciseCatalogListRenderProps) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            gap: 15,
            paddingBottom: 100
        }
    })
    return (
        <ScrollView >
            <View style={styles.container}>
                {
                    items.map(el => (
                        <ExerciseCatalogCard
                        key={el.id}
                        item={el}
                        colors={colors}
                        />
                    ))
                }
            </View>
            
        </ScrollView>
    )
}