import Realm from 'realm'
import { Day, ExerciseCatalog, DayExercise, Program, Set, Week } from './schema';


let realmInstance : Realm | null = null

export function getRealm() : Realm {
    if(realmInstance) {
        return realmInstance;

    }

    realmInstance = new  Realm({
        schema: [ExerciseCatalog,Program,Week,Day,DayExercise,Set],
        schemaVersion: 1
    })
    return realmInstance;
}