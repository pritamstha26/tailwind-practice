import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from "../component/Navbar";
export default function Movie() {

  const location = useLocation();
  const movie = location.state ;
  console.log(movie)
const url =`https://image.tmdb.org/t/p/original/${movie.poster_path}`
  return (
    <div className="dynamic-bg w-full h-screen bg-repeat bg-cover  bg-center " style={{'--bg-image':`url(${url})`}}>
        <Navbar />
        <div className='md:grid sm:grid sm:grid-cols-1 h-screen  hidden w-full  '>
         <p className='text-white text-5xl font-semibold   '>
          {movie.title}
         </p>
          <p className='text-white text-xl font-semibold leading-11   '>
          {movie.overview}
          </p>
          <span className='text-white text-lg font-semibold'>
            helo
          </span>
     
        

         </div>
    </div>
  )
}
