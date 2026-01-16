import { useEffect, useState } from "react"
import { ColorsType } from "../types/ColorsType"
import { Colors } from "../constants/theme"
import { secureStoreUtil } from "../lib/secureStoreUtil"

export const useTheme = () => {
    type themeT = 'dark' | 'light'
    const [themeColors,setThemeColors] = useState<ColorsType | null>(null)
    const [loading,setLoading] = useState<boolean>(true)
    const[themeState,setThemeState] = useState<themeT>('dark')


     useEffect(() => {
        const theme = secureStoreUtil.getItem('theme')
        if(theme) {
            changeTheme(theme as themeT)
        } else {
            changeTheme('dark')
        }
        setLoading(false)
    }, [])


    const changeTheme = (theme: themeT) => {
        if(theme === 'dark') {
            setThemeColors(
                Colors.dark
            )
            
        } else {
            setThemeColors(
                Colors.light
            )
        }
        setThemeState(theme)
        secureStoreUtil.addItem('theme',theme)
    }
    const changeThemeAction = () => {
        if(themeState === 'dark') {
            changeTheme('light')
        } else { 
            changeTheme('dark')
        }
    }

   

    return {
        changeThemeAction,themeColors,loading
    }
}