'use client'
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project-card'
import { useInView } from 'react-intersection-observer'
import UseContextHook from '@/context/contextProvider'
import { useInviewHook } from '@/hooks/hooks'


const Projects = () => {
    const {ref} = useInviewHook('Projects')
  return (
    <section
    ref={ref}
    id='projects'
    className='scroll-mt-28'
    >
        <SectionHeading>My Projects</SectionHeading>
        <div>
            {projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                    <Project {...project}/>
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}


export default Projects