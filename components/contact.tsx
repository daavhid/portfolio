'use client'
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { useInviewHook } from '@/hooks/hooks'
import { FaPaperPlane } from 'react-icons/fa6'
import {motion, useScroll, useTransform} from 'framer-motion'

const Contact = () => {
    const divRef = useRef<HTMLDivElement>(null)

    const {ref} = useInviewHook('Contact',0.75)
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:['0 1','0.8 1']
    })
    const scaleValue = useTransform(scrollYProgress,[0,1],[0.8,1])
    const opacityValue = useTransform(scrollYProgress,[0,1],[0.6,1])
  return (
    <section ref={ref} id='contact' className='w-[min(100%,38rem)] sm:mb-28 mb-12 mt-12 scroll-mt-28 sm:mt-40'>
        <motion.div 
        style={{
            scale:scaleValue,
            opacity:opacityValue
        }}
        ref={divRef}>

            <SectionHeading>Contact me</SectionHeading>
            <p className='text-center text-gray-700 dark:text-gray-300'>please contact me directly at <a href="mailto:victortoyosi@gmail.com " className='underline' >victortoyosi@gmail.com</a> or through this form.</p>
            <form className='flex flex-col gap-2 mt-10'>
                <input type="email" required maxLength={500} placeholder='your email' className='inline-block w-full px-4 py-5 border rounded-lg dark:text-gray-950 dark:bg-white dark:bg-opacity-70 dark:focus-within:bg-opacity-90 transition-all  dark:outline-none border-black/10 placeholder:text-slate-500'/>
                <textarea name="message" required maxLength={500} id="message"  placeholder='your message' className='h-48 px-4 py-5 w-full rounded-lg  dark:text-gray-950 dark:bg-white dark:bg-opacity-70 dark:focus-within:bg-opacity-90 transition-all  dark:outline-none border-black/10 placeholder:text-slate-500'>
                </textarea>
                <button type="submit" className='bg-gray-900 hover:bg-gray-950 font-medium group px-4 py-2 text-white w-fit rounded-full mt-2 capitalize flex gap-2 outline-none items-center focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white dark:bg-opacity-5 transition-all'>
                    submit 
                    <FaPaperPlane className='opacity-70 group-hover:-translate-y-0.5 text-white group-hover:translate-x-0.5 text-xs transition-all'/>
                </button>
            </form>
        </motion.div>
    </section>
  )
}

export default Contact