import Image from "next/image";
import hero from '@/public/hero.png'
import heroMobile from '@/public/hero-mobile.png'
const Hero = () => {
    return (

        <div className='relative py-16 md:py-40'>
            <div className="px-4 max-w-7xl mx-auto space-y-4 border-2 border-red-600">
                <h1 className="text-5xl md:text-7xl max-w-3xl font-arapey text-primary">Diseños Exclusivos, Espacios Inolvidables</h1>
                <span className="font-assistant text-primary text-xl md:text-3xl block">Somos especialistas para aquellos que buscan </span>
                <span className="font-assistant text-primary text-xl md:text-3xl">diferenciación y calidad superior</span>
                  </div>
            <div className="px-4 max-w-7xl flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 mx-auto border-2 border-red-600 mt-4">
              <button className="rounded-full px-6 py-2 bg-primary text-secondary font-assistant text-lg font-semibold z-0">Cotizar ahora</button>
              <button className="rounded-full px-6 py-2 border-2 border-primary text-primary font-assistant text-lg font-bold">Ver proyectos</button>
           
            </div>


            <Image src={heroMobile} alt='Image tech' quality={100} priority className='w-full block lg:hidden absolute top-0 -z-10' />
            <Image src={hero} alt='Image tech' quality={100} priority className='w-full hidden lg:block absolute top-0 -z-10' />

        </div>
 
    )
}

export default Hero