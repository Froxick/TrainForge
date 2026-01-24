import { ActivityIndicator, View } from "react-native"

import { Header } from "@/shared/ui/Header"

import { useExerciseCatalog } from "../hooks/useExerciseCatalog"
import { ColorsType } from "@/shared/types/ColorsType"
import { ExerciseCatalogListRender } from "../UI/ExerciseCatalogListRender"
import { ExerciseCatalogToolBar } from "../UI/ExerciseCatalogToolBar"
import { useState } from "react"
import { Colors } from "@/shared/constants/theme"
import { ExerciseCatalogEmptyList } from "../UI/ExerciseCatalogEmptyList"
import { ModalWindow } from "@/shared/ui/modalWindow"
import { ExerciseCatalog } from "@/db/type"
import { ExerciseCatalogDetailedView } from "../UI/ExerciseCatalogDetailedView"


export const ExerciseCatalogScreen = () => {
    
    const {items,loading} = useExerciseCatalog()
    const [search,setSearch] = useState<string>('')
    const[openWindow,setOpenWindow] = useState(false)
    const[selectItem,setSelectItem] = useState<ExerciseCatalog | null>(null)

    const openViewWindow = (item: ExerciseCatalog) => {
        setSelectItem(item)
        setOpenWindow(true)
    }

    const closeViewWindow = () => {
        setSelectItem(null)
        setOpenWindow(false)
    }

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
        <>
            {
                (openWindow && selectItem) && (
                    <ModalWindow
                        isVisible={openWindow}
                        onClose={closeViewWindow}
                    >
                       <ExerciseCatalogDetailedView 
                         item={selectItem}
                       />
                    </ModalWindow>
                )
            }
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
                                openViewModal={openViewWindow}
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
        </>

    )
}