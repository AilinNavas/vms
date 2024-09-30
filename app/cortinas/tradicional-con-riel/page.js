
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

export default function Tradicional() {
  const { title, description, images } = galleryData.tradicionalConRiel;

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
      
      <InfoTop faqsHref={'#faqs-con-riel'}/>
      <HeroProducts productData={heroProducts.tradicionalConRiel} />
      <Values values={oneValues}/>
      <Benefits benefits={benefitsData.tradicionalConRiel} />
      <Values values={twoValues} />
      <ContactForm />
      <Faqs title="Preguntas Frecuentes"
        description=""
        items={faqsProducts.tradicionalConRiel}
         id='faqs-con-riel' />
      <Gallery title={title} description={description} images={images} />
      <Footer faqsHref={'#faqs-con-riel'} serviceHref={'/'}/>
    </main>
  );
}
