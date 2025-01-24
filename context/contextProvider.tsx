import React, { useContext } from 'react'
import { ActiveContextProvider } from './activeLinkProvider'
import ThemeLinkProvider, { ThemeContext } from './themeLinkProvider'

const UseContextHook = () => {
    const context = useContext(ActiveContextProvider)
    if(context===null){
        throw Error('attempting to get context values outside the provider ')
    }
    return context

}

export const useThemeContextHook = () =>{
    const context = useContext(ThemeContext)
    if(context===null){
        throw Error("attempting to get context outside the provider")
    }
    return context
}

export default UseContextHook