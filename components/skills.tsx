'use client'
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import {motion, useScroll} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import UseContextHook from '@/context/contextProvider'
import { useInviewHook } from '@/hooks/hooks'

const fadeInAnimationVariant = {
    initial:{
        opacity:0,
        y:100
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:index*0.05
        }
    })
}

const Skills = () => {
    const {ref} = useInviewHook('Skills',0.75)
    const divRef = useRef<HTMLLIElement>(null)
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:['0 1','4 1']
    })
  return (
    <section ref={ref} id='skills' className='max-w-[53rem] scroll-mt-28'>
        <SectionHeading>My Skills</SectionHeading>
        <div>
            <ul
            
             className='flex flex-wrap justify-center items-center gap-3'>
                {
                    skillsData.map((skill,index)=>(
                        <motion.li
                        variants={fadeInAnimationVariant}
                        initial = 'initial'
                        whileInView={'animate'}
                        viewport={{
                            once:true,
                            
                        }}
                        custom={index}
                         key={index} className='font-medium rounded-lg bg-white dark:bg-white/10 dark:text-gray-300 border border-black/[0.1] text-gray-800 px-5 py-3'>
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </div>

    </section>
  )
}

export default Skills