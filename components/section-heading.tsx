import React from 'react'

const SectionHeading = ({children}:{children:React.ReactNode}) => {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center '>{children}</h2>
  )
}

export default SectionHeading