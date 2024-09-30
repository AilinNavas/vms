import Faqs from "@/app/ui/home/Faqs";
import Benefits from "@/app/ui/products/Benefits";
import Gallery from "@/app/ui/products/Gallery";
import InfoTop from "@/app/ui/home/general/InfoTop";
import Values from "@/app/ui/products/Values";
import galleryData from "@/app/ui/data/galleryData";
import benefitsData from "@/app/ui/data/benefitsData";
import faqsProducts from "@/app/ui/data/faqsProducts";
import HeroProducts from "@/app/ui/products/HeroProducts";
import heroProducts from "@/app/ui/data/heroProducts";
import Footer from "@/app/ui/home/general/Footer";
import ContactForm from "@/app/ui/home/general/ContactForm";


export default function Roller() {

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
  const { title, description, images } = galleryData.roller;
  return (
    <main className="">
      <InfoTop faqsHref={'#faqs-roller'} />
      <HeroProducts productData={heroProducts.roller} />
      <Values values={oneValues} />
      <Benefits benefits={benefitsData.roller} />
      <Values values={twoValues} />
      <ContactForm />
      <Faqs title="Preguntas frecuentes"
        description=""
        items={faqsProducts.roller}
        id='faqs-roller' />
      <Gallery title={title} description={description} images={images} />
      <Footer faqsHref={'#faqs-roller'} serviceHref={'/'} />
     
    </main>
  );
}
