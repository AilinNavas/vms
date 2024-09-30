
'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/icons/logo2.svg';

const Navbar = () => {
  return (
    <header className=" hidden lg:block bg-primary text-secondary font-arapey w-full ease-in duration-500 top-10 left-0 z-10">
      <nav className="max-w-7xl mx-auto h-32 flex justify-between">
        <div className="z-20 h-28 w-2/12 mr-12 mt-1.5">
          <Link href={'/'}>
            <Image src={logo} className="h-full w-full" />
          </Link>
        </div>
        {/* larger screen navigation */}
        <div className="flex justify-end items-center w-10/12">
          <ul className="hidden lg:flex text-[20px] text-secondary space-x-12 ">
            <Link href={'/sobre-nosotros'}><li className="hover:text-gray ease-in-out duration-300 ">Sobre nosotros</li></Link>
            <Link href={'/tradicional-con-riel'}><li className="hover:text-gray ease-in-out duration-300 max-w-32 ">Tradicional con Riel</li></Link>
            <Link href={'/tradicional-con-barral'}><li className="hover:text-gray ease-in-out duration-300 max-w-32 ">Tradicional con Barral</li></Link>
            <Link href={'/roller'}><li className="hover:text-gray ease-in-out duration-300 ">Cortina Roller</li></Link>
            <Link href={'/bandas-verticales'}><li className="hover:text-gray ease-in-out duration-300 ">Bandas Verticales</li></Link>
            <Link href={'/toldos-verticales'}><li className="hover:text-gray ease-in-out duration-300 ">Toldos Verticales</li></Link>
          </ul>
          <div className="hidden lg:flex ml-12">
            <a href={'https://walink.co/7712bc'} target='_blank'  rel="noopener noreferrer">
              <button className="rounded-full px-6 py-2 text-lg font-assistant bg-secondary text-primary font-semibold border-secondary border-2 hover:bg-transparent hover:text-secondary ease-in duration-300">Contactar</button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
