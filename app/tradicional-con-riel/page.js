
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
import Footer from "../ui/home/general/Footer";
import check from '@/public/check.svg'
import NavbarMobile from "../ui/home/general/NavbarMobile";
import Whatsapp from "../ui/home/general/Whatsapp";

export default function Tradicional() {
  const { title, description, images } = galleryData.tradicionalConRiel;

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
      
      <InfoTop faqsHref={'#faqs-con-riel'}/>
      <Navbar />
      <NavbarMobile />
      <Whatsapp />
      <HeroProducts productData={heroProducts.tradicionalConRiel} />
      <Values values={oneValues}/>
      <Benefits benefits={benefitsData.tradicionalConRiel} />
      <Gallery title={title} description={description} images={images} />
      <WhatsappForm />
      <Values values={twoValues} />
      <Faqs title="Preguntas Frecuentes"
        description=""
        items={faqsProducts.tradicionalConRiel}
         id='faqs-con-riel' />
      <Footer />
      <InfoBottom />



    </main>
  );
}
