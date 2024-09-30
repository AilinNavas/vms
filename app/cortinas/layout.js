import Navbar from "../ui/home/general/Navbar";
import NavbarMobile from "../ui/home/general/NavbarMobile";
import InfoBottom from "../ui/home/general/InfoBottom";
import Whatsapp from "../ui/home/general/Whatsapp";


export default function RootLayout({ children }) {
  return (
   <>
   <Navbar />
   <NavbarMobile />
   <Whatsapp />
   {children}
   <InfoBottom />

   </>
  );
}