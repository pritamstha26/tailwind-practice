import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from "../component/Navbar";
export default function Movie() {

  const location = useLocation();
  const movie = location.state ;
  console.log(movie)
const url =`https://image.tmdb.org/t/p/original/${movie.poster_path}`
  return (
    <div className="dynamic-bg w-full h-screen bg-repeat bg-cover bg-center" style={{'--bg-image':`url(${url})`}}>
        <Navbar />
        <div className='grid grid-cols-1 h-screen  w-1/2  p-3  sm:p-30  '>
        <p className='text-7xl font-extrabold font-mono text-white text-wrap  md:hidden'>
          {movie.title}
        </p>
        <p className='text-2xl  font-bold font-sans text-white leading-loose '>
          {movie.overview}
        </p>
        

        </div>
    </div>
  )
}
