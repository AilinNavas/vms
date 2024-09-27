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
import faqsProducts from "../ui/data/faqsProducts";
import HeroProducts from "../ui/products/HeroProducts";
import heroProducts from "../ui/data/heroProducts";
import check from '@/public/check.svg'

export default function BandaVertical() {

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
  const { title, description, images } = galleryData.bandasVerticales;
  return (
    <main className="">
      <InfoTop />
      <Navbar />
      <HeroProducts productData={heroProducts.bandasVerticales} />
      <Values values={oneValues}/>
      <Benefits benefits={benefitsData.bandasVerticales} />
      <Values values={twoValues}/>
      <Gallery title={title} description={description} images={images} />
      <WhatsappForm />
      <Faqs title="Preguntas Frecuentes "
        description=""
        items={faqsProducts.bandasVerticales} />
      <InfoBottom />



    </main>
  );
}
