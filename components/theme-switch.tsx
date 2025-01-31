'use client'
import { useThemeContextHook } from '@/context/contextProvider';
import React, {  useEffect } from 'react'
import { BsMoon, BsSun } from "react-icons/bs";

type Theme = 'light' | 'dark'

const ThemeSwitch = () => {
    const {theme,setTheme} = useThemeContextHook()

    const handleClick = ()=>{
        if(theme === 'light'){
            setTheme("dark");
            console.log(theme,'this is theme e')
            window.localStorage.setItem('theme','dark')
            document.documentElement.classList.add('dark')
        }else{
            setTheme('light')
            console.log(theme,'this is theme else block')
            window.localStorage.setItem('theme','light')
            document.documentElement.classList.remove('dark')
        }
        
    }
    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme") as Theme | null
        
        if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            console.log('this is tghe dark media')
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }else if(localTheme){
            setTheme(localTheme)
            
        }

    },[setTheme])
  return (
        <button onClick={handleClick} className='fixed bottom-5 dark:bg-black right-5 border rounded-full w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-gray-300 border-opacity-40 shadow-3xl flex items-center justify-center hover:scale-[1.15] transition-all active:scale-105 z-[999]'>
            {
                theme === 'light'?<BsMoon/>:<BsSun/>
            }

        </button>
    
  )
}

export default ThemeSwitch