import React from 'react'
import Image from 'next/image'
import phone from '@/public/icons/phone.svg'
import email from '@/public/icons/email.svg'

const InfoTop = () => {
    return (
        <div className='h-10 bg-secondary hidden md:block pt-1.5 font-assistant'>
            <div className="px-4 max-w-7xl mx-auto space-y-4">
                <div className='text-primary flex items-center md:justify-end lg:justify-between'>
                    <p className='items-center hidden lg:flex justify-end'>
                        <span className='mr-8 flex'>  <Image src={phone} alt='icono-telefono' />+549 351-158507065</span>
                        <span className='flex items-center'><Image src={email} alt='icono-email' className='mr-1 h-5' />ventas@vmscortinados.com</span></p>
                    <p>
                        <span className='mr-8'>Preguntas frecuentes</span>
                        <span className='font-bold'>Necesitas ayuda?</span></p>
                </div>
            </div>
        </div>
    )
}

export default InfoTop