import Realm from 'realm'
import { EntityStatus, EntityStatusProgram } from './type';

export class Set extends Realm.Object<Set>
{
    id!: string;
    exerciseId!: string;
    reps!: number;
    weight!:number;
    rpe?: number;
    rir?: number;
    status!: EntityStatus;

    static schema: Realm.ObjectSchema = {
    name: "Set",
    primaryKey: "id",
    properties: {
      id: "string",
      exerciseId: "string",
      reps: "int",
      weight: "float",
      rpe: "float?",
      rir: "float?",
      status: { type: "string", default: EntityStatus.NotStarted },
    },
  };
}
export class Exercise extends Realm.Object<Exercise> { 
    id!: string;
    dayId!: string;
    name!: string;
    sets!: Realm.List<Set>
    status!: EntityStatus;

    static schema: Realm.ObjectSchema = {
        name: 'Exercise',
        primaryKey: 'id',
        properties: {
            id: 'string',
            dayId: 'string',
            name: 'string',
            sets: 'Set[]',
            status: { type: "string", default: EntityStatus.NotStarted },
        }

    }
}

export class Day extends Realm.Object<Day>
{
    id!: string;
    weekId! : string;
    name!: string;
    exercises!: Realm.List<Exercise>
    dayIndex!: number;
    status!: EntityStatusProgram;
    description?: string


    static schema : Realm.ObjectSchema = {
        name: 'Day',
        primaryKey: 'id',
        properties: {
            id: 'string',
            weekId: 'string',
            name: 'string',
            exercises:'Exercise[]',
            dayIndex: 'int',
            status: { type: "string", default: EntityStatusProgram.NotStarted },
            description: 'string?'
        }
    }
}
export class Week extends Realm.Object<Week> {
    id!: string;
    programId! : string;
    name!: string;
    weekIndex!: number; 
    days!: Realm.List<Day>
    status!: EntityStatusProgram

    static schema : Realm.ObjectSchema = {
        name: 'Week',
        primaryKey: 'id',
        properties: {
            id: 'string',
            programId: 'string',
            name: 'string',
            weekIndex: 'int',
            days: 'Day[]',
            status: { type: "string", default: EntityStatusProgram.NotStarted },
            
        }
    }
}
export class Program extends Realm.Object {
    id!:string;
    name!: string;
    description?: string;
    weeks!: Realm.List<Week>
    status! : EntityStatusProgram
    static schema : Realm.ObjectSchema = {
        name: 'Program',
        primaryKey: 'id',
        properties: {
            id: 'string',
            name: 'string',
            description: 'string?',
            weeks: 'Week[]',
            status: { type: "string", default: EntityStatusProgram.NotStarted },
        }
    }
}

