import React from 'react'
import Image from 'next/image'
import one from '@/public/icons/1.png'
import two from '@/public/icons/2.png'
import three from '@/public/icons/3.png'

const Values = () => {
  return (
    <div className='py-16 bg-secondary font-assistant text-lg lg:text-xl'>
      <div className="px-4 max-w-7xl mx-auto">
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <div className='flex items-center rounded-md w-52 md:w-60'>
            <Image src={one} alt='calidad' className='w-20 md:w-28' />
            <h5 className='font-arapey text-primary text-2xl'> Calidad Premium</h5>
          </div>
          <div className='flex items-center  rounded-md w-52 md:w-60 '>
            <Image src={two} alt='calidad' className='w-20 md:w-28' />
            <h5 className='font-arapey text-primary text-2xl'> Perfecta Instalación</h5>
          </div>
          <div className='flex  items-center  rounded-md w-52 md:w-60 '>
            <Image src={three} alt='calidad' className='w-20 md:w-28' />
            <h5 className='font-arapey text-primary text-2xl '>30 Años De Trayectoria</h5>
          </div>
        </div>
       

      </div>
    </div>
  )
}

export default Values