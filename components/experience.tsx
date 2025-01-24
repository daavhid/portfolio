'use client'
import React from 'react'
import SectionHeading from './section-heading'

import { useInviewHook } from '@/hooks/hooks'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useThemeContextHook } from '@/context/contextProvider';

const Experience = () => {
    const {theme} = useThemeContextHook()
    const {ref} = useInviewHook('Experience',0.75)
  return (
    <section ref={ref} id='experience' className='scroll-mt-28'>
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline
        lineColor= {theme==='light'?'#e5e7eb':'rgba(255,255,255,0.05)'}
        >
            {
                experiencesData.map((item,index)=>(
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                        contentStyle={
                            {
                                backgroundColor:theme==='light'?'#f3f4f6':'rgba(255,255,255,0.05)',
                                boxShadow:'none',
                                padding:'1.3rem 2rem',
                                border:'1px solid rgba(0,0,0,0.06)'
                            }
                        }
                        contentArrowStyle={{
                            borderRight:'0.4rem solid #9ca3af'
                        }}
                        iconStyle={{
                            backgroundColor:theme==='light'?'white':'rgba(0,0,0)'
                        }}
                        date={item.date}
                        icon = {item.icon}
                        >
                            <h3 className='font-semibold capitalize'>{item.title}</h3>
                            <h4 className='font-normal '>{item.location}</h4>
                            <p className='!font-normal !text-gray-700 dark:!text-gray-300'>
                                {item.description}
                            </p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}

export default Experience