
import Image from 'next/image';
import telas from '@/public/porque/telas.jpg'
import medida from '@/public/porque/medida.png'
import limpieza from '@/public/porque/limpieza.png'

const features = [
  {
    title: 'Exclusividad en telas',
    description:
      'Trabajamos con una amplia variedad de telas de calidad premium, muchas de ellas importadas y exclusivas de nuestra empresa.',
    imageUrl: telas, 
  },
  {
    title: 'Proyectos a medida',
    description: 'La personalización es nuestro estándar, no la excepción.',
    imageUrl: medida,
  },
  {
    title: 'Servicio de limpieza',
    description:
      'Nos encargamos de limpiar cortinas roller, sillones, y alfombras, asegurando que cada elemento luzca como nuevo.',
    imageUrl: limpieza,
  },
];

const WhyChooseUs = () => {
  return (
    <section className='bg-primary text-secondary'>
      <div  id='servicios' className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
        <h2 className="text-secondary font-arapey text-3xl md:text-5xl mb-6">¿Por qué elegirnos?</h2>
        <p className="mb-10 font-assistant text-lg lg:text-xl">
          En VMS, nos especializamos en ofrecer soluciones únicas y
          personalizadas para cada cliente. Con una selección exclusiva de
          telas, proyectos diseñados a medida, y un servicio de limpieza
          especializado, transformamos tus espacios en ambientes elegantes y
          acogedores. Descubre cómo nuestros servicios pueden elevar el confort
          y la estética de tu hogar, oficina o empresa.
        </p>
        <div  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 border-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group overflow-hidden h-[500px] "
            >
              <Image
                src={feature.imageUrl}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
                quality={75}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-1 top-32 left-14 w-60 h-64 md:top-40 md:left-4 lg:left-10 bg-primary bg-opacity-80 md:w-48 md:h-56 lg:h-40 lg:w-80 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300 group-hover:bg-opacity-100">
                <h3 className="text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
