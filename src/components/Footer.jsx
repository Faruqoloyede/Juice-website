import React from 'react'
import Contact from './Contact'
import Site from './Site'
import Links from './Links'
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { styles } from '../style';


const Footer = () => {
  return (
    <div className={`${styles.paddingY}`} id='contact'>
      <div className='flex flex-wrap justify-between gap-10'>
          <Contact />
          <Site />
          <Links />
      </div>
          <div className='flex flex-wrap items-center gap-10 pt-20 pb-5'>
            <div className='flex items-center gap-5'>
              <FiFacebook className='bg-white p-3 text-5xl text-black rounded-full cursor-pointer hover:bg-yellow hover:text-white' />
              <FaInstagram className='bg-white p-3 text-5xl text-black rounded-full cursor-pointer hover:bg-yellow hover:text-white' />
              <RiTwitterXFill className='bg-white p-3 text-5xl text-black rounded-full cursor-pointer hover:bg-yellow hover:text-white' />
            </div>
            <p className='text-xl text-brown font-normal font-jost'>Copyright 2024 Dscode | All rights reserved</p>
        </div>
    </div>
  )
} 

export default Footer