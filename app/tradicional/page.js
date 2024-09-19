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

export default function Home() {
  const { title, description, images } = galleryData.tradicional;
  return (
    <main className="">
      <InfoTop />
      <Banner />
      <HeroProducts />
      <SliderTrust />
      <Values />
      <Benefits benefits={benefitsData.tradicional}/>
      <SliderTrust />
      <Values />
  
      <Gallery title={title} description={description} images={images} />
      <Faqs title="Preguntas Frecuentes "
        description="Aquí tienes algunas preguntas comunes sobre nuestros cortinados tradicionales."
        items={FaqsTradicional} />
            <WhatsappForm />
      <InfoBottom />



    </main>
  );
}
