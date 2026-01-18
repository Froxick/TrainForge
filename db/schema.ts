import Realm from 'realm'
import { EntityStatus, EntityStatusProgram } from './type';
export class ExerciseCatalog extends Realm.Object<ExerciseCatalog> {
  id!: string;
  name!: string;
  tags!: string[];
  description?: string;
  rating!: number;
  createdByUser!: boolean;

  static schema: Realm.ObjectSchema = {
    name: 'ExerciseCatalog',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      tags: 'string[]',
      description: 'string?',
      rating: { type: 'int', default: 0 },
      createdByUser: { type: 'bool', default: false },
    },
  };
}
export class Set extends Realm.Object<Set>
{
    id!: string;
    dayExerciseId!: string;
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
      dayExerciseId: "string",
      reps: "int",
      weight: "float",
      rpe: "float?",
      rir: "float?",
      status: { type: "string", default: EntityStatus.NotStarted },
    },
  };
}
export class DayExercise extends Realm.Object<DayExercise> {
  id!: string;
  dayId!: string;
  exerciseCatalogId!: string; 
  sets!: Realm.List<Set>;
  status!: EntityStatus;

  static schema: Realm.ObjectSchema = {
    name: 'DayExercise',
    primaryKey: 'id',
    properties: {
      id: 'string',
      dayId: 'string',
      exerciseCatalogId: 'string',
      sets: 'Set[]',
      status: { type: 'string', default: EntityStatus.NotStarted },
    },
  };
}


export class Day extends Realm.Object<Day>
{
    id!: string;
    weekId! : string;
    name!: string;
    dayExercise!: Realm.List<DayExercise>
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
            dayExercise:'DayExercise[]',
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

