import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter ,FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-black'>
    <div className='grid grid-cols-1 md:grid-cols-4  gap-6 py-3 md:container mx-auto'>
        <div className='flex flex-col px-4'> 
              <h1 className='uppercase w-full  py-4 text-3xl font-bold text-green-300   '>React. </h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi esse maxime dolorum ratione voluptas neque </p>
              <div className=' flex flex-row justify-start gap-4  items-center py-4 '>

                  <FaFacebook  size={20}/>
                  <FaInstagram  size={20}/>
                  <FaTwitter  size={20}/>
                  <FaGithub  size={20}/>
              </div>
        </div>
        <div className='p-4'> 
          <h1 className='text-xl text-gray-500 font-semibold '>Solutions</h1>
          <div className='flex flex-col'>
            <a href='#' className='font-bold py-2'>Analytics</a>
            <a href='#' className='font-bold py-2'>Marketing</a>
            <a href='#' className='font-bold py-2'>Commerce</a>
            <a href='#' className='font-bold py-2'>Insights</a>
          </div>


        </div>
        <div className='p-4'>  <h1 className='text-xl text-gray-500 font-semibold'>Support</h1>
          <div className='flex flex-col'>
            <a href='#' className='font-bold py-2'>Pricing</a>
            <a href='#' className='font-bold py-2'>Documentation</a>
            <a href='#' className='font-bold py-2'>Guides</a>
            <a href='#' className='font-bold py-2'>API Status</a>
          </div></div>
        <div className='p-4'>
           <h1 className='text-xl text-gray-500 font-semibold'>Company</h1>
          <div className='flex flex-col'>
            <a href='#' className='font-bold py-2'>About</a>
            <a href='#' className='font-bold py-2'>Blogs</a>
            <a href='#' className='font-bold py-2'>Jobs</a>
            <a href='#' className='font-bold py-2'>Press</a>
            <a href='#' className='font-bold py-2'>Press</a>
          </div></div>
    </div>
    </div>
  )
}
