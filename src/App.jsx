import React from 'react'
import { styles } from './style'

const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}></div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}></div>
      </div>
    </div>
  )
}

export default App