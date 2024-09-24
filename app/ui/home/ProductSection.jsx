import ProductCard from "./ProductCard";
import tradicionalRiel from '@/public/cortinas/tradicionalRiel.png'
import tradicionalBarral from '@/public/cortinas/tradicionalBarral.png'
import roller from '@/public/cortinas/roller.png'
import bandas from '@/public/cortinas/bandas.png'
import panel from '@/public/cortinas/panelo.png'
import toldos from '@/public/cortinas/toldos.png'


const products = [
  {
    title: 'Tradicional con riel',
    description:
      'Nuestros diseños ofrecen un deslizamiento suave y silencioso, combinando funcionalidad y estilo para cualquier espacio. Personaliza con tejidos y acabados únicos.',
    imageUrl: tradicionalRiel, // Ruta de la imagen optimizada
    url: '/tradicional-con-riel'
  },
  {
    title: 'Tradicional con barral',
    description:
      'Diseñadas para combinar estilo y durabilidad, ofrecen una solución estética y práctica. Elige entre una variedad de acabados y texturas para realzar tu decoración.',
    imageUrl: tradicionalBarral,
     url: '/tradicional-con-barral'
  },
  {
    title: 'Roller',
    description:
      'Diseñadas para combinar estilo y durabilidad, ofrecen una solución estética y práctica. Elige entre una variedad de acabados y texturas para realzar tu decoración.',
    imageUrl: roller,
    url: '/roller'
  },
  {
    title: 'Bandas Verticales',
    description:
      'Diseñadas para combinar estilo y durabilidad, ofrecen una solución estética y práctica. Elige entre una variedad de acabados y texturas para realzar tu decoración.',
    imageUrl: bandas,
    url: '/bandas-verticales'
  },
  {
    title: 'Toldos Verticales',
    description:
      'Diseñadas para combinar estilo y durabilidad, ofrecen una solución estética y práctica. Elige entre una variedad de acabados y texturas para realzar tu decoración.',
    imageUrl: toldos,
    url: '/toldos-verticales'
  },
  {
    title: 'Paneles Orientales',
    description:
      'Diseñadas para combinar estilo y durabilidad, ofrecen una solución estética y práctica. Elige entre una variedad de acabados y texturas para realzar tu decoración.',
    imageUrl: panel,
    url: '/paneles-orientales'
  },
  
  // Añade más productos según sea necesario
];

const ProductSection = () => {
  return (
    <section className='bg-primary'>
       <div className='mx-auto max-w-7xl py-20 px-4 flex flex-col justify-center'>
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
