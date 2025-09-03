import React from 'react'

import img1 from   "../../assets/img1.jpg"
export default function Analytics() {
  return (
    <div className='w-full bg-white text-black py-16 px-4'>
        <div className='grid grid-cols-1    md:grid-cols-2 max-w-[1240px] mx-auto'>
                     <img src={img1} alt="" className='w-[500px] mx-auto' />
                 <div>
                    <p className='text-green-500 text-lg font-extrabold uppercase'>Lorem sipsum dolor sit.</p>
                    <p className='sm:text-3xl md:text-4xl  font-extrabold'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className='text-medium font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, odio.</p>
                    <button className='bg-black text-green-300 px-4 py-2 rounded mx-auto'>Get Started</button>
                </div>
        </div>
    </div>
  )
}
