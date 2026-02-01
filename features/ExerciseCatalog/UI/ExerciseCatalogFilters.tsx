import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
interface ExerciseCatalogFiltersProps {
    onToggleRatingFilter: () => void,
    onToggleCreateByUserFilter: () => void,
    ratingFilter: boolean,
    createByUserFilter: 'user' | 'default' | 'all'
}
export const ExerciseCatalogFilters = ({onToggleCreateByUserFilter,onToggleRatingFilter
    , ratingFilter,createByUserFilter

} : ExerciseCatalogFiltersProps) => {
    
    const getCreateByUserStyleAndText = (createByUser: 'user' | 'default' | 'all') => {
        if(createByUser === 'all') {
            return {
                text: 'Все упражнения',
                colorIcon: Colors.darkTextSecondary,
                textColor: Colors.text,
                bacgroundColor: Colors.surface
            }
        } else if(createByUser === 'default') {
            return {
                text: 'Базовые',
                colorIcon: Colors.rpeLow,
                textColor: Colors.rpeLow,
                bacgroundColor: Colors.successBackGround
            }
        } else {
            return {
                text: 'Пользовательские',
                colorIcon: Colors.danger,
                textColor: Colors.danger,
                bacgroundColor: Colors.dangerBackGround
            }
        }
    }


    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 20,
        
        },
        button: {
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            backgroundColor: Colors.surface,
            borderRadius: 22,
            padding: 12,
            borderWidth: 1,
            borderColor: Colors.border
        },
        buttonText: {
            color: Colors.text,
            fontSize: 15
        }

    })
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggleRatingFilter} style={[styles.button,{
                backgroundColor: ratingFilter ? '#2f2f26' : Colors.surface
            }]}>
                <Ionicons name='star' color={ratingFilter ? '#e8e411' : Colors.darkTextSecondary}  size={16}/>
                <Text style={[styles.buttonText,{
                    color: ratingFilter ? '#e8e411' : Colors.darkTextSecondary
                }]}>
                    {ratingFilter ? 'Высокий' : 'Низкий'}
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity onPress={onToggleCreateByUserFilter} style={[styles.button,{backgroundColor:  getCreateByUserStyleAndText(createByUserFilter).bacgroundColor}]}>
                <Ionicons name='person' color={
                    getCreateByUserStyleAndText(createByUserFilter).colorIcon
                } size={18}/>
                <Text style={[styles.buttonText, {
                    color: getCreateByUserStyleAndText(createByUserFilter).textColor
                }]}>
                    {
                      getCreateByUserStyleAndText(createByUserFilter).text
                    }
                </Text>
            </TouchableOpacity>
        </View>
    )
}