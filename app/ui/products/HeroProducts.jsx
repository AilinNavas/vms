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
                                className={`mb-4 border-b-2 py-1 px-2 ${activeIndex === index ? 'border-secondary' : 'border-secondary/50'}`}>
                                <h4 onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer flex items-center justify-between font-arapey pb-2 text-xl md:text-2xl hover:text-secondary ${activeIndex === index ? 'text-secondary font-medium' : 'text-secondary/80'}`}>
                                    {item.title}
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-4 w-4 ml-1"
                                        aria-hidden="true"
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </motion.svg>
                                </h4>

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
                            <a href={'https://walink.co/7712bc'} target='_blank' ><button className='rounded-full px-6 py-2 bg-secondary border-secondary border-2 text-primary font-assistant text-lg font-semibold hover:bg-transparent hover:text-secondary ease-in duration-300'>Cotizar ahora</button></a>
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









