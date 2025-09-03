import React from 'react'
import { ReactTyped } from "react-typed";
export default function Hero() {
  return (
    <div className='flex items-center flex-col gap-2 justify-center text-center my-3'>
      <h2 className='text-lg sm:text-xl md:text-2xl text-green-300 font-extrabold uppercase'>Grow with data analytics</h2>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold'>Grow with data.</h1>
      <div className='text-3xl sm:text-4xl md:text-5xl font-extrabold flex sm:flex-row flex-col  justify-center items-center ' >
         <p className='pr-2  '>Fast, flexible financing for </p>
         <ReactTyped 
          strings={["BTB","BTC"]}  
          typeSpeed={120} 
          backSpeed={120} 
          loop />
      </div>

        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold  text-gray-500 py-2 '>Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.</h2>
        <button className='bg-green-500 font-extrabold my-6 w-fit mx-auto text-black px-4 py-2 rounded'>Get Started</button>
    </div>
  )
}
 