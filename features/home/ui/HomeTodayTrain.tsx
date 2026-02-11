import { StyleSheet, Text, View } from "react-native"
import { HomeCardContainer } from "./HomeCardContainer"
import { Colors } from "@/shared/constants/theme"
import { Button } from "@/shared/ui/Button"

export const HomeTodayTrain = () => {
    const styles = StyleSheet.create({
        title: {
            color: Colors.text,
            fontWeight: 'bold',
            fontSize: 20,
            marginBottom: 5
        },
        itemText: {
            color: Colors.text,
            paddingLeft: 2
        }
    })
    return ( 
       <HomeCardContainer title="Активная тренировка" icon='calendar'>
            <View>
                <Text style={styles.title}>
                    Тяжелый жим
                </Text>
                <View style={{
                    gap: 3
                }}>
                    <Text style={styles.itemText}>
                        • Жим лежа
                    </Text>
                    <Text style={styles.itemText}>
                        • Махи
                    </Text>
                    <Text style={styles.itemText}>
                        • Разводка
                    </Text>
                    <View style={{
                        marginTop: 10
                    }}>
                        <Button 
                            backgraundColor={Colors.primary}
                            title="Открыть"
                            titleSize={15}
                            padding={8}
                            textColor={Colors.text}
                            bold
                            heigh={43}
                            onPress={() => {}}
                            disable={false}
                            disabledColor={Colors.disabledColor}
                        />
                    </View>
                </View>
            </View>
       </HomeCardContainer>
    )
}