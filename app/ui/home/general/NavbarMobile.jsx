"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/icons/logo2.svg';

const NavbarMobile = () => {
    return (
        <div className='lg:hidden'>
            <div className='flex items-center bg-primary justify-between py-2'>
                <div className="z-40 h-24 ml-4">
                    <Link href={'/'}>
                        <Image src={logo} className="h-full w-full" />
                    </Link>
                </div>
                <AnimatedHamburgerButton />
            </div>
        </div>
    );
}

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);

    const handleLinkClick = () => {
        setActive(false);
    };

    return (
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className='relative z-30 mr-1'>
                <motion.button
                    initial={false}
                    onClick={() => setActive(pv => !pv)}
                    className='relative z-20 h-14 w-14 rounded-full bg-secondary/0 transition-colors hover:bg-secondary/10'
                    animate={active ? "open" : "closed"}
                >
                    <motion.span
                        style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
                        className='absolute h-0.5 w-10 bg-secondary'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] }
                        }}
                    />
                    <motion.span
                        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                        className='absolute h-0.5 w-10 bg-secondary'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "-45deg"] },
                            closed: { rotate: ["-45deg", "0deg", "0deg"] }
                        }}
                    />
                    <motion.span
                        style={{ left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%" }}
                        className='absolute h-0.5 w-5 bg-secondary'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], left: "50%", bottom: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], left: "calc(50% + 10px)", bottom: ["50%", "50%", "35%"] }
                        }}
                    />
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={active ? { opacity: 1, height: '100vh' } : { opacity: 0, height: 0 }}
                    className="fixed top-0 left-0 right-0 bottom-0 bg-primary z-10 overflow-hidden"
                >
                    <nav className="flex mt-28 md:mt-40 flex-col items-center justify-start space-y-10 h-full p-8 font-arapey text-2xl">

                        <div className='flex'>

                            <Link href="/sobre-nosotros" className="text-secondary" onClick={handleLinkClick}>Sobre nosotros</Link>
                        </div>

                        <div className='flex'>

                            <Link href="/tradicional-con-riel" className="text-secondary" onClick={handleLinkClick}>Tradicional con Riel</Link>
                        </div>

                        <div className='flex'>

                            <Link href="/tradicional-con-barral" className="text-secondary" onClick={handleLinkClick}>Tradicional con Barral</Link>
                        </div>
                        <div className='flex'>

                            <Link href="/roller" className="text-secondary" onClick={handleLinkClick}>Cortina Roller</Link>
                        </div>

                        <div className='flex'>

                            <Link href="/bandas-verticales" className="text-secondary " onClick={handleLinkClick}>Bandas Verticales</Link>
                        </div>

                        <div className='flex'>

                            <Link href="/toldos-verticales" className="text-secondary " onClick={handleLinkClick}>Toldos Verticales</Link>
                        </div>

                        <div>
                            <a href={'https://walink.co/7712bc'} target='_blank' rel="noopener noreferrer">
                                <button className="rounded-full px-6 py-2 text-lg font-assistant bg-secondary text-primary font-semibold border-secondary border-2 hover:bg-transparent hover:text-secondary ease-in duration-300">Contactar</button>
                            </a>
                        </div>

                    </nav>
                </motion.div>
            </div>
        </MotionConfig>
    );
}

export default NavbarMobile;