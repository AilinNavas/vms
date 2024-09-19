import React from 'react'
import Image from 'next/image';


const MasonryGrid = ({images = [] }) => {
  return (
    <div className='columns-1 md:columns-3 py-10 gap-4 border-2 border-red-500'>
        {images.map((image, index) => {
          return (
            <div key={index} className='mb-4 break-inside-avoid'>
              <Image src={image.src} alt={image.alt} className='w-full object-cover rounded-lg' />
            </div>
          );
        })}
      </div>

  )
}

export default MasonryGrid