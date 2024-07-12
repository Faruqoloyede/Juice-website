import React from 'react'
import { styles } from '../style'
import { mango, Vector } from '../assets'
import { menu } from '../constant'


const Menu = () => {
  return (
    <div className={`${styles.paddingY}`} id='menu'>
        <h1 className={`${styles.heading} text-center`}>Explore best menu selections</h1>
        <div className='flex flex-wrap items-center justify-center gap-20 mt-5 '>
            {menu.map((item, index)=>(
                <div className=' relative p-3 rounded-[20px] menu-item' key={index}>
                <div>
                    <img src={item.icon} alt="love" className='absolute right-0 top-0 p-3 w-[45px]  bg-yellow menu-upper' />
                </div>
                <img src={item.image} alt={`${item.title}`} className='sm:w-[300px] object-contain' />
                <div className='flex flex-col items-start'>
                    <h4 className='text-2xl text-brown font-medium font-quicksand'>{item.title}</h4>
                    <p className='text-[#555555] text-[14px] font-quicksand mb-6'>{item.description}</p>
                    <p className='text-[14px] font-normal font-quicksand font-bold'><span className='text-[red]'>{item.tag}</span>{`${item.price}.00`}</p>
                </div>
            </div>
            ))}
            
        </div>
    </div>
  )
}

export default Menu