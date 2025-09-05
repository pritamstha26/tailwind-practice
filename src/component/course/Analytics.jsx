import React from 'react'

import img1 from   "../../assets/img3.jpg"
export default function Analytics() {
  return (
    <div className='w-full bg-white text-black py-8 sm:py-16 sm:px-4'>
        <div className='grid grid-cols-1    md:grid-cols-2 max-w-[1240px] mx-auto gap-4'>
          <div className='max-w-[400px]   w-full mx-auto'>

                  <img src={img1} alt="" className='w-full h-auto object-center' />
          </div>

                 <div className='flex flex-col gap-4 '>
                    <p className='text-green-500 text-lg p-2  font-extrabold uppercase'>Lorem ipsum dolor sit.</p>
                    <p className='sm:text-3xl md:text-4xl p-2 font-extrabold'>Lorem ipsum dolor sit amet consectetur.</p>
                    <p className=' font-bold p-2 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, doloremque autem! Voluptatum aliquid voluptas amet tempore non, illum tempora mollitia rerum, odit facere error cupiditate repellat consectetur, animi modi temporibus.</p>
                    <button className='bg-black text-green-300 px-5 py-2 hover:text-green-500 hover:bg-gray-600 md:w-fit mx-auto md:mx-0 font-bold rounded '>Get Started</button>
                </div>
        </div>
    </div>
  )
}
