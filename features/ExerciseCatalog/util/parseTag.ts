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
export const parseStringTagsToArray = (tags: string) : string[] => {
    let tags_list: string[] = []
    try {
        tags_list = JSON.parse(tags)

    } catch (e) {
        tags_list = []
        console.log(e)
    }
    return tags_list;
}
export const serializeTags = (tags: string[] | undefined | null): string | null => {
  if (!tags || tags.length === 0) {
    return null;
  }
  try {
    return JSON.stringify(tags);
  } catch (error) {
    console.error('Failed to serialize tags:', error);
    return null;
  }
};