import { nanoid } from "nanoid/non-secure";
import Realm from "realm"
import { ExerciseCatalog } from "../schema";


export const ExerciseCatalogRepisotory = {
    getAll ( realm : Realm) {
        return realm.objects(ExerciseCatalog).sorted('rating',true)
    },

    getById(realm: Realm, id: string) {
        return realm.objectForPrimaryKey(ExerciseCatalog, id);
    },

    create(
        realm: Realm,
        data: Omit<ExerciseCatalog, "id" | "createdByUser">
    ) {
        realm.write(() => {
        realm.create(ExerciseCatalog, {
            id: nanoid(),
            ...data,
            createdByUser: true,
        });
        });
    },
    update(
        realm: Realm,
        id: string,
        data: Partial<ExerciseCatalog>
    ) {
        const ex = realm.objectForPrimaryKey(ExerciseCatalog,id)
        if(!ex) return;
        
        realm.write(() => {
            Object.assign(ex,data)
        })
    },

    delete (realm: Realm,id:string) {
        const ex = realm.objectForPrimaryKey(ExerciseCatalog,id)
        if(!ex) return 
        
        realm.write(() => {
            realm.delete(ex)
        })
    }
}