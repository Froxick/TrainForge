import { ActivityIndicator, View } from "react-native"

import { Header } from "@/shared/ui/Header"

import { useExerciseCatalog } from "../hooks/useExerciseCatalog"
import { ColorsType } from "@/shared/types/ColorsType"
import { ExerciseCatalogListRender } from "../UI/ExerciseCatalogListRender"
import { ExerciseCatalogToolBar } from "../UI/ExerciseCatalogToolBar"
import { useState } from "react"
import { Colors } from "@/shared/constants/theme"
import { ExerciseCatalogEmptyList } from "../UI/ExerciseCatalogEmptyList"


export const ExerciseCatalogScreen = () => {
    
    const {items,loading} = useExerciseCatalog()
    const [search,setSearch] = useState<string>('')

    const changeTextSearch = (text: string) => {
        setSearch(text)
    }

    const clearSearch = () => {
        setSearch('')
    }

    const itemsFilter = () => {
        const filter = search.length > 0 ? 
            items.filter(el => el.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())) : 
        items;
        return filter;
    }

    return (
        <View>
            <View>
                <Header 
                    title="Упражнения"
                    size={30}
                    color={Colors?.text as string}
                />
            </View>
            <View>
                <ExerciseCatalogToolBar
                    valueInput={search}
                    setValueInput={changeTextSearch}
                    clearValueInput={clearSearch}
                    colors={Colors as ColorsType}
                />
            </View>
            <View style={{marginTop: 20}}>
                {
                    loading ? (<ActivityIndicator size={'large'}/>) : ( 
                       
                        itemsFilter().length > 0 ? (
                            <ExerciseCatalogListRender 
                                items={itemsFilter()}
                                colors={Colors as ColorsType}
                            />
                        ) : (
                            <ExerciseCatalogEmptyList />
                        )

                    )
                }
            </View>
        </View>
    )
}