import React from 'react'
import Image from 'next/image'
import one from '@/public/icons/1.png'
import two from '@/public/icons/2.png'
import three from '@/public/icons/3.png'

const Values = () => {
  return (
    <div className=' py-16  bg-primary font-assistant text-primary text-lg lg:text-xl'>
      <div className="px-4 max-w-7xl mx-auto">
        <div className='flex flex-col items-center md:flex-row md:justify-between border-2'>
          <div className='flex items-center border-2 w-52 md:w-60 bg-primary'>
            <Image src={one} alt='calidad' className='w-20 md:w-28' />
            <h5 className='font-arapey text-secondary text-2xl'> Calidad Premium</h5>
          </div>
          <div className='flex items-center  border-2 w-52 md:w-60  bg-primary'>
            <Image src={two} alt='calidad' className='w-20 md:w-28' />
            <h5 className='font-arapey text-secondary text-2xl'> Perfecta Instalación</h5>
          </div>
          <div className='flex  items-center  border-2 w-52 md:w-60  bg-primary'>
            <Image src={three} alt='calidad' className='w-20 md:w-28' />
            <h5 className='font-arapey text-secondary text-2xl '>30 Años De Trayectoria</h5>
          </div>
        </div>
       

      </div>
    </div>
  )
}

export default Values