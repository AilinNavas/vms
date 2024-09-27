
import React from 'react'
import Image from 'next/image'


const Benefits = ({ benefits }) => {
  return (
    <div className='py-16  bg-primary font-assistant text-secondary text-lg lg:text-xl '>
          <header className='px-4 max-w-7xl mx-auto'>
           <h2 className='text-secondary font-arapey text-3xl md:text-5xl'>Beneficios</h2>
         </header>
      <div className="px-4 max-w-7xl mx-auto space-y-8 lg:space-y-16">
  

        {benefits.map(({ id, title, description, image ,alt }) => (
          <div key={id} className={` flex flex-col items-center lg:flex-row ${id % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:justify-between`}>
            <Image src={image} alt={alt} className=' lg:max-w-md rounded-md ' />
            <div className={` mt-4 lg:mt-0 lg:w-2/3 space-y-4 ${id % 2 === 0 ? 'lg:pl-8' : ''} lg:pr-8`}>
              <span className='font-arapey text-2xl md:text-3xl'>{title}</span>
              {description.map((text, index) => (
                <p key={index} className='font-assistant text-gray text-lg md:text-xl'>{text}</p>
              ))}
              <div className='text-center'>
                <button className="rounded-full px-6 py-2 bg-secondary border-secondary border-2 text-primary font-assistant text-lg font-semibold z-0 mt-6 lg:mt-10 hover:bg-transparent hover:text-secondary ease-in duration-300">Obtener una asesoría personalizada</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}



export default Benefits;
