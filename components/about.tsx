'use client'
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import UseContextHook from '@/context/contextProvider'
import { useInviewHook } from '@/hooks/hooks'

const About = () => {
    const {ref} = useInviewHook('About',0.75)
  return (
    <motion.section
    ref={ref}
    initial = {{opacity:0,y:100}}
    animate = {{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'
    className=' scroll-mt-28  max-w-[45rem] text-center leading-8 '>
        <SectionHeading>About me</SectionHeading>
        <p className="">
        Graduated with a degree in{" "}
        <span className="font-medium">Computer Science</span>. While in school, 
        I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p className="">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        chess, watching movies, and playing video games. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">blockchain technology </span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}

export default About