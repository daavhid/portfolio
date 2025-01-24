'use client'
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import UseContextHook from '@/context/contextProvider'

const Header = () => {
    const { activeLink,setActiveLink,timeofLastClick,setTimeOfLastClick} = UseContextHook()
  return (
    <div className='z-[999] relative' >
        <motion.div className='fixed top-0 left-1/2  h-[4.5rem] border border-white dark:border-white/10 dark:border-opacity-50 border-opacity-40 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] w-full rounded-none bg-white dark:bg-gray-950 dark:bg-opacity-60 bg-opacity-80 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial= {{y:-100,x:'-50%', opacity:0}}
        animate= {{y:0,x:'-50%', opacity:1}}>
        </motion.div>

        <nav className='flex fixed top-[0.15rem] h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 left-1/2 -translate-x-1/2  '>
            <motion.ul
            initial = {{y:-100,opacity:0}}
            animate = {{y:0 , opacity:1}}
             className='flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                {
                  links.map(link=>(
                    <li key={link.hash} className='flex items-center relative h-3/4 justify-center'>

                        <Link
                        onClick={()=>{
                            setActiveLink(link.name)
                            setTimeOfLastClick(Date.now())
                            console.log(timeofLastClick,'this is the time of last click')
                        }}
                        className={clsx('flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:hover:text-gray-400 dark:text-gray-600 transition',{
                            'text-gray-950 dark:text-gray-200':activeLink === link.name
                        })}  href={link.hash}>{link.name}</Link>
                        {
                            activeLink===link.name &&  <motion.span
                            layoutId='activelink' 
                            transition={{
                                type:'spring',
                                stiffness:380,
                                damping:30,
                                duration:5
                            }}
                            className='bg-gray-100 dark:bg-gray-100/10  rounded-full absolute inset-0 -z-10'></motion.span>
                        }
                        
                    </li>
                  ))  
                }
            </motion.ul>

        </nav>
    </div>
  )
}

export default Header