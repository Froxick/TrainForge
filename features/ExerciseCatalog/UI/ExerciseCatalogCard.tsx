import { ExerciseCatalog } from "@/db/type"
import { ColorsType } from "@/shared/types/ColorsType"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
interface ExerciseCatalogCardProps {
    colors: ColorsType,
    item: ExerciseCatalog
}
export const ExerciseCatalogCard = ({colors,item} : ExerciseCatalogCardProps) => {

    const parseTags = () : string[] => {
        let tags : string[] = []
        try{
            tags = item.tags ? JSON.parse(item.tags) : []
            
        }catch(e){
            tags = []
            console.log(e)
        }
        return tags;
    }
    const styles = StyleSheet.create({
        container : {
            backgroundColor: colors.surface,
            padding: 16,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: colors.border  
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        headerTitle: {
            fontSize: 18,
            color: colors.text,
            flex: 1,
            paddingRight: 8
        },
        rating: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4
        },
        ratingText: {
            color: colors.text,
            fontWeight: '600'
        },
        tags: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 6,
            marginTop: 8,
        },
        tag: {
            backgroundColor: colors.border,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 999
        },
        tagText: {
            color: colors.darkTextSecondary,
            fontSize: 12
        },
        description: {
            marginTop: 10,
            color: colors.darkTextSecondary,
            fontSize: 14,
            lineHeight: 20
        }
    })
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        {item.name}
                    </Text>
                    <View style={styles.rating}>
                        <Ionicons name="star" size={16} color="#F5C518" />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
            </View>
            <View style={styles.tags}>
                {
                    parseTags().map(tag =>(
                        <View style={styles.tag} key={tag}>
                            <Text style={styles.tagText}>
                                {tag}
                            </Text>
                        </View>
                    ))
                }
            </View>
            <Text style={styles.description}>
                {item.description}
            </Text>
        </TouchableOpacity>
    )
}