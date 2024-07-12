import React from 'react'
import { logo } from '../assets';
import { FaPhoneFlip } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Links = () => {
  return (
    <div>
      <img src={logo} alt="" className='w-[100px]' />
      <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-3'>
          <FaPhoneFlip className='text-brown text-[20px]' />
          <a href="tel:+234" className='text-brown text-[18px] font-medium'>(08) 400 2000</a>
        </div>
        <div className='flex items-center gap-3'> 
          <CiMail className='text-brown text-[20px] font-medium' />
          <a href="mailto: juice@gmail.com" className='text-brown text-[18px] font-medium'>juice@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Links