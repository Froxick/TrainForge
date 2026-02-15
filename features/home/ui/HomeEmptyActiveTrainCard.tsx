import { StyleSheet, Text, View } from "react-native"
import { HomeCardContainer } from "./HomeCardContainer"
import { Colors } from "@/shared/constants/theme"
import { Button } from "@/shared/ui/Button"
interface HomeEmptyActiveTrainCardProps {
  disableButton : boolean
}
export const HomeEmptyActiveTrainCard = ({disableButton} : HomeEmptyActiveTrainCardProps) => {
    const styles = StyleSheet.create({
        container: {
            gap: 10
        },
        text: {
            color: Colors.text,
            fontWeight: 'bold',
            fontSize: 18
        },
        textContainer : {
            justifyContent:'center',
            textAlign:'center',
            alignItems:'center',
            padding: 20
        }
    })
    return (
      <HomeCardContainer title="Активная тренировка" icon="calendar">
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>У вас нет активной тренировки</Text>
          </View>
          
          <Button
            backgraundColor={Colors.primary}
            title="Начать"
            titleSize={15}
            padding={8}
            textColor={Colors.text}
            bold
            heigh={43}
            onPress={() => {}}
            disable={disableButton}
            disabledColor={Colors.disabledColor}
            subTitle="Автоматически начните следующую тренировку активной программы"
            subTitleColor={Colors.darkTextSecondary}
          />
        </View>
      </HomeCardContainer>
    );
}