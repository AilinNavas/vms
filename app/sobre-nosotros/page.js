

import Navbar from "../ui/home/general/Navbar";
import InfoTop from "../ui/home/general/InfoTop";
import InfoBottom from "../ui/home/general/InfoBottom";
import Footer from "../ui/home/general/Footer";
import NavbarMobile from "../ui/home/general/NavbarMobile";
import AboutUs from "../ui/company/AboutUs";
import Gallery from "../ui/products/Gallery";
import galleryData from "../ui/data/galleryData";
import Whatsapp from "../ui/home/general/Whatsapp";

export default function SobreNosotros() {
    const { title, description, images } = galleryData.sobreNosotros

  return (
    
    <main className="">
      
      <InfoTop faqsHref={'/'}/>
      <Navbar />
      <NavbarMobile />
      <Whatsapp />
      <AboutUs />
      <Gallery title={title} description={description} images={images}/>
      <Footer faqsHref={'/'} serviceHref={'/'}/>
      <InfoBottom />



    </main>
  );
}
