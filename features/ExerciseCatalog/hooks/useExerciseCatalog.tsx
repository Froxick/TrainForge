


import { ExerciseCatalogRepository } from "@/db/repositories/ExerciseCatalogRepository"
import { ExerciseCatalog } from "@/db/type"
import { useEffect, useState } from "react"

export const useExerciseCatalog = () => {
    const [items,setItems] = useState<ExerciseCatalog[]>([])
    const[loading,setLoading] = useState(true)


    const initFunction =  async () => {
        setLoading(true)
        const data = await ExerciseCatalogRepository.getAll()
        setItems(data)
        setLoading(false)
    }

    const getOne = async (id: string) => {
        const data = await ExerciseCatalogRepository.getById(id)
        return data;
    }

    const createItem = async (
        data: Omit<ExerciseCatalog, 'id' | 'createdByUser'>
    ) => {
        await ExerciseCatalogRepository.create(data)
        await initFunction()
    
    }

    const deleteItem = async (id: string) => {
        await ExerciseCatalogRepository.delete(id)
        setItems(prev => prev.filter(el => el.id !== id))
    }
    const updateItem = async (id: string, data: Omit<ExerciseCatalog,'id' | 'createdByUser'>) => {
        await ExerciseCatalogRepository.update(id,data)
        setItems(prev => prev.map(el => el.id === id ? {...el,...data} : el))
    }



    useEffect(() => {
        initFunction()
    },[])

    
    return {
       items,loading,getOne,
       createItem,deleteItem,updateItem
    }
}