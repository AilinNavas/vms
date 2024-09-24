'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import macro from '@/public/logos/1.svg'
import electrolux from '@/public/logos/2.svg'
import allende from '@/public/logos/3.svg'

const slides = [
  { src: macro , alt: 'logo-banco-macro' },
  { src: electrolux , alt: 'logo-electrolux'},
  { src: allende , alt: 'logo-allende'},
 
];

const SliderTrust = () => {

  const duplicatedSlides = [...slides, ...slides];

  return (
    <section className='bg-secondary py-16 '>
      <div className='max-w-7xl mx-auto '>
      <p className='text-primary font-arapey px-4 text-2xl md:text-3xl'>Empresas que han confiado en nosostros:</p>
       
        <div className="relative w-full overflow-hidden bg-secondary mx-auto px-4" style={{ width: "98%" }}>
     

        <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-secondary before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-secondary after:to-transparent after:filter after:blur-3"></div> 

          <motion.div
            className="flex  my-6"
            animate={{
              x: ['0%', '-100%'],
              transition: {
                ease: 'linear',
                duration: 15,
                repeat: Infinity,
              }
            }}
          >
            {duplicatedSlides.map((slide, index) => (
              <div key={index} className="flex-shrink-0 " style={{ width: `${100 / slides.length}%` }}>
                <div className="flex items-center justify-center h-20">
                 <Image src={slide.src} alt={slide.alt} className='px-2 md:px-4 lg:px-0'/>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className='text-center'>
        <button className="rounded-full px-6 py-2 bg-primary text-secondary font-assistant text-lg font-semibold z-0">Solicitar cotización</button>
        </div>
      </div>
   
    </section>
  
  );
}

export default SliderTrust