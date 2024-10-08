
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import vene1 from '@/public/veneciana-panel/1.webp';
import pane1 from '@/public/veneciana-panel/2.webp';
import vene2 from '@/public/veneciana-panel/3.webp';
import pane2 from '@/public/veneciana-panel/4.webp';
import vene3 from '@/public/veneciana-panel/5.webp';
import pane3 from '@/public/veneciana-panel/6.webp';

const slides = [
  { src: vene1, alt: 'cortina-veneciana-1' },
  { src: pane1, alt: 'panel-oriental-1' },
  { src: vene2, alt: 'cortina-veneciana-2' },
  { src: pane2, alt: 'panel-oriental-2' },
  { src: vene3, alt: 'cortina-veneciana-3' },
  { src: pane3, alt: 'panel-oriental-3' },
];

const SliderTrust = () => {

  const duplicatedSlides = [...slides, ...slides];

  return (
    <section className='bg-secondary py-16'>
      <div className='max-w-7xl mx-auto '>
        <p className='text-primary px-4 font-assistant text-lg lg:text-xl'>También, podemos transformar tus ambientes con paneles orientales y cortinas venecianas.</p>

        <div className="relative w-full overflow-hidden mx-auto px-4 my-6" style={{ width: "98%" }}>
          <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/6 before:h-full before:bg-gradient-to-r before:from-secondary before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/6 after:h-full after:bg-gradient-to-l after:from-secondary after:to-transparent after:filter after:blur-3"></div>

          <motion.div
            className="flex"
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
              <div key={index} className="flex-shrink-0" style={{ width: `${200 / slides.length}%` }}>
                <div className="flex items-start justify-center">
                  <Image src={slide.src} alt={slide.alt} className='border-2 lg:border-8 border-secondary' />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className='text-center'>
        <a href={'https://walink.co/82c00b'} target='_blank'  rel="noopener noreferrer"><button className="rounded-full px-6 py-2 bg-primary border-2 border-primary text-secondary font-assistant text-lg font-semibold z-0 hover:bg-transparent hover:text-primary ease-in duration-300">Obtener una asesoría personalizada</button></a>
        </div>
      </div>
    </section>
  );
}

export default SliderTrust;
