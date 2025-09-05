import React from 'react'

export default function News() {
  return (
    <div className='w-full  flex justify-center items-center py-16 text-white bg-black'> 

      <div className=' grid grid-cols-3  items-center container p-3 '>
        <div className='md:col-span-2  col-span-3'>

        <h1 className='font-extrabold text-4xl'>Lorem ipsum dolor sit amet.</h1>
        <p className='text-md'> 
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        </div>

          <div className='md:col-span-1 col-span-3'>
        <div className='grid grid-cols-3 gap-2'>

        <input type="text" className='bg-white py-2 col-span-3 md:col-span-2 max-w-[200px] rounded-md' />
        <button className='bg-green-300 text-black py-2 px-4 col-span-3 max-w-[200px] md:col-span-1 rounded-md font-extrabold'>Notify me</button>
        <p className='col-span-3'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <a href="#" className='text-green-300 underline col-span-3'> Privacy Policy</a>
        </div>
        </div>
      </div>
    </div>
  )
}
