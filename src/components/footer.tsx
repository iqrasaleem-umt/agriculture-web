import React from 'react'
import Image from 'next/image'
export default function Footer() {
  return (
    <div className='w-full h-50 bg-black px-8 mt-4 '>
        <div className='mt-4'>
        <h1 className='text-white font-bold text-xl'>Agriculture</h1>
        <p className='text-white mt-2'>Adam Street</p>
        <p className='text-white mt-2'>Email: ABC@example.com</p>
        <p className='text-white mt-2'>Phone: 0300 78787800</p>
        </div>
        <div>
      <Image  src="/whatsapp.png" alt="WhatsApp" height="20" width="20" />

    
        </div>
        <div className='text-center text-white -mt-3'><p>All Rights Reserved Design By Iqra Saleem</p></div>
       
    </div>
  )
}
