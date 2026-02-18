import { View } from "react-native"
import { ProgramFormDayCard } from "./ProgramFormDayCard"

interface ProgramRestDaySelectorProps {
    restDayList: number[],
    dayPick: (index: number) => void
}
export const ProgramRestDaySelector = ({restDayList,dayPick} : ProgramRestDaySelectorProps) => {
    const days = ['Понедельник','Вторник','Среда','Четверг','Пятница',
        'Суббота','Воскресенье'
    ]
    return (
        <View style={{
            gap: 18,
        }}>
            {
                days.map((d,index) => (
                    <ProgramFormDayCard 
                        key={index}
                        text={d}
                        rest={restDayList.includes(index)}
                        onPress={() => dayPick(index)}
                    />
                ))
            }
        </View>
    )
}