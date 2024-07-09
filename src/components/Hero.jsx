import React from 'react'
import { styles } from '../style'
import { Orange } from '../assets'

const Hero = () => {
  return (
    <section className="flex md:flex-row flex-col" id='home'>
        <div className={`${styles.flexStart} ${styles.paddingX} flex-1 flex-col`}>
            <h1 className={`${styles.heading}`}>Revitalize Your Routine,<br /> Fresh, Fruity, Fantastic!</h1>
            <p className={`${styles.paragraph}`}>"Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.<br /> Get the best variety of juices here!”</p>
            <div className='flex items-center gap-5 mt-7'>
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