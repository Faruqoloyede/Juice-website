import React from 'react'
import { styles } from './style'
import { Features, Footer, Hero, Menu, Navbar } from './components'


const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Features />
          <Menu />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App