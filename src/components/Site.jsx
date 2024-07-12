import React from 'react'
import { site } from '../constant'

const Site = () => {
  return (
    <div>
      <h1 className='text-[40px] font-medium font-jost text-brown'>Sitemap</h1>
      <p className='text-[18px] font-jost text-brown mb-5'>All our pages</p>
      <ul className='list-none flex flex-col gap-3 my-3'>
        {site.map((item)=>(
          <li className='text-[18px] font-medium text-brown' key={item.id}>
            <a href={`#${item.id}`}>{item.link}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Site