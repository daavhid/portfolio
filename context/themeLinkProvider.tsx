'use client'
import React, { createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeContext = {
    theme:Theme,
    setTheme : React.Dispatch<React.SetStateAction<Theme>>

}


export const ThemeContext = createContext<ThemeContext | null>(null)

const ThemeLinkProvider = ({children}:{children:React.ReactNode}) => {
    const  [theme,setTheme] =  useState<Theme>('light')
  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeLinkProvider