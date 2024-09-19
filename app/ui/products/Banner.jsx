import Image from "next/image"
import Link from "next/link"
import logo from '@/public/logo2.svg'

const Banner = () => {
  return (
    <div className='bg-primary'>
       <div className='mx-auto max-w-7xl h-32 px-4 flex flex-col justify-center border-2 border-yellow-400'>
        <div className="flex flex-col space-y-4 md:space-y-0 items-center md:flex-row md:justify-between">
            <div className="h-28 w-1/6 flex items-start">
              <Link href={'/'}>
                <Image src={logo} alt="logo-vms-cortinados" className="h-28"/>
                </Link>
            </div>
            <h4 className="font-arapey text-secondary italic text-3xl md:text-4xl lg:text-5xl text-center border-2 justify-self-end">Volvemos tus espacion un lugar soñado ...</h4>
        </div>
        
       </div>
     </div>
  )
}

export default Banner