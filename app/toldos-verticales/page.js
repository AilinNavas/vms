import Faqs from "../ui/home/Faqs";
import Navbar from "../ui/home/general/Navbar";
import Benefits from "../ui/products/Benefits";
import Gallery from "../ui/products/Gallery";
import InfoTop from "../ui/home/general/InfoTop";
import Values from "../ui/products/Values";
import galleryData from "../ui/data/galleryData";
import benefitsData from "../ui/data/benefitsData";
import InfoBottom from "../ui/home/general/InfoBottom";
import HeroProducts from "../ui/products/HeroProducts";
import faqsProducts from "../ui/data/faqsProducts";
import heroProducts from "../ui/data/heroProducts";
import check from '@/public/check.svg'
import NavbarMobile from "../ui/home/general/NavbarMobile";
import Whatsapp from "../ui/home/general/Whatsapp";
import Footer from "../ui/home/general/Footer";
import ContactForm from "../ui/home/general/ContactForm";


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
      <InfoTop faqsHref={'#faqs-toldos'} />
      <Navbar />
      <NavbarMobile />
      <Whatsapp />
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
      <InfoBottom />



    </main>
  );
}
