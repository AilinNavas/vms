import React from 'react'
import Link from 'next/link';

const AboutUs = () => {

    const OurValues = [
        {
            title: 'Integridad',
            detail: 'Actuamos con transparencia y honestidad en cada interacción.'
        },
        {
            title: 'Capacidad de respuesta',
            detail: 'Nos adaptamos a las necesidades de nuestros clientes con soluciones rápidas y efectivas.'
        },
        {
            title: 'Excelencia',
            detail: 'Buscamos la perfección en cada detalle, desde la elección de los materiales hasta la instalación final.'
        },

    ];

    return (
        <section className='bg-primary'>
            <div className='mx-auto max-w-7xl py-16 px-4 flex flex-col justify-center'>
                <header className='pb-8 '>
                    <h2 className='pb-4 font-arapey text-3xl md:text-5xl text-secondary'>Sobre Nosotros</h2>
                    <p className=' font-assistant text-lg lg:text-xl text-gray'>En VMS Cortinados, nos especializamos en la creación de cortinas de diseño y comerciales de alta calidad, pensadas para transformar los espacios de nuestros clientes más exigentes. Con más de 30 años de experiencia en el sector, nos enorgullece ofrecer no solo productos de excelencia, sino también un servicio personalizado que refleja nuestra dedicación por satisfacer las necesidades específicas de cada cliente.</p>
                </header>
                <div className='pb-8'>
                    <div className='flex space-x-2 items-center pb-4'>
                     
                        <h4 className='text-2xl md:text-3xl text-secondary font-arapey'>Nuestra Misión</h4>
                    </div>
                    <p className="text-gray text-left font-assistant text-lg md:text-xl">Proveemos soluciones de cortinados que combinan diseño, funcionalidad y calidad superior. A través de nuestro servicio, buscamos crear ambientes de confort y estilo, asegurando una experiencia gratificante en cada proyecto.

                    </p>
                </div>

                <div className='pb-8'>
                    <div className='flex space-x-2 items-center pb-4'>
                     
                        <h4 className='text-2xl md:text-3xl text-secondary font-arapey'>Nuestra Visión</h4>
                    </div>
                    <p className="text-gray text-left font-assistant text-lg md:text-xl">Aspiramos a consolidarnos como líderes en el mercado local, con el objetivo de expandirnos regional y nacionalmente en los próximos años. Nuestro compromiso con la innovación y la excelencia nos impulsa a mejorar constantemente.
                    </p>
                </div>

                <div className="grid  gap-6 grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-3">
                    {OurValues.map((value, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center p-4 rounded-md  max-w-sm h-[180px] border-2 border-secondary hover:shadow-md hover:shadow-secondary transition-all ease-linear duration-300 `}

                        >
                            <div className="flex items-center mb-4 ">
                                <h6 className="text-2xl md:text-3xl text-secondary font-arapey">{value.title}</h6>
                            </div>
                            <p className="text-gray text-center font-assistant text-lg md:text-xl">{value.detail}</p>
                        </div>
                    ))}
                </div>
                <div className='py-8'>
                    <div className='flex space-x-2 items-center pb-4'>
                        <h4 className='text-2xl md:text-3xl text-secondary font-arapey'>Nuestro Compromiso</h4>
                    </div>
                    <p className="text-gray text-left font-assistant text-lg md:text-xl pb-2">Nos dirigimos a clientes que valoran la calidad y el diseño, sin comprometer el confort. Atendemos tanto a consumidores particulares como a profesionales y empresas que buscan enriquecer sus espacios.
                    </p>
                    <p className="text-gray text-left font-assistant text-lg md:text-xl"> Nuestro enfoque en entender las expectativas de nuestros clientes nos ha permitido alcanzar un alto nivel de satisfacción, con un 93% de aceptación de nuestras propuestas, y una sólida reputación basada en recomendaciones.
                    </p>
                </div>

                <div className="text-center">
                    <Link href={'https://walink.co/82c00b'}>
                        <button className="rounded-full px-6 py-2 text-lg font-assistant bg-secondary text-primary font-semibold border-secondary border-2 hover:bg-transparent hover:text-secondary ease-in duration-300">Contactar ahora</button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default AboutUs