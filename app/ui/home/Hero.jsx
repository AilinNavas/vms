import Image from "next/image";
import hero2 from '@/public/hero/3.png'
import hero1 from '@/public/hero/mobile.png'
import Link from "next/link";
const Hero = () => {
    return (

        <div className='relative py-16 md:py-40'>
            <div className="px-4 max-w-7xl mx-auto space-y-4">
                <h1 className="text-5xl md:text-7xl max-w-3xl font-arapey text-primary">Diseños Exclusivos, Espacios Inolvidables</h1>
                <span className="font-assistant text-primary text-xl md:text-3xl block">Somos especialistas para aquellos que buscan </span>
                <span className="font-assistant text-primary text-xl md:text-3xl">diferenciación y calidad superior</span>
                  </div>
            <div className="px-4 max-w-7xl flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 mx-auto mt-4">
            <Link href={'https://walink.co/82c00b'}><button className="rounded-full px-6 py-2 bg-primary border-2 border-primary text-secondary font-assistant text-lg font-semibold z-0 hover:bg-transparent hover:text-primary ease-in duration-300">Cotizar ahora</button></Link>
              <Link href='#nuestros-cortinados' ><button className="rounded-full px-6 py-2 border-2 border-primary text-primary font-assistant text-lg font-bold hover:bg-secondary hover:text-primary hover:border-secondary ease-in duration-300">Ver proyectos</button></Link>
           
            </div>


            <Image src={hero1} alt='Image tech' quality={100} priority className='w-full block lg:hidden absolute top-0 -z-10' />
            <Image src={hero2} alt='Image tech' quality={100} priority className='w-full hidden lg:block absolute top-0 -z-10' />

        </div>
 
    )
}

export default Hero