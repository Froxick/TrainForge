import { Colors } from "@/shared/constants/theme"
import { Button } from "@/shared/ui/Button"
import { FormInput } from "@/shared/ui/FormInput"
import { StyleSheet, Text, View } from "react-native"
import { ExerciseCatalogRatingSelector } from "./ExerciseCatalogRatingSelector"

import { EXERCISE_CATALOG_TAG_LIST } from "@/shared/constants/exerciseCatalogTagsList"
import { ExerciseCatalogTagSelector } from "./ExerciseCatalogTagSelector"
import { useExerciseCatalogForm } from "../hooks/useExerciseCatalogForm"
import { parseStringTagsToArray, serializeTags } from "../util/parseTag"
import { ExerciseCatalog } from "@/db/type"

interface ExerciseCatalogFormProps {
    onCreate: (data: Omit<ExerciseCatalog, 'id' | 'createdByUser'>) => void,
    closeForm : () => void
}
export const ExerciseCatalogForm = ({onCreate,closeForm} : ExerciseCatalogFormProps) => {
    const {state,setStateForm,validateForm} = useExerciseCatalogForm()

    const onCreateExercise = () => {
        if(validateForm()){
            const data : Omit<ExerciseCatalog, 'id' | 'createdByUser'> = {
                name: state.name,
                description: state.description,
                rating: state.rating,
                tags: state.tags
            }
           
            onCreate(data)
            closeForm()
        }
    }

    const changeRating = (rating: number) => {
        setStateForm('rating',rating)
    }
    const setTagsArr = (tags: string[]) => {
       if(tags.length < 1) {
         setStateForm('tags','')
       } else {
         const tags_string = serializeTags(tags)
        if(tags_string) {
                setStateForm('tags',tags_string)
        } 
       }
      
    }

    const styles = StyleSheet.create({
        container: {
            marginTop: 10,
            gap: 20
        },
        content: {
            gap: 20
        },
        section: {
            gap: 4,
           
        },
        sectionTitle: {
            color: Colors.text,
            fontWeight: '600',
            marginLeft: 3,
            fontSize: 16
        },
        ratingContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            
        },
        buttonContainer: {

        }

    })
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Название
                    </Text>
                     <FormInput
                        clearInput={() => {}}
                        icon='fitness'
                        value={state.name}
                        setValue={(t) => setStateForm('name',t)}
                        placheholder="Название"
                    />
                </View>
               <View style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        Описание
                    </Text>
                     <FormInput 
                        clearInput={() => {}}
                        icon='document-text'
                        value={state.description as string}
                        setValue={(t) => setStateForm('description',t)}
                        placheholder="Описание"
                        multiline={true}
                        numberOfLines={3}
                        maxHeight={400}
                        minHeight={100}
                    /> 
               </View>
               <View style={styles.ratingContainer}> 
                <Text style={styles.sectionTitle}>
                    Рейтинг
                </Text>
                    <ExerciseCatalogRatingSelector 
                        initialRating={state.rating}
                        onRatingChange={changeRating}
                        size={24}
                        maxRating={5}
                    />
               </View>
               <View>
                <ExerciseCatalogTagSelector
                    itemsList={EXERCISE_CATALOG_TAG_LIST}
                    selectedItems={parseStringTagsToArray(state.tags)}
                    onSelectItems={setTagsArr}


                />
               </View>
               
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Создать"
                    titleSize={17}
                    padding={8}
                    textColor={Colors.text}
                    backgraundColor={Colors.primary}
                    bold
                    heigh={45}
                    onPress={onCreateExercise}
                    disable={!validateForm()}
                    disabledColor={Colors.disabledColor}
                    subTitle="Создайте своё упражнение"
                    subTitleColor={Colors.darkTextSecondary}
                />
            </View>
        </View>
    )
}