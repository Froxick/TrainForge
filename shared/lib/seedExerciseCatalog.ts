import { ExerciseCatalog } from '@/db/schema'
import Realm from 'realm'
import { DEFAULT_EXERCISES } from '../constants/defaultExercises';

export const seedExerciseCatalog = (realm: Realm) => {
    const exists = realm.objects(ExerciseCatalog).length > 0;
    if(exists) return;
    
    realm.write(() => {
        DEFAULT_EXERCISES.forEach(ex => 
            realm.create(ExerciseCatalog,ex)
        )
    })
}