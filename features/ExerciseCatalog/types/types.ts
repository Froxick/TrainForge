import { ExerciseCatalog } from "@/db/type";

export type ExerciseCatalogFormType = Omit<ExerciseCatalog,'createdByUser' | 'id'> 