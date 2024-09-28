 'use client'
 import React, { useState } from 'react'
 import Image from 'next/image'
 import { AnimatePresence, motion } from 'framer-motion'

 const HeroProducts = ({ productData }) => {
     const [activeIndex, setActiveIndex] = useState(0);

     const { cortinaName, fabrics } = productData;

     return (
      <section className='bg-primary py-16'>
          <div className="px-4 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row">
              <div className='flex flex-col justify-center lg:w-1/2 w-full'>
                  <h3 className='font-arapey text-secondary text-3xl md:text-5xl max-w-3xl py-6'>{cortinaName}</h3>
                  <div>
                      {fabrics.map((item, index) => (
                          <div
                              key={index}
                              className={`mb-4 border-b pb-1 ${activeIndex === index ? 'border-secondary' : 'border-secondary/50'}`}>
                              <h4 onClick={() => setActiveIndex(index)}
                                  className={`cursor-pointer font-arapey pb-2 text-xl md:text-2xl ${activeIndex === index ? 'text-secondary font-medium' : 'text-secondary/80'}`}>
                                  {item.title}</h4>

                              <motion.div className='overflow-hidden'
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{
                                      opacity: activeIndex === index ? 1 : 0,
                                      height: activeIndex === index ? "auto" : 0,
                                  }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                  <p className='text-lg  font-assistant pb-2 text-gray'>{item.description}</p>
                              </motion.div>
                          </div>
                      ))}
                        
                      <div className='text-center py-4'>
                          <button className='rounded-full px-6 py-2 bg-secondary border-secondary border-2 text-primary font-assistant text-lg font-semibold hover:bg-transparent hover:text-secondary ease-in duration-300'>Cotizar ahora</button>
                      </div>
                  </div>
              </div>
              <div className='lg:w-1/2 lg:flex lg:justify-end'>
                  <AnimatePresence mode='wait'>
                      <motion.div key={activeIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}

                      >
                          <Image src={fabrics[activeIndex].image} alt={fabrics[activeIndex].title} priority className='rounded-lg lg:max-w-lg' />
                      </motion.div>
                  </AnimatePresence>
              </div>
          </div>
      </section>

       

     );
 }

 export default HeroProducts;









