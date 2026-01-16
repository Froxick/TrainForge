import Realm from 'realm'
import { Day, Exercise, Program, Set, Week } from './schema';


let realmInstance : Realm | null = null

export function getRealm() : Realm {
    if(realmInstance) {
        return realmInstance;

    }

    realmInstance = new  Realm({
        schema: [Program,Week,Day,Exercise,Set],
        schemaVersion: 1
    })
    return realmInstance;
}