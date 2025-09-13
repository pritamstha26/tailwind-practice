

// 

export default function Card({src, title, price, features}) {
  return (
    <div className='w-full py-16 px-4  text-black '>
        <div className=' rounded-lg border-gray-200 flex flex-col bg-gray-50 border  text-center shadow-lg font-extrabold p-6 hover:scale-105 duration-300 '>


            <img src={src} className='w-20 max-w-15 mt-[-3.5rem] mx-auto' alt="Logo" />
           <h1 className='text-black text-xl sm:text-2xl md:text-3xl py-3  '>
            {title}
           </h1>

           <h1 className='text-black text-4xl   '>
            {price}
           </h1>
            
                 <div className="p-4">
          <ul className="divide-y divide-gray-200"> 
            {features.map((feature, index) => (
              <li key={index} className="py-2 text-gray-700 font-medium">
                {feature}
              </li>
            ))}
          </ul>
        </div>  
              <button className='px-3 py-2 bg-green-300 text-black hover:bg-green-400 font-extrabold rounded-md cursor-pointer'>Start Trial</button>
        </div>  
    </div>

  )
}
