import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <div>
      <div className='text-center mt-10'>
        <h1 className='text-gray-600 text-2xl'>Testimonial</h1>
        <h1 className='text-gray-600 text-2xl mt-4'>The Needs Of Its Consequence</h1>
      </div>

      <div className='flex justify-between mt-6'>
        {/* First Testimonial */}
        <div className='flex flex-col items-center'>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image 
              className="object-cover"  
              src="/officegirl.jpg" 
              height={100} 
              width={100} 
              alt="image" 
            />
          </div>
          <p className='text-gray-600 text-xl mt-4'>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit <br />
            Provident deleniti iusto molestias, dolore vel fugiat ab <br />
            placeat ea?”
          </p>
          <h1 className='text-green-700 mt-4'>KATE SMITH</h1>
        </div>

        {/* Second Testimonial */}
        <div className='flex flex-col items-center'>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image 
              className="object-cover"  
              src="/officegirl.jpg" 
              height={100} 
              width={100} 
              alt="image" 
            />
          </div>
          <p className='text-gray-600 text-xl mt-4'>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit <br />
            Provident deleniti iusto molestias, dolore vel fugiat ab <br />
            placeat ea?”
          </p>
          <h1 className='text-green-700 mt-4'>KATE SMITH</h1>
        </div>
      </div>

      <div className='flex justify-between mt-6'>
        {/* Third Testimonial */}
        <div className='flex flex-col items-center'>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image 
              className="object-cover"  
              src="/officegirl.jpg" 
              height={100} 
              width={100} 
              alt="image" 
            />
          </div>
          <p className='text-gray-600 text-xl mt-4'>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit <br />
            Provident deleniti iusto molestias, dolore vel fugiat ab <br />
            placeat ea?”
          </p>
          <h1 className='text-green-700 mt-4'>KATE SMITH</h1>
        </div>

        {/* Fourth Testimonial */}
        <div className='flex flex-col items-center'>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image 
              className="object-cover"  
              src="/officegirl.jpg" 
              height={100} 
              width={100} 
              alt="image" 
            />
          </div>
          <p className='text-gray-600 text-xl mt-4'>
            “Lorem ipsum dolor sit, amet consectetur adipisicing elit <br />
            Provident deleniti iusto molestias, dolore vel fugiat ab <br />
            placeat ea?”
          </p>
          <h1 className='text-green-700 mt-4'>KATE SMITH</h1>
        </div>
      </div>
    </div>
  )
}


