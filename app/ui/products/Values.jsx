// import React from 'react'
// import Image from 'next/image'
// import check from '@/public/check.svg'

// const Values = () => {
//   return (
//     <div className='py-16 bg-secondary font-assistant text-lg lg:text-xl'>
//       <div className="px-4 max-w-7xl mx-auto">
//         <div className='flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:justify-between'>
//           <div className='flex items-center rounded-md w-52 md:w-60'>
//             <Image src={check} alt='calidad' className='w-12 ' />
//             <h5 className='font-arapey text-primary text-2xl'> Calidad Premium</h5>
//           </div>
//           <div className='flex items-center  rounded-md w-52 md:w-60 '>
//             <Image src={check} alt='calidad' className='w-12' />
//             <h5 className='font-arapey text-primary text-2xl'> Perfecta Instalación</h5>
//           </div>
//           <div className='flex  items-center rounded-md w-52 md:w-60 '>
//             <Image src={check} alt='calidad' className='w-12 ' />
//             <h5 className='font-arapey text-primary text-2xl '>30 Años De Trayectoria</h5>
//           </div>
//         </div>
       

//       </div>
//     </div>
//   )
// }

// export default Values

import React from 'react';
import Image from 'next/image';

const Values = ({ values }) => {
  return (
    <div className='py-16 bg-secondary font-assistant text-lg lg:text-xl'>
      <div className="px-4 max-w-7xl mx-auto">
        <div className='flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:justify-between'>
          {values.map((value, index) => (
            <div key={index} className='flex items-center rounded-md w-52 md:w-60'>
              <Image src={value.icon} alt={value.text} className='w-12 ' />
              <h5 className='font-assistant text-primary font-semibold text-2xl ml-2'>{value.text}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Values;