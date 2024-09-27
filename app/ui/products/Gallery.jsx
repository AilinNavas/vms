import React from 'react'
import MasonryGrid from './MasonryGrid'
import Link from 'next/link'
const Gallery = ({ title, description, images }) => {
  return (
    <section className='bg-gray'>
      <div className=' mx-auto max-w-7xl px-4 pt-16 pb-12'> 
        <div className='w-full justify-between'>
          <div className='flex flex-col md:flex-row gap-5'>
            <h3 className='text-primary font-arapey md:w-1/2 tracking-tight text-3xl md:text-5xl'>{title}</h3>
            <p className='md:w-1/2 font-assistant text-lg md:text-xl text-primary'>
              {description}
            </p>
          </div>
          <MasonryGrid images={images} />
        </div>
        <div className='text-center'>
        <Link href={'https://walink.co/82c00b'}><button className="rounded-full px-6 py-2 bg-primary border-2 border-primary text-secondary font-assistant text-lg font-semibold z-0 hover:bg-transparent hover:text-primary ease-in duration-300">Obtener una asesoria personalizada</button></Link>
        </div>
      </div> 
    
    </section>
  )
}

export default Gallery