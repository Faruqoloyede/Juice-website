import React from 'react'
import { styles } from '../style'
import { Pineapple, Grapes, watermelon } from '../assets'

const Features = () => {
  return (
    <div id='features' className={`${styles.paddingY} flex sm:flex-row flex-col items-center gap-10`}>
        <div className='flex flex-col'>
            <h1 className={`${styles.heading}`}>Why you should choose us?</h1>
            <p className={`${styles.paragraph}`}>Our commitment to excellence in the realm of juices sets us apart from the competition.</p>
        </div>
        <div className='flex items-center gap-10 img'>
            <img src={Pineapple} alt="" className='w-[250px] h-[300px] px-4 py-3 ' />
            <img src={Grapes} alt="" className='w-[250px] h-[300px] px-4 py-3 mt-[20%]  ' />
            <img src={watermelon} alt="" className='w-[250px] h-[300px] px-4 py-3 ' />
        </div>
    </div>
  )
}

export default Features