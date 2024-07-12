import React from 'react'
import Contact from './Contact'
import Site from './Site'
import Links from './Links'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between'>
        <Contact />
        <Site />
        <Links />
    </div>
  )
}

export default Footer