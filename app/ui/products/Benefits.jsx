// import React from 'react'
// import Image from 'next/image'
// import tradicional1 from '@/public/tradicional/grid/square1.png'
// import tradicional2 from '@/public/tradicional/grid/square2.png'
// import tradicional3 from '@/public/tradicional/grid/square3.png'

// const Benefits = () => {
//   return (
//     <div className='py-16 md:py-10 bg-primary font-assistant text-secondary text-lg lg:text-xl'>
//       <div className="px-4 max-w-7xl mx-auto border-2 border-red-600 space-y-8">

//         {/* Tarjeta beneficio 1 */}
//         <div className='flex flex-col lg:flex-row lg:justify-around border-2 border-green-400'>
//           <Image src={tradicional1} className=' lg:max-w-md' />
//           <div className='mt-4 lg:mt-0 lg:w-1/2 space-y-4 border-2'>
//             <span className='font-arapey text-2xl md:text-3xl'>Privacidad</span>
//             <p className='font-assistant text-gray text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//             <p className='font-assistant text-gray text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//             <p className='font-assistant text-gray text-lg'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </p>
//             <div className='text-center'>
//               <button className="rounded-full px-6 py-2 bg-secondary text-primary font-assistant text-lg font-semibold z-0 mt-10">Obtener una asesoria personalizada</button>
//             </div>
//           </div>
//         </div>

//         {/* Tarjeta beneficio 2 */}
//         <div className='flex flex-col lg:flex-row-reverse lg:justify-around border-2 border-green-400'>
//           <Image src={tradicional2} className=' lg:max-w-md' />
//           <div className='mt-4 lg:mt-0 lg:w-1/2 space-y-4 border-2'>
//             <span className='font-arapey text-2xl md:text-3xl'>Protección UV</span>
//             <p className='font-assistant text-gray text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//             <p className='font-assistant text-gray text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//             <p className='font-assistant text-gray text-lg'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </p>
//             <div className='text-center'>
//               <button className="rounded-full px-6 py-2 bg-secondary text-primary font-assistant text-lg font-semibold z-0 mt-10">Obtener una asesoria personalizada</button>
//             </div>
//           </div>
//         </div>

//         {/* Tarjeta beneficio 3 */}
//         <div className='flex flex-col lg:flex-row lg:justify-around border-2 border-green-400'>
//           <Image src={tradicional3} className=' lg:max-w-md' />
//           <div className='mt-4 lg:mt-0 lg:w-1/2 space-y-4 border-2'>
//             <span className='font-arapey text-2xl md:text-3xl'>Control térmico</span>
//             <p className='font-assistant text-gray text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//             <p className='font-assistant text-gray text-lg'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
//             <p className='font-assistant text-gray text-lg'>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </p>
//             <div className='text-center'>
//               <button className="rounded-full px-6 py-2 bg-secondary text-primary font-assistant text-lg font-semibold z-0 mt-10">Obtener una asesoria personalizada</button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Benefits


import React from 'react'
import Image from 'next/image'


const Benefits = ({ benefits }) => {
  return (
    <div className='py-16 md:py-10 bg-primary font-assistant text-secondary text-lg lg:text-xl'>
      <div className="px-4 max-w-7xl mx-auto space-y-8 lg:space-y-16">

        {benefits.map(({ id, title, description, image }) => (
          <div key={id} className={`flex flex-col items-center lg:flex-row ${id % 2 !== 0 ? 'lg:flex-row-reverse' : ''} lg:justify-around`}>
            <Image src={image} alt={title} className=' lg:max-w-md rounded-md shadow shadow-secondary' />
            <div className='mt-4 lg:mt-0 lg:w-1/2 space-y-4'>
              <span className='font-arapey text-2xl md:text-3xl'>{title}</span>
              {description.map((text, index) => (
                <p key={index} className='font-assistant text-gray text-xl'>{text}</p>
              ))}
              <div className='text-center'>
                <button className="rounded-full px-6 py-2 bg-secondary text-primary font-assistant text-lg font-semibold z-0 mt-6 lg:mt-10">Obtener una asesoría personalizada</button>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}



export default Benefits;
