import ContactUs from "./ui/home/ContactUs";
import Faqs from "./ui/home/Faqs";
import Footer from "./ui/home/general/Footer";
import InfoBottom from "./ui/home/general/InfoBottom";
import InfoTop from "./ui/home/general/InfoTop";
import Navbar from "./ui/home/general/Navbar";
import Whatsapp from "./ui/home/general/Whatsapp";
import Hero from "./ui/home/Hero";
import OurProcess from "./ui/home/OurProcess";
import ProductSection from "./ui/home/ProductSection";
import WhyChooseUs from "./ui/home/WhyChooseUs";
import FaqsHome from "./ui/data/faqsHome";
import SliderTrust from "./ui/products/SliderTrust";
import NavbarMobile from "./ui/home/general/NavbarMobile";


export default function Home() {
  return (
    <main className="">
      <InfoTop faqsHref={'#faqs'} />
      <Navbar />
      <NavbarMobile />
      <Whatsapp />
      <Hero />
      <OurProcess />
      <ProductSection />
      <WhyChooseUs />
      <ContactUs />
      <SliderTrust />
      <Faqs title="Preguntas Frecuentes"
      description=""
      items={FaqsHome} id='faqs' />
      {/* <GetAQuote /> */}

      <Footer />
      <InfoBottom />
     
    </main>
  );
}
