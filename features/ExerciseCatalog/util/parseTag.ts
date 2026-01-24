import { ExerciseCatalog } from "@/db/type"

export const parseTags = (item: ExerciseCatalog) : string[] => {
        let tags : string[] = []
        try{
            tags = item.tags ? JSON.parse(item.tags) : []
            
        }catch(e){
            tags = []
            console.log(e)
        }
        return tags;
    }