import React from 'react'
import { styles } from '../style'
import { images } from '../constant'


const Features = () => {
  return (
    <div id='features' className={`${styles.paddingY} flex sm:flex-row flex-col items-center gap-10`}>
        <div className='flex flex-col'>
            <h1 className={`${styles.heading} text-center sm:text-start`}>Why you should choose us?</h1>
            <p className={`${styles.paragraph} text-center sm:text-start`}>Our commitment to excellence in the realm of juices sets us apart from the competition.</p>
        </div>
        <div className='flex items-center sm:gap-10 gap-5 img'>
            {/* <div className='w-[300px] h-[350px]'>
              <img src={Pineapple} alt="" className='w-[100%] h-[100%]  ' />
            </div>
            <div className='w-[300px] h-[350px] mt-[20%]'>
              <img src={Grapes} alt="" className='w-[100%] h-[100%]    ' />  
            </div>
            <div className='w-[300px] h-[350px]'> 
              <img src={watermelon} alt="" className='w-[100%] h-[100%]  ' />
            </div> */}
            {images.map((item)=>(
              <div className='sm:w-[300px] w-[100px] sm:h-[350px] h-[100px]' key={item.id}>
                <img src={item.image} alt="fruite" className='w-[100%] h-[100%]  ' />
              </div>
            ))}
        </div>
    </div>
  )
}

export default Features