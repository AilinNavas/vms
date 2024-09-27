import Image from "next/image"
import Link from "next/link"
import logo from '@/public/logo2.svg'
import phone from '@/public/icons/phone2.svg'
import email from '@/public/icons/email2.svg'
import ig from '@/public/icons/instagram.svg'
import ws from '@/public/icons/whatsapp.svg'

const Footer = () => {
    return (
        <footer className="bg-primary text-secondary py-8 ">
            <div className="max-w-7xl mx-auto px-4 ">
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    {/* Sección de Productos */}
                    <div className="flex-1 ">
                        <h3 className="font-arapey mb-2 text-xl lg:text-2xl">Nuestros productos</h3>
                        <hr className='border-t-2 border-secondary w-[75%] mt-2 mb-4' />
                        <ul className="space-y-2 font-assistant text-lg lg:text-xl">
                            <Link href={'/tradicional-con-riel'}><li className="mb-2 hover:text-gray ease-in-out duration-300">Cortina tradicional con riel</li></Link>
                            <Link href={'/tradicional-con-barral'}><li className="mb-2 hover:text-gray ease-in-out duration-300">Cortina tradicional con barral</li></Link>
                            <Link href={'/roller'}><li className="mb-2  hover:text-gray ease-in-out duration-300">Cortina roller</li></Link>
                            <Link href={'/bandas-verticales'}><li className="mb-2 hover:text-gray ease-in-out duration-300">Bandas verticales</li></Link>
                            <Link href={'/toldos-verticales'}><li className="mb-2 hover:text-gray ease-in-out duration-300">Toldos verticales</li></Link>
                        </ul>
                    </div>

                    {/* Sección Sobre Nosotros */}
                    <div className="flex-1 ">
                        <h3 className="font-arapey mb-2 text-xl lg:text-2xl">Sobre nosotros</h3>
                        <hr className='border-t-2 border-secondary w-[75%] mt-2 mb-4' />
                        <ul className="space-y-2 font-assistant text-lg lg:text-xl">
                            <li className=" hover:text-gray ease-in-out duration-300 cursor-pointer">Empresa</li>
                            <li className=" hover:text-gray ease-in-out duration-300 cursor-pointer">Servicios</li>
                            <li className=" hover:text-gray ease-in-out duration-300 cursor-pointer">Preguntas frecuentes</li>
                            <li className=" hover:text-gray ease-in-out duration-300 cursor-pointer">¿Necesitas ayuda?</li>
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div className="flex-1 ">
                        <h3 className="mb-2 font-arapey text-xl lg:text-2xl">Contactar</h3>
                        <hr className='border-t-2 border-secondary w-[75%] mt-2 mb-4' />
                        <ul className="space-y-2 font-assistant text-lg lg:text-xl">
                            <li className="flex items-center">

                                <Image src={phone} alt='icono-telefono' className="w-6 h-6 mr-1" />+549 351-158507607
                            </li>
                            <li className="flex items-center">
                                <Image src={email} alt='icono-email' className="w-5 h-5 mr-2" />
                                ventas@vmscortinados.com
                            </li>
                            <li className="flex items-center">
                                <Image src={ws} alt='icono-whatsapp' className="w-5 h-5 mr-2" />
                                +549 351-158507607
                            </li>
                            <a href="https://www.instagram.com/vmscortinadosyservicios/?hl=es" target='_blank'><li className="flex items-center mt-2">
                                <Image src={ig} alt='icono-instagram' className="w-5 h-5 mr-2" />
                                vmscortinados
                            </li></a>
                        </ul>
                    </div>
                </div>

                {/* Sección del Logo */}
              <Link href={'/'}>
                <div className="mt-8 md:mt-0 flex items-center justify-center">
                    <Image src={logo} className="w-60 " />
                </div>
                </Link>
            </div>

        </footer>
    )
}

export default Footer