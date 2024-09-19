import React from 'react'
import MasonryGrid from './MasonryGrid'

const Gallery = ({ title, description, images }) => {
  return (
    <section className='bg-gray'>
      <div className=' mx-auto max-w-7xl py-10 px-4 '>
        <div className='w-full justify-between '>
          <div className='flex flex-col md:flex-row gap-5'>
            <h3 className='text-primary font-arapey md:w-1/2 tracking-tight text-3xl md:text-4xl'>{title}</h3>
            <p className='md:w-1/2 font-assistant text-primary'>
              {description}
            </p>
          </div>
          <MasonryGrid images={images} />
        </div>
        <div className='text-center'>
        <button className="rounded-full px-6 py-2 bg-primary text-secondary font-assistant text-lg font-semibold z-0 mt-10">Obtener una asesoria personalizada</button>
        </div>-
      </div>
    
    </section>
  )
}

export default Gallery