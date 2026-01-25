
import { useState } from "react"
import { ExerciseCatalogFormType } from "../types/types"
export const useExerciseCatalogForm = () => {
    const initialState : ExerciseCatalogFormType = {
        name: '',
        description: '',
        rating: 3,
        tags: ''
    }
    const [state,setState] = useState<ExerciseCatalogFormType>(initialState)
    
    const setInitalState = (item: ExerciseCatalogFormType) => {
        setState(item)
    }
    const clearState = () => {
        setState(initialState)
    }
    const setStateForm = (field: keyof ExerciseCatalogFormType, value: string | number) => {
        setState((prev) => ({
            ...prev,
            [field] : value
        }))
    }

    const validateForm = () => {
        return state.name.length > 3 && state.tags.length > 3 
    }


    return {
        state,
        setInitalState,
        clearState,
        setStateForm,
        validateForm
    }
}