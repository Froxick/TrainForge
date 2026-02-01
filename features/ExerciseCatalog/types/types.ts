import { ExerciseCatalog } from "@/db/type";

export type ExerciseCatalogFormType = Omit<ExerciseCatalog,'createdByUser' | 'id'> 

export interface IExerciseCatalogFilters {
    rating: boolean,
    createByUser: 'user' | 'default' | 'all'
}