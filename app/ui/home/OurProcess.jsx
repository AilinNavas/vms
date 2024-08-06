
 import Image from 'next/image';
 import asesoramiento from '@/public/icons/Asesoramiento.svg';
 import medicion from '@/public/icons/Medicion.svg';
 import instalacion from '@/public/icons/Instalacion.svg';

 const OurProcess = () => {
   const OurProcess = [
     {
       title: 'Asesoramiento inicial',
       iconSrc: asesoramiento,
       detail: 'Comienza tu experiencia con una consulta  con nuestra asesora de diseño. Puedes enviarnos fotos y especificaciones del lugar donde deseas instalar tus cortinas, junto con tus preferencias de telas. Recibirás una cotización detallada adaptada a tus necesidades.'
     },
     {
       title: 'Atención personalizada',
       iconSrc: medicion,
       detail: 'Nuestro equipo se desplazará a tu domicilio con un catálogo de telas exclusivo. Te ayudamos a seleccionar la mejor opción para tu espacio, asegurándonos de que cada detalle refleje tu estilo único. Además, tomamos las medidas exactas para garantizar un ajuste perfecto.'
     },
     {
       title: 'Instalación profesional',
       iconSrc: instalacion,
       detail: 'Nuestros expertos instalarán tus nuevas cortinas con precisión y cuidado. Estaremos siempre a tu disposición para responder cualquier inquietud, asegurando que tu satisfacción sea total.'
     }
   ];


   return (
     <section className='bg-primary'>
       <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center border-2 border-yellow-400'>
         <header className='pb-20'>
           <h2 className='text-secondary font-arapey text-3xl md:text-5xl'>Nuestro proceso</h2>
         </header>
         <div className="flex flex-wrap justify-center space-y-4 md:space-x-4 md:space-y-4 lg:space-y-0 lg:justify-around">
           {OurProcess.map((value, index) => (
             <div
               key={index}
               className={`flex flex-col items-center p-4 rounded-md  max-w-xs h-80 border-2 border-secondary hover:shadow-md hover:shadow-secondary transition-all ease-linear duration-300 `}

             >
               <div className="flex items-center mb-4 ">
                 <Image src={value.iconSrc} className="w-16" unoptimized />
                 <h6 className="text-2xl font-semibold text-secondary">{value.title}</h6>
               </div>
               <p className="text-gray text-left">{value.detail}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   )
 }

 export default OurProcess