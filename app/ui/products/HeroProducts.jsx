"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import arrow from '@/public/icons/arrow.svg'
import check from '@/public/icons/check.svg'
import gasa1 from '@/public/tradicional/gasa1.png'
import gasa2 from '@/public/tradicional/gasa2.png'
import gasa3 from '@/public/tradicional/gasa3.png'
import voile1 from '@/public/tradicional/voile1.png'
import voile2 from '@/public/tradicional/voile2.png'
import voile3 from '@/public/tradicional/voile3.png'



const HeroProducts = () => {
  const telas = [
    {
      name: 'BlackOut Premium',
      images: [
        { src: gasa1, title: 'Simplicidad' },
        { src: gasa2, title: 'Bajo mantenimiento' },
        { src: gasa3, title: 'Alta durabilidad' },
      ],
    },
    {
      name: 'Sunscreen',
      images: [
        { src: voile1, title: 'Filtra luz' },
        { src: voile2, title: 'Alta resistencia' },
        { src: voile3, title: 'Modernidad' },
      ],
    },
  ];

  const [activeTela, setActiveTela] = useState(telas[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeTela.images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeTela.images.length) % activeTela.images.length);
  };


  return (
    <section className='bg-primary'>
      <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center border-2 border-yellow-400'>
        <header className='pb-8'>
          <h2 className='text-secondary font-arapey text-3xl md:text-5xl pb-4'>Cortina Tradicional</h2>
          <p className='font-assistant text-gray'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
        </header>

        <div className="flex justify-center space-x-4 mb-6">
          {telas.map((tela, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTela(tela);
                setCurrentIndex(0);
              }}
              className={`py-2 px-4 border rounded font-assistant ${activeTela.name === tela.name ? 'bg-secondary text-primary' : 'border-secondary text-gray'
                } transition-colors duration-300`}
            >
              {tela.name}
            </button>
          ))}
        </div>

        <div className="relative max-w-md mx-auto border-2 border-red-500">
        <p className="mb-4 text-xl font-assistant text-secondary flex"> <Image src={check} className="mr-1 w-6" />{activeTela.images[currentIndex].title}</p>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 p-2 rounded-full "
          >
            <Image src={arrow} className="rotate-180 w-6" />
          </button>

          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <Image
                src={activeTela.images[currentIndex].src}
                alt={activeTela.images[currentIndex].title}
                className="rounded-md md:max-w-md"
              />

             
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 p-2 rounded-full"
          >
            <Image src={arrow} className="w-6" />
          </button>

          <div className="flex justify-center mt-4 space-x-2">
            {activeTela.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-secondary scale-125' : 'border-2 border-secondary'
                  } transition-all`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroProducts