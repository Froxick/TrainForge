import { ExerciseCatalog } from "@/db/type"
import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, View, Text } from "react-native"
import { parseTags } from "../util/parseTag"
import { Button } from "@/shared/ui/Button"
interface ExerciseCatalogDetailedViewProps {
    item: ExerciseCatalog
    onDelete: () => void,
    onOpenEdit: () => void
}
export const ExerciseCatalogDetailedView = ({item,onDelete,onOpenEdit} : ExerciseCatalogDetailedViewProps) => {
    
    const styles = StyleSheet.create({
        container: {
            backgroundColor: Colors.surface
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
           
            borderBottomWidth: 1,
            borderColor: Colors.border,
            paddingBottom: 15
        },
        title: {
            color: Colors.text,
            fontSize: 20,
            fontWeight: 'bold',
            maxWidth: 250
        },
        rating: {
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
            gap: 5
        },
        ratingText: {
            color: Colors.text,
            fontSize: 18
        },
        description: {
           
        },
        descriptionText : {
            color: Colors.darkTextSecondary,
            fontSize: 16,
            paddingLeft: 3
        },
        sectionTitle : {
            color: Colors.text,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 4
        },
        tagsSection : {
            
        },
        tags: {
            flexDirection: 'row',
            flexWrap: "wrap",
            gap: 6,
            marginTop: 4,
            marginLeft: 3
        },
        contentContainer : {
             padding: 10,
             gap: 20
        },
         tag: {
            backgroundColor: Colors.border,
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 999
        },
        tagText: {
            color: Colors.secondary,
            fontSize: 14,
            fontWeight: 'bold'
        },
        buttonContainer : {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    })
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                   {item.name}
                </Text>
                <View style={styles.rating}>
                    <Ionicons color={'#dcd819'} size={18} name='star'/>
                    <Text style={styles.ratingText}>
                        {item.rating}
                    </Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.tagsSection}>
                    <Text style={styles.sectionTitle}>
                        Теги
                    </Text>
                    <View style={styles.tags}>
                         {
                            parseTags(item).map(tag => (
                                <View key={tag} style={styles.tag}>
                                    <Text style={styles.tagText}>
                                        {tag}
                                    </Text>
                                </View>
                            ))
                        }
                    </View>
                   
                </View>
                <View style={styles.description}>
                    <Text style={styles.sectionTitle}>
                        Описание
                    </Text>
                    {item.description ? (
                        <Text style={styles.descriptionText}>
                            {item.description || ''}
                        </Text>
                    ) : (
                        <Text>
                            Нет описания
                        </Text>
                    )}
                </View>
                 {
                    ( Boolean(item.createdByUser) === true) && (
                        <View style={styles.buttonContainer}>
                            
                            <Button 
                                title="Изменить"
                                titleSize={14}
                                textColor={Colors.text}
                                backgraundColor={Colors.rpeLow}
                                padding={5}
                                heigh={42}
                                width={135}
                                bold
                                onPress={onOpenEdit}
                                disable={false}
                                disabledColor={Colors.disabledColor}
                            />
                            <Button 
                                title="Удалить"
                                titleSize={14}
                                textColor={Colors.text}
                                backgraundColor={Colors.darkRed}
                                padding={5}
                                heigh={42}
                                width={135}
                                bold
                                onPress={onDelete}
                                disable={false}
                                disabledColor={Colors.disabledColor}
                            />
                        </View>
                    )
                 }
            </View>
            
        </View>
    )
}