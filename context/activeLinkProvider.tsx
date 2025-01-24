'use client'
import React, { createContext, useContext, useState } from 'react'
import { links } from '@/lib/data'


type activeLinkProp = typeof links[number]['name']
interface contextProp {
    activeLink : activeLinkProp,
    setActiveLink : React.Dispatch<React.SetStateAction<activeLinkProp>>
    timeofLastClick:number,
    setTimeOfLastClick:React.Dispatch<React.SetStateAction<number>>

}

export const ActiveContextProvider = createContext<contextProp | null>(null)

const ActiveLinkProvider = ({children}:{children:React.ReactNode}) => {
    const [activeLink,setActiveLink] = useState<activeLinkProp>('Home')
    const [timeofLastClick,setTimeOfLastClick] = useState(0)
  return (
    <ActiveContextProvider.Provider value={{
        activeLink,
        setActiveLink,
        timeofLastClick,
        setTimeOfLastClick
    }}>
        {children}

    </ActiveContextProvider.Provider>
    
  )
}

export default ActiveLinkProvider