'use client'
import React from 'react'
import {motion} from 'framer-motion'

const Divider = () => {
  return (
    <motion.div 
    initial = {{opacity:0, y:100}}
    animate = {{opacity:1,y:0}}
    transition={{delay:0.125}}
    className='bg-gray-200 dark:bg-gray-700/30 sm:my-24 my-12 h-16 w-1 rounded-full  sm:block'>
    </motion.div>
  )
}

export default Divider