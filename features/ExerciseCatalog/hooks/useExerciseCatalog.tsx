import { getRealm } from "@/db"
import { ExerciseCatalogRepisotory } from "@/db/repositories/ExerciseCatalogRepository"
import { ExerciseCatalog } from "@/db/schema"
import { useEffect, useState } from "react"

export const useExerciseCatalog = () => {
    const [items,setItems] = useState<ExerciseCatalog[]>([])
    const realm = getRealm()

    useEffect(() => {
        const data = ExerciseCatalogRepisotory.getAll(realm)
        setItems([...data])

        const listener = () => setItems([...data])
        data.addListener(listener)

        return () => {
            data.removeListener(listener)
        }
    },[realm])

    const getExerciseCatalogItems = () => {
        const data = ExerciseCatalogRepisotory.getAll(realm)
        setItems([...data])
    }
    const getExerciseCatalogById = (id:string) => {
        return ExerciseCatalogRepisotory.getById(realm,id)
    }

    const createExerciseCatalogItem = () => {
        
    }

    const updateExerciseCatalogItem = () => {

    }

    const deleteExerciseCatalogItem = (id: string) =>{
        ExerciseCatalogRepisotory.delete(realm,id)
    }

    return {
        exerciseCatalogItem : items,
        getExerciseCatalogById,
        getExerciseCatalogItems,
        createExerciseCatalogItem,
        deleteExerciseCatalogItem,
        updateExerciseCatalogItem
    }
}