
 const OurProcess = () => {
   const OurProcess = [
     {
       title: 'Asesoramiento inicial',
       number: '01.',
       detail: 'Comienza tu experiencia con una consulta con nuestra asesora de diseño. Envíanos fotos y preferencias del espacio, y te enviaremos una cotización personalizada.'
     },
     {
       title: 'Atención personalizada',
       number: '02.',
       detail: 'Nos desplazamos a tu domicilio con un catálogo de telas exclusivas, ayudándote a elegir la mejor opción para tu espacio y tomando medidas precisas para un ajuste perfecto.'
     },
     {
       title: 'Instalación profesional',
       number: '03.',
       detail: 'Nuestros expertos instalarán tus cortinas con precisión y cuidado, y estaremos siempre disponibles para responder cualquier inquietud, garantizando tu completa satisfacción.'
     }
   ];


   return (
     <section className='bg-primary'>
       <div className='mx-auto max-w-7xl pt-32 pb-16 px-4 flex flex-col justify-center'>
         <header className='pb-8'>
           <h2 className='text-secondary font-arapey text-3xl md:text-5xl'>Nuestro proceso</h2>
         </header>
         {/* <div className="flex flex-wrap justify-center space-y-4 md:space-x-4 md:space-y-4 lg:space-y-0 lg:justify-around"> */}
         <div className="grid gap-6 grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-3">
           {OurProcess.map((value, index) => (
             <div
               key={index}
               className={`flex flex-col justify-center p-6 rounded-md  max-w-sm h-[280px] border-2 border-secondary hover:shadow-md hover:shadow-secondary transition-all ease-linear duration-300 `}

             >
               <div className="flex items-center justify-start mb-4">
                 <span className="font-arapey text-secondary text-2xl md:text-3xl mr-2">{value.number}</span> 
                 <h6 className="text-2xl md:text-3xl  text-secondary font-arapey">{value.title}</h6>
               </div>
               <p className="text-gray text-left font-assistant text-lg md:text-xl ">{value.detail}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   )
 }

 export default OurProcess