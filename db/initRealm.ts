import { seedExerciseCatalog } from "@/shared/lib/seedExerciseCatalog";
import { getRealm } from ".";

export function initRealm () {
    const realm = getRealm()
    seedExerciseCatalog(realm)
    return realm
}

