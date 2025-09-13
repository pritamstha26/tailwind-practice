import React from 'react'

export default function News() {
  return (


    <div className='bg-black p-6 flex flex-col md:flex-row justify-between   gap-3' >

      <div className='py-10 md:w-1/2'>
        <h1 className='text-3xl font-extrabold'>Lorem ipsum dolor, sit amet consectetur .</h1>
        <p>Lorem ipsum dolor, sit amet  iure officia ab rem.</p>
      </div>
      <div className='  md:w-1/2 text-white ' >
      <div className='flex flex-col sm:flex-row gap-3 py-3
       items-center  justify-center '>

          <input type="text" className='bg-white text-lg md:text-xl    p-2 w-full sm:flex-1 rounded-sm  outline-none   text-black' placeholder='Enter your email' />
          <button className='bg-green-300 hover:bg-green-400 text-lg md:text-xl  py-2 px-3 font-bold sm:w-auto  text-black rounded-sm cursor-pointer hover ' onClick={()=> alert("jello") }>Notify me</button>
      </div>
        <div className='py-3'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, veritatis.
            </p>
            <a href="#" className='text-green-300  underline '>Privacy Policy</a>
        </div>
      </div>
      


    </div>
   
  )
}
