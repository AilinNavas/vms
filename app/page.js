import ContactUs from "./ui/home/ContactUs";
import Faqs from "./ui/home/Faqs";
import Footer from "./ui/home/general/Footer";
import InfoBottom from "./ui/home/general/InfoBottom";
import InfoTop from "./ui/home/general/InfoTop";
import Navbar from "./ui/home/general/Navbar";
import GetAQuote from "./ui/home/GetAQuote";
import Hero from "./ui/home/Hero";
import OurProcess from "./ui/home/OurProcess";
import ProductSection from "./ui/home/ProductSection";
import WhyChooseUs from "./ui/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <InfoTop />
      <Navbar />
      <Hero />
      <OurProcess />
      <ProductSection />
      <WhyChooseUs />
      <ContactUs />
      <Faqs />
      <GetAQuote />
      <Footer />
      <InfoBottom />
     
    </main>
  );
}
