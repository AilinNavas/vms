import Faqs from "@/app/ui/home/Faqs";
import Benefits from "@/app/ui/products/Benefits";
import Gallery from "@/app/ui/products/Gallery";
import InfoTop from "@/app/ui/home/general/InfoTop";
import Values from "@/app/ui/products/Values";
import galleryData from "@/app/ui/data/galleryData";
import benefitsData from "@/app/ui/data/benefitsData";
import HeroProducts from "@/app/ui/products/HeroProducts";
import faqsProducts from "@/app/ui/data/faqsProducts";
import heroProducts from "@/app/ui/data/heroProducts";
import Footer from "@/app/ui/home/general/Footer";
import ContactForm from "@/app/ui/home/general/ContactForm";


export default function ToldoVertical() {

  const { title, description, images } = galleryData.toldosVerticales;

  const oneValues = [
    { text: 'Soluciones a medida' },
    { text: 'Materiales premium' },
    { text: 'Instalación sin inconvenientes' }
  ];
  const twoValues = [
    { text: 'Asesoramiento a domicilio' },
    { text: 'Satisfacción garantizada' },
    { text: '30 Años De Trayectoria' }
  ];
  return (
    <main className="">
      <InfoTop faqsHref={'#faqs-toldos'} />
      <HeroProducts productData={heroProducts.toldosVerticales} />
      <Values values={oneValues} />
      <Benefits benefits={benefitsData.toldosVerticales} />
      <Values values={twoValues} />
      <ContactForm />
      <Faqs title="Preguntas frecuentes"
        description=""
        items={faqsProducts.toldosVerticales}
        id='faqs-toldos' />
      <Gallery title={title} description={description} images={images} />
      <Footer faqsHref={'#faqs-toldos'} serviceHref={'/'}/>
    </main>
  );
}
