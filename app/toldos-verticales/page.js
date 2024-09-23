import Faqs from "../ui/home/Faqs";
import Banner from "../ui/products/Banner";
import Benefits from "../ui/products/Benefits";
import Gallery from "../ui/products/Gallery";
import HeroProducts from "../ui/products/HeroProducts";
import InfoTop from "../ui/products/InfoTop";
import SliderTrust from "../ui/products/SliderTrust";
import Values from "../ui/products/Values";
import WhatsappForm from "../ui/products/WhatsappForm";
import FaqsTradicional from "../ui/data/faqsTradicional";
import galleryData from "../ui/data/galleryData";
import benefitsData from "../ui/data/benefitsData";
import InfoBottom from "../ui/home/general/InfoBottom";
import Pueba from "../ui/products/Pueba";

import gasa1 from '@/public/tradicional/gasa1.png'
import gasa2 from '@/public/tradicional/gasa2.png'
import gasa3 from '@/public/tradicional/gasa3.png'
import voile1 from '@/public/tradicional/voile1.png'
import voile2 from '@/public/tradicional/voile2.png'
import voile3 from '@/public/tradicional/voile3.png'
import { SwipeCarousel } from "../ui/products/SwipeCarousel";

export default function ToldoVertical() {
  const product = {
    images: [
      gasa1,
      gasa2,
      gasa3,
      voile1,
      voile2,
      voile3
    ],
    title: 'Producto Premium',
    description: 'Este producto es de la más alta calidad, diseñado para satisfacer las necesidades de los clientes más exigentes.',
    cta: 'Compra Ahora',
  };

  const { title, description, images } = galleryData.toldosVerticales;
  return (
    <main className="">
      <InfoTop />
      <Banner />
      <Pueba />
    
     {/* <HeroProducts  images={product.images}
        title={product.title}
        description={product.description}
        cta={product.cta}/>  */}
        {/* <SwipeCarousel /> 
        <Pueba />
      {/* <SliderTrust /> */}
        <Values />
      <SliderTrust />
    
      <Benefits benefits={benefitsData.toldosVerticales} />
      {/* <SliderTrust /> */}
      <Values />
      <Gallery title={title} description={description} images={images} />
      <WhatsappForm />
      <Faqs title="Preguntas Frecuentes "
        description=""
        items={FaqsTradicional} />
      <InfoBottom />



    </main>
  );
}
