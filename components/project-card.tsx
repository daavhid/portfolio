'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/data'
import {motion,useScroll,useTransform} from "framer-motion"

type projectProp = typeof projectsData[number]

const Project = (
    {
        title,
        description,
        tags,
        imageUrl
    }:projectProp
)=>{
    const divRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:['0 1','1.45 1']
    })
    const scaleValue = useTransform(scrollYProgress,[0,1],[0.8,1])
    const opacityValue = useTransform(scrollYProgress,[0,1],[0.6,1])
    return (
        <motion.div 
        style={{
            scale:scaleValue,
            opacity:opacityValue,
        }}
        
        ref={divRef}
        className='mb-4 sm:mb-8  last:mb-0 group '
        >
            <div className='bg-gray-100 dark:bg-white/10 dark:text-white max-w-[42rem] rounded-lg border border-black/5 sm:pr-8 overflow-hidden relative  sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition'>

                <div className='sm:max-w-[50%] pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col sm:group-even:ml-[18rem]  h-full'>
                    <h3 className='font-semibold text-2xl'>{title}</h3>
                    <p className='mt-2 leading-relaxed  text-gray-700 dark:text-gray-300'>{description}</p>
                    <ul className='flex flex-wrap mt-2 sm:mt-auto gap-2'>
                        {tags.map((tag,index)=>(
                            <li className='text-[0.7rem] tracking-wider text-white bg-black/[0.7] rounded-full px-3  py-1 uppercase' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt='Project i worked on' quality={95} className='absolute -8 -right-40 w-[28.25rem] bottom-0 h-[85%] hidden sm:block rounded-t-lg shadow-2xl group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-even:group-hover:translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition'/>
                </div>
        </motion.div>
    )
}


export default Project