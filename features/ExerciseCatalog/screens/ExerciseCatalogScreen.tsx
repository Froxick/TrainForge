import { ActivityIndicator, StyleSheet, View } from "react-native"

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
import { ExerciseCatalogAddButton } from "../UI/ExerciseCatalogAddButton"
import { ExerciseCatalogForm } from "../UI/ExerciseCatalogForm"


export const ExerciseCatalogScreen = () => {
    interface OpenWindowStates  {
        detailView: boolean,
        createForm: boolean
    }
    const {items,loading} = useExerciseCatalog()
    const [search,setSearch] = useState<string>('')
    const[openWindow,setOpenWindow] = useState<OpenWindowStates>({
        detailView: false,
        createForm: false
    })
    const changeOpenWindowFnc = (field: keyof OpenWindowStates) => {
        setOpenWindow((prev) => ({
            ...prev,
            [field]: !prev[field]
        }))
    }

    const[selectItem,setSelectItem] = useState<ExerciseCatalog | null>(null)

    const openViewWindow = (item: ExerciseCatalog) => {
        setSelectItem(item)
        changeOpenWindowFnc('detailView')
    }

    const closeViewWindow = () => {
        setSelectItem(null)
        changeOpenWindowFnc('detailView')
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
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center'
        }
    })
    return (
        <>
            {
                (openWindow.detailView && selectItem) && (
                    <ModalWindow
                        isVisible={openWindow.detailView}
                        onClose={closeViewWindow}
                    >
                       <ExerciseCatalogDetailedView 
                         item={selectItem}
                       />
                    </ModalWindow>
                )
            }
            {
                (openWindow.createForm && (
                    <ModalWindow
                        title="Упражнение"
                        isVisible={openWindow.createForm}
                        onClose={() => changeOpenWindowFnc('createForm')}
                    >
                        <ExerciseCatalogForm />
                    </ModalWindow>
                ))
            }
            <View>
            <View style={styles.header}>
                <Header 
                    title="Упражнения"
                    size={30}
                    color={Colors?.text as string}
                />
                <ExerciseCatalogAddButton 
                    onPress={() => changeOpenWindowFnc('createForm')}
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