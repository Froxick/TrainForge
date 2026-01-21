


import { ExerciseCatalogRepository } from "@/db/repositories/ExerciseCatalogRepository"
import { ExerciseCatalog } from "@/db/type"
import { useEffect, useState } from "react"

export const useExerciseCatalog = () => {
    const [items,setItems] = useState<ExerciseCatalog[]>([])
    const[loading,setLoading] = useState(true)


    const initFunction =  async () => {
        const data = await ExerciseCatalogRepository.getAll()
        setItems(data)
    }


    useEffect(() => {
        initFunction()
        setLoading(false)
    },[])

    
    return {
       items,loading
    }
}