


import { ExerciseCatalogRepository } from "@/db/repositories/ExerciseCatalogRepository"
import { ExerciseCatalog } from "@/db/type"
import { useEffect, useState } from "react"
import { IExerciseCatalogFilters } from "../types/types"

export const useExerciseCatalog = () => {
    const [items,setItems] = useState<ExerciseCatalog[]>([])
    const[filters,setFilters] = useState<IExerciseCatalogFilters>({
        rating: true,
        createByUser: 'all'
    })

    const toggleRating = () => {
        setFilters((prev) => ({
            ...prev,
            rating: !prev.rating
        }))
    }

    const toggleCreateByUser = () => {
        setFilters((prev) => {
            if(filters.createByUser === 'all') {
                return {
                    ...prev,
                    createByUser: 'default'
                }
            } else if(
                filters.createByUser === 'default' 
            ) {
                 return {
                    ...prev,
                    createByUser: 'user'
                }
            } else{ 
                 return {
                    ...prev,
                    createByUser: 'all'
                }
            }
        })
    }

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
       createItem,deleteItem,updateItem,
       toggleCreateByUser,toggleRating,filters
    }
}