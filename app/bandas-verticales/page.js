import Faqs from "../ui/home/Faqs";
import Banner from "../ui/products/Banner";
import Benefits from "../ui/products/Benefits";
import Gallery from "../ui/products/Gallery";
import InfoTop from "../ui/products/InfoTop";
// import SliderTrust from "../ui/products/SliderTrust";
import Values from "../ui/products/Values";
import WhatsappForm from "../ui/products/WhatsappForm";
import galleryData from "../ui/data/galleryData";
import benefitsData from "../ui/data/benefitsData";
import InfoBottom from "../ui/home/general/InfoBottom";
import faqsProducts from "../ui/data/faqsProducts";
import HeroProducts from "../ui/products/HeroProducts";
import heroProducts from "../ui/data/heroProducts";

export default function BandaVertical() {
  const { title, description, images } = galleryData.bandasVerticales;
  return (
    <main className="">
      <InfoTop />
      <Banner />
      <HeroProducts productData={heroProducts.bandasVerticales} />
      {/* <SliderTrust /> */}
      <Values />
      <Benefits benefits={benefitsData.bandasVerticales} />
      {/* <SliderTrust /> */}
      <Values />
      <Gallery title={title} description={description} images={images} />
      <WhatsappForm />
      <Faqs title="Preguntas Frecuentes "
        description=""
        items={faqsProducts.bandasVerticales} />
      <InfoBottom />



    </main>
  );
}
