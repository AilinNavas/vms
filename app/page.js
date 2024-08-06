import ContactUs from "./ui/home/ContactUs";
import Faqs from "./ui/home/Faqs";
import Hero from "./ui/home/Hero";
import OurProcess from "./ui/home/OurProcess";
import OurProducts from "./ui/home/OurProducts";
import WhyChooseUs from "./ui/home/WhyChooseUs";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <OurProcess />
      <OurProducts />
      <WhyChooseUs />
      <ContactUs />
      <Faqs />
     
    </main>
  );
}
