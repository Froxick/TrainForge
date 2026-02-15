import { Program } from "@/db/type";

export type ProgramFormType =  Omit<Program,'id' | 'status'>
export interface IProgramForm extends ProgramFormType {
    weekCount: number,
    weekNames: string[],
    restDays: number[],
    weekTemplate?: WeekTemplate
}

export interface DayTemplate {
    dayIndex: number
    name: string
    description?: string
    exercises: string[]
}

export interface WeekTemplate {
    trainingDays: DayTemplate[]
}
