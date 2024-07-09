import React from 'react'
import { styles } from '../style'
import { Orange } from '../assets'

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col" id='home'>
        <div className={`sm:${styles.flexStart}  ${styles.paddingX} flex-1 flex-col`}>
            <h1 className={`${styles.heading} sm:text-start text-center`}>Revitalize Your Routine,<br className='sm:block hidden' /> Fresh, Fruity, Fantastic!</h1>
            <p className={`${styles.paragraph} mt-5`}>"Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.<br className='sm:block hidden' /> Get the best variety of juices here!”</p>
            <div className='flex items-center justify-center gap-5 my-7'>
                <button className='bg-brown px-4 py-2 text-white rounded-[5px]'>
                    <a href="#menu">View Menu</a>
                </button>
                <button className='border border-brown px-4 py-2 text-brown rounded-[5px]'>
                    <a href="#">Discount</a>
                </button>
            </div>
        </div>
        <img src={Orange} alt="orange" className='w-[500px] object-fit' />
    </section>
  )
}

export default Hero