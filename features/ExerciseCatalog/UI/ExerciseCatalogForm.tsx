import { Colors } from "@/shared/constants/theme"
import { Button } from "@/shared/ui/Button"
import { FormInput } from "@/shared/ui/FormInput"
import { StyleSheet, Text, View } from "react-native"
import { ExerciseCatalogRatingSelector } from "../components/ExerciseCatalogRatingSelector"

interface ExerciseCatalogFormProps {

}
export const ExerciseCatalogForm = ({} : ExerciseCatalogFormProps) => {
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
                        value=""
                        setValue={() => {}}
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
                        value=""
                        setValue={() => {}}
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
                        initialRating={3}
                        onRatingChange={() => {}}
                        size={24}
                        maxRating={5}
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
                    onPress={() => {}}
                    disable={false}
                    disabledColor={Colors.disabledColor}
                    subTitle="Создайте своё упражнение"
                    subTitleColor={Colors.darkTextSecondary}


                />
            </View>
        </View>
    )
}