import React from 'react'
import Image from 'next/image'
import wsp from '@/public/icons/whatsapp-azul.svg'
import email from '@/public/icons/email.svg'
import Link from 'next/link'

const InfoTop = ({ faqsHref }) => {
    return (
        <div className='h-10 w-full bg-secondary hidden md:block pt-1.5 font-assistant top-0 fixed z-50'>
            <div className="px-4 max-w-7xl mx-auto space-y-4">
                <div className='text-primary flex items-center md:justify-end lg:justify-between'>
                    <p className='items-center hidden lg:flex justify-end'>
                        <a href={'https://wa.link/ifl5gf'} target="_blank"
                            rel="noopener noreferrer"><span className='mr-8 flex'><Image src={wsp} alt='icono-whatsapp' className='h-5 w-5 mr-1' />+54 351207-6990</span></a>
                        <span className='flex items-center'><Image src={email} alt='icono-email' className='mr-1 h-5' />ventas@vmscortinados.com</span></p>
                    <p>
                        <Link href={faqsHref}><span className='mr-8'>Preguntas frecuentes</span></Link>
                        <a href={'https://wa.link/ifl5gf'} target="_blank"
                            rel="noopener noreferrer"><span className='font-bold'>Necesitas ayuda?</span></a></p>
                </div>
            </div>
        </div>
    )
}

export default InfoTop 
