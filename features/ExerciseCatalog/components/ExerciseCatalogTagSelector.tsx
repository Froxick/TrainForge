import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ExerciseCatalogTagItem } from "../UI/ExerciseCatalogTagItem"
import { Button } from "@/shared/ui/Button"
interface ExerciseCatalogTagSelectorProps {
  itemsList: string[],
  selectedItems: string[],
  onSelectItems: (items: string[]) => void,
 

}
export const ExerciseCatalogTagSelector = ({
    itemsList,selectedItems,onSelectItems
} : ExerciseCatalogTagSelectorProps) => {

    const [listView,setListView] = useState<boolean>()
    const [localSelectedItems, setLocalSelectedItems] = useState<string[]>(selectedItems)
    
    const toggleList = () => {
        setListView(!listView)
    }

    useEffect(() => {
        setLocalSelectedItems(selectedItems)
    },[selectedItems])

    const handleTagPress = (tag: string) => {

        setLocalSelectedItems(prev => {
        if (prev.includes(tag)) {
            return prev.filter(t => t !== tag)
        } else {
            return [...prev, tag]
        }
        })
    }

    const handleApply = () => {
        onSelectItems(localSelectedItems)
        toggleList()
    }

    const handleClearLocal = () => {
        setLocalSelectedItems([])
    }

    const handleRemove = (tag: string) => {
        const newTags = selectedItems.filter(t => t !== tag)
        if(newTags.length < 1) {
            onSelectItems([])
        }
        onSelectItems(newTags)
    }

    
    const styles = StyleSheet.create({
        container: {
            gap: 5
        },
        listButton: {
           
            borderWidth: 1,
            borderColor: Colors.darkTextSecondary,
            padding: 16,
            borderRadius: 8,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        listButtonText: {
            color: Colors.text,
            fontSize: 16,
            fontWeight: '500'
        },
        iconDrop : {
             transform: [{ rotate: listView ? '180deg' : '0deg' }]
        },
        contentList: {
           
            borderRadius: 10,
            borderWidth: 1,
            borderColor: Colors.darkTextSecondary,
            gap: 10,
            paddingHorizontal: 18,
            paddingVertical: 18
        },
        listTitle : {
            color: Colors.text,
            fontSize: 16,
            padding: 2,
           
            fontWeight: 'bold'
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15
        },
        selectedTagsContainer: {
            marginTop: 12
        },
        selectedTagsTitle: {
            color: Colors.textSecondary,
            fontSize: 14,
            marginBottom: 8
        },
            selectedTagsList: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 8
        },
            selectedTag: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.primary + '20',
            borderRadius: 16,
            paddingHorizontal: 12,
            paddingVertical: 6,
            borderWidth: 1,
            borderColor: Colors.primary
        },
            selectedTagText: {
            color: Colors.primary,
            fontSize: 14,
            fontWeight: '500'
        },
        removeTagButton: {
            marginLeft: 6,
            padding: 2
        },
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.listButton}
                onPress={toggleList}
            >
                <Text style={styles.listButtonText}>
                    Теги  :  <Text style={{color: Colors.primary,fontWeight: 'bold'}}>{selectedItems.length}</Text>
                </Text>
                <Ionicons
                    name="chevron-down" 
                    size={20} 
                    color={Colors?.darkTextSecondary}
                    style={styles.iconDrop}
                />
            </TouchableOpacity>
            {
                listView && 
                    <View style={styles.contentList}>
                        <Text style={styles.listTitle}>
                            Выберите теги
                        </Text>
                        {
                             itemsList.map(el => (
                                <ExerciseCatalogTagItem
                                    onPress={() => handleTagPress(el)}
                                    key={el} 
                                    title={el}
                                    isSelect={localSelectedItems.includes(el)}
                                />
                            ))
                        }
                        <View style={styles.buttonContainer}>
                            <Button 
                                
                                title="Применить"
                                backgraundColor={Colors.primary}
                                textColor={Colors.text}
                                padding={10}
                                width={140}
                                bold
                                heigh={40}
                                disable={false}
                                disabledColor={Colors.disabledColor}
                                onPress={handleApply}
                                titleSize={15}
                            />
                            <Button 
                                title="Отмена"
                                backgraundColor={'#333333'}
                                textColor={Colors.textSecondary}
                                padding={10}
                                width={140}
                                bold
                                heigh={40}
                                disable={false}
                                disabledColor={Colors.disabledColor}
                                onPress={handleClearLocal}
                                titleSize={15}
                            />
                        </View>
                    </View>
            }
            {!listView && selectedItems.length > 0 && (
                <View style={styles.selectedTagsContainer}>
                <Text style={styles.selectedTagsTitle}>Выбранные теги:</Text>
                <View style={styles.selectedTagsList}>
                    {selectedItems.map(tag => (
                        <View key={tag} style={styles.selectedTag}>
                            <Text style={styles.selectedTagText}>{tag}</Text>
                            <TouchableOpacity 
                                onPress={() => handleRemove(tag)}
                                style={styles.removeTagButton}
                            >
                            <Ionicons 
                                name="close-circle" 
                                size={16} 
                                color={Colors.primary} 
                            />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                </View>
            )}

        </View>
    )
}