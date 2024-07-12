import React from 'react'
import { styles } from '../style'

const Contact = () => {
  return (
    <div>
        <h1 className="text-[40px] font-medium font-jost text-brown">Contact Us</h1>
        <p className='text-[18px] font-jost text-brown mb-5'>Send us message</p>
        <form className='flex flex-col gap-5 my-3 w-[100%]'>
            <input type="text" placeholder='Full name' className='px-3 py-2 rounded-full outline-none sm:w-[300px] w-[100%]' />
            <input type="email" placeholder='Your email' className='px-3 py-2 rounded-full outline-none' />
            <input type="text" placeholder='Your message....' className='px-4 py-5 rounded-[10px] outline-none' />
        </form>
        <button className='bg-yellow px-4 py-2 text-brown font-medium rounded-[10px]'>submit</button>
    </div>
  )
}

export default Contact