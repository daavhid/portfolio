'use client'
import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project-card'

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