import { ExerciseCatalog } from "@/db/type"
import { ColorsType } from "@/shared/types/ColorsType"
import { ScrollView, StyleSheet, View } from "react-native"
import { ExerciseCatalogCard } from "./ExerciseCatalogCard"
interface ExerciseCatalogListRenderProps {
    items: ExerciseCatalog[]
    colors: ColorsType
    openViewModal : (item: ExerciseCatalog) => void
}   
export const ExerciseCatalogListRender = ({
    items,colors,openViewModal
}: ExerciseCatalogListRenderProps) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            flex: 1,
            gap: 15,
            paddingBottom: 50,
            marginBottom: 500
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
                        onPress={() => openViewModal(el)}
                        />
                    ))
                }
            </View>
            
        </ScrollView>
    )
}