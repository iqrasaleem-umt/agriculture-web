
import React from 'react'
import Image from 'next/image'
export default function header() {
  return (
    <div>
    <div className='flex justify-between w-full height-8 bg-blue-900 text-white px-12'>
        <div className='flex'>
        <h3 className=' text-xl '>IQRASALEEM</h3>
        <h3 className=' text-xl text-sky-400 '>Made</h3>
        </div>
        <div className='flex'>
        <h1 className='font-bold text-xl'>Agriculture </h1>
        <h1 className='font-bold text-xl text-sky-400'> Website</h1>
        </div>
       
        
        </div>
        <div className="w-full h-20 border-b px-12 flex mt-9 ">
         <div className="text-green-700  ">
             <Image  src={"/tractorimage.jpg"} width={60} height={60} alt='image'/>
            </div>
            <div className="flex flex-col">
            <p className="text-green-700 font-bold">AGRI</p>
            <p className="font-bold text-green-700">CULTURE</p>
           
            </div>
            <div>
            <h1 className="font-bold text-2xl mt-2 text-gray-600 flex items-center justify-center px-64">Lets checkout our agriculture services</h1>
            </div>
        </div>
    </div>
  )
} 