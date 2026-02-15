
import { View } from "react-native"
import { ProgramCreateFormInput } from "./ProgramCreateFormInput"
import { WeekCountSelector } from "./ProgramWeekCountSelector"
interface ProgramFormStepOneProps {
    nameState: string,
    descriptionState: string,
    changeName: (text: string) => void,
    changeDescription: (text: string) => void,
    weekCount: number,
    changeWeekCount: (week: number) => void
}
export const ProgramFormStepOne = ({nameState,descriptionState,
    changeName,changeDescription,weekCount,changeWeekCount
} : ProgramFormStepOneProps) => {
    return (
        <View style={{width: 300,gap: 20}}>
            <ProgramCreateFormInput 
                value={nameState}
                setValue={changeName}
                icon="document-text-outline"
                placheholder="Название программы"
            />
            <ProgramCreateFormInput 
                value={descriptionState}
                setValue={changeDescription}
                icon="reader-outline"
                placheholder="Описание"
                multiline
                numberOfLines={3}
                maxHeight={350}
                minHeight={150}
            />
            <WeekCountSelector 
                value={weekCount}
                onChange={changeWeekCount}
                max={12}
            />
        </View>
    )
}