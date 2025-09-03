import React ,{useState} from 'react'
import { Menu ,X} from 'lucide-react';
export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
<div className='text-white flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4'>
    <h1 className='uppercase w-full text-3xl font-bold text-green-300   '>React. </h1>
    <ul className=' hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>

    </ul>
    <div className='block md:hidden'>
{
  !nav ?         <Menu size={30} onClick={handleNav} />
 : <X size={30} onClick={handleNav} />
}
    </div>
    <div className={ nav? `fixed left-0 top-10 w-[60%] border-r border-r-gray-900 md:hidden  duration-500`:
     ' fixed left-0 top-0 w-[60%] border-r border-r-gray-900 hidden '
    }>

         <ul className=' uppercase p-4 '>

        <li className='p-4  border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Resource</li>
        <li className='p-4 border-b border-gray-600' >About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>

    </ul>
    </div>
    </div>
  )
}
