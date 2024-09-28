import ProductCard from "./ProductCard";
import tradicionalRiel from '@/public/cortinas/tradicionalRiel.png'
import tradicionalBarral from '@/public/cortinas/tradicionalBarral.png'
import roller from '@/public/cortinas/roller.png'
import bandas from '@/public/cortinas/bandas.png'
import panel from '@/public/cortinas/panelo.png'
import toldos from '@/public/cortinas/toldos.png'


const products = [
  {
    title: 'Tradicional con Riel',
    description:
      'Diseñadas para deslizarse con suavidad y perfección, la sofisticación se une a la funcionalidad en un sistema que redefine el lujo en cada detalle.',
    imageUrl: tradicionalRiel, // Ruta de la imagen optimizada
    url: '/tradicional-con-riel'
  },
  {
    title: 'Tradicional con Barral',
    description:
      'La combinación perfecta de diseño clásico y materiales de alta calidad, ideal para quienes aprecian la belleza en su máxima expresión.',
    imageUrl: tradicionalBarral,
     url: '/tradicional-con-barral'
  },
  {
    title: 'Roller',
    description:
      'Simplicidad y modernidad, una solución minimalista para aquellos que buscan un estilo contemporáneo sin comprometer la sofisticación.',
      imageUrl: roller,
    url: '/roller'
  },
  {
    title: 'Bandas Verticales',
    description:
      'Una opción versátil que aporta dinamismo y funcionalidad avanzada, creando un ambiente a la altura de tus expectativas.',
    imageUrl: bandas,
    url: '/bandas-verticales'
  },
  {
    title: 'Toldos Verticales',
    description:
      'Protege y embellece tus exteriores con nuestros toldos verticales, creados para ofrecer privacidad y estilo en armonía con la arquitectura de tu hogar.',
    imageUrl: toldos,
    url: '/toldos-verticales'
  },
];

const ProductSection = () => {
  return (
    <section className='bg-primary'>
       <div id="nuestros-cortinados" className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
         <header className='pb-8'>
           <h2 className='text-secondary font-arapey text-3xl md:text-5xl'>Nuestros Cortinados</h2>
         </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            url={product.url}
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default ProductSection;
