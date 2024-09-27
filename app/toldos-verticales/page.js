import Faqs from "../ui/home/Faqs";
import Navbar from "../ui/home/general/Navbar";
import Benefits from "../ui/products/Benefits";
import Gallery from "../ui/products/Gallery";
import InfoTop from "../ui/home/general/InfoTop";
import Values from "../ui/products/Values";
import WhatsappForm from "../ui/products/WhatsappForm";
import galleryData from "../ui/data/galleryData";
import benefitsData from "../ui/data/benefitsData";
import InfoBottom from "../ui/home/general/InfoBottom";
import HeroProducts from "../ui/products/HeroProducts";
import faqsProducts from "../ui/data/faqsProducts";
import heroProducts from "../ui/data/heroProducts";
import check from '@/public/check.svg'


export default function ToldoVertical() {

  const { title, description, images } = galleryData.toldosVerticales;

  const oneValues = [
    { icon: check, text: 'Soluciones a medida' },
    { icon: check, text: 'Materiales premium' },
    { icon: check, text: 'Instalación sin inconvenientes' }
  ];
  const twoValues = [
    { icon: check, text: 'Asesoramiento a domicilio' },
    { icon: check, text: 'Satisfacción garantizada' },
    { icon: check, text: '30 Años De Trayectoria' }
  ];
  return (
    <main className="">
      <InfoTop />
      <Navbar />
      <HeroProducts productData={heroProducts.toldosVerticales} />
      <Values values={oneValues}/>
      <Benefits benefits={benefitsData.toldosVerticales} />
      <Values values={twoValues}/>
      <Gallery title={title} description={description} images={images} />
      <WhatsappForm />
      <Faqs title="Preguntas frecuentes"
        description=""
        items={faqsProducts.toldosVerticales} />
      <InfoBottom />



    </main>
  );
}
