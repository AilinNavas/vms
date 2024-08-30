"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import menu from '@/public/menu.svg'
import close from '@/public/close.svg'
import logo from '@/public/logo2.svg'


const Navbar = () => {

  const [menuIcon, setIcon] = useState(false)

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  }

  return (
    <header className="bg-primary text-secondary font-arapey w-full ease-in duration-500 top-10 left-0 z-10">
      <nav className=" max-w-7xl px-4 mx-auto h-32 flex justify-between items-center ">

        <div className="z-20 h-28 w-auto mr-10">
          <Link href={'/'} onClick={handleSmallerScreenNavigation}>
            <Image src={logo} className="h-full w-full" />
          </Link>
        </div>

        {/* larger screen navigation */}

<div className="flex justify-end items-center">
        <ul className="hidden md:flex text-[20px] text-secondary space-x-6">

          <li className=" hover:text-gray ease-in-out duration-300">
            <Link href={'/'}>Sobre nosotros
            </Link>
          </li>

          <li className=" hover:text-gray ease-in-out duration-300">
            <Link href={'/'}>Cortina Tradicional</Link>
          </li>

          <li className=" hover:text-gray ease-in-out duration-300">
            <Link href={'/'}>Cortina Roller</Link>
          </li>

          <li className=" hover:text-gray ease-in-out duration-300">
            <Link href={'/'}>Bandas Verticales</Link>
          </li>

          <li className=" hover:text-gray ease-in-out duration-300">
            <Link href={'/'}>Paneles Orientales</Link>
          </li>

          <li className=" hover:text-gray ease-in-out duration-300">
            <Link href={'/'}>Toldos Verticales</Link>
          </li>
        </ul>

        <div className="hidden md:flex">
          <Link href={'/'}>
            <button className="rounded-full px-6 py-2 text-lg font-assistant bg-secondary text-primary  font-semibold border-secondary border-2 hover:bg-transparent hover:text-secondary ease-in duration-300">Contactar</button>
          </Link>
        </div>
        </div>

        {/* smaller screens - navigation icons */}
        <div onClick={handleSmallerScreenNavigation} className="flex md:hidden">

          {menuIcon ?
            (<Image src={close} className="w-8 h-8" />)
            :
            (<Image src={menu} className="w-12 h-12" />)}

        </div>

        
        {/* smaller screens */}
        <div className={
          menuIcon ? 'md:hidden absolute top-32 right-0 bottom-0 left-0 flex justify-start items-start w-full h-screen z-10 bg-primary text-secondary ease-in-out duration-300'
          :
          'md:hidden  absolute top-32 right-0 left-[100%] flex justify-center items-center w-full h-screen text-center bg-primary z-10 text-secondary ease-in-out duration-300'
        }>

          <div className="w-full text-center text-2xl font-arapey">
            <ul>
              <li onClick={handleSmallerScreenNavigation} className="pb-5 pt-10">
                <Link href={'/'}>Sobre nosotros</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className="py-5">
                <Link href={'/'}>Cortina Tradicional</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className="py-5">
                <Link href={'/'}>Cortina Roller</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className="py-5">
                <Link href={'/'}>Bandas Verticales</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className="py-5">
                <Link href={'/'}>Toldos Verticales</Link>
              </li>
              <li onClick={handleSmallerScreenNavigation} className="py-5">
                <Link href={'/'}>Paneles Ortientales</Link>
              </li>
            </ul>
            <div className="py-5">
          <button className="rounded-full font-assistant px-6 py-2 bg-secondary text-primary text-lg font-semibold">Contactar</button>
          </div>
          </div>

        </div>

      </nav>
    </header>
  )
}

export default Navbar