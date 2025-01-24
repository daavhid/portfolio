'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

import { useInviewHook } from '@/hooks/hooks'

const Intro = () => {
    const {ref} = useInviewHook('Home',0.75)
  return (
    <section 
    ref={ref}
    id='home'
    className='max-w-[50rem] scroll-mt-40 text-center sm:mb-0'>

        <div className='flex items-center justify-center '>
            <div className='relative'>
            <motion.div
                initial = {{opacity:0,scale:0}}
                animate= {{opacity:1,scale:1}}
                transition={{
                    duration:0.2,
                    type:'tween'
                }}
                >

                    <Image 
                    src={'/portfolio-img.jpeg'}
                    width={192}
                    height={192}
                    alt='portfolio-image'
                    priority={true}
                    quality={95}
                    className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white mx-auto'
                    />
                </motion.div>
                <motion.span 
                initial = {{opacity:0,scale:0}}
                animate= {{opacity:1,scale:1}}
                transition={{
                    type:'spring',
                    duration:0.7,
                    delay:0.1,
                    stiffness:125
                }}
                className='absolute bottom-0 right-1 text-2xl'>👋</motion.span>
            </div>
        </div>
        <motion.h1 
        initial = {{opacity:0,y:100}}
        animate= {{opacity:1,y:0}}
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
            <span className='font-bold'>Hello, I'm David Oluwatoyosi</span>,
            I'm a {" "}<span className='font-bold'>full-stack developer</span> {" "}
            with <span className='font-bold'>5 years</span> of experience. I enjoy building <span className='italic'>sites & apps</span>.{" "}
            My focus is <span className='underline'>React(Next.js)</span>.
        </motion.h1>
        <motion.div
        initial = {{opacity:0,y:100}}
        animate = {{opacity:1,y:0}}
        transition={{
            delay:0.1
        }}
        className='flex flex-col sm:flex-row gap-2 justify-center items-center px-4 font-medium text-lg '>
            <Link
            className='bg-gray-900 group cursor-pointer text-white px-4 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition'
            href={'#contact'}>Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            <a href='/CV.pdf' download={true} className='bg-white dark:bg-white/10 dark:text-gray-300 cursor-pointer px-4 py-3 flex items-center gap-2 rounded-full group focus:scale-110 hover:scale-110 active:scale-105  transition border border-black/10'>Download CV <HiDownload className='group-hover:translate-y-1 transition opacity-60'/></a>
            <a className='bg-white dark:bg-white/10 dark:text-gray-300 cursor-pointer text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105  transition border border-black/10' target='_blank' href='https://linkedin.com'><BsLinkedin/></a>
            <a className='bg-white cursor-pointer dark:bg-white/10 dark:text-gray-300 text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105  transition border border-black/10' target='_blank' href='https://github.com'><FaGithubSquare/></a>
            
        </motion.div>
    </section>
  )
}

export default Intro