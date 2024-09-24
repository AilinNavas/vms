import Faqs from "../ui/home/Faqs";
import Banner from "../ui/products/Banner";
import Benefits from "../ui/products/Benefits";
import Gallery from "../ui/products/Gallery";
import InfoTop from "../ui/products/InfoTop";
import SliderTrust from "../ui/products/SliderTrust";
import Values from "../ui/products/Values";
import WhatsappForm from "../ui/products/WhatsappForm";
import galleryData from "../ui/data/galleryData";
import benefitsData from "../ui/data/benefitsData";
import InfoBottom from "../ui/home/general/InfoBottom";
import HeroProducts from "../ui/products/HeroProducts";
import faqsProducts from "../ui/data/faqsProducts";


export default function ToldoVertical() {

  const { title, description, images } = galleryData.toldosVerticales;
  return (
    <main className="">
      <InfoTop />
      <Banner />
      <HeroProducts />
      <Values />
      <SliderTrust />
      <Benefits benefits={benefitsData.toldosVerticales} />
      <Values />
      <Gallery title={title} description={description} images={images} />
      <WhatsappForm />
      <SliderTrust />
      <Faqs title="Preguntas frecuentes sobre nuestros toldos verticales"
        description=""
        items={faqsProducts.toldosVerticales} />

      <InfoBottom />



    </main>
  );
}
