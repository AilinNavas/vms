import { Arapey, Assistant , Nunito} from "next/font/google";
import "./globals.css";


const arapey = Arapey({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-arapey',
});

const assistant = Assistant({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-assistant',
});
const nunito = Nunito({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata = {
  title: "VMS Cortinados & Servicios",
  description: "Empresa con 30 años de experiencia que diseña y vende cortinados calidad premium ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${arapey.variable} ${assistant.variable}`}>{children}</body>
    </html>
  );
}
