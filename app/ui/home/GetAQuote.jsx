import Image from 'next/image'
import get from '@/public/banner/2.png'
import getMobile from '@/public/banner/2mobile.png'

import React from 'react'

const GetAQuote = () => {
    return (
        <div className='relative py-40 md:py-60'>
            <div className="px-4 max-w-7xl mx-auto space-y-4">
                <h4 className="text-5xl md:text-7xl max-w-xl font-arapey text-primary px-4 backdrop-blur-xs bg-white/10">A un sólo paso de sentirte mejor</h4>

            </div>
            <div className="px-4 max-w-7xl flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2 mx-auto border-2 border-red-600 mt-4">
                <button className="rounded-full px-6 py-2 bg-primary text-secondary font-assistant text-lg font-semibold z-0">Cotizar ahora</button>

            </div>

            <Image src={getMobile} alt='Image tech' quality={100} priority className='w-full block lg:hidden absolute top-0 -z-10 ' />
            <Image src={get} alt='Image tech' quality={100} priority className='w-full absolute hidden lg:block top-0 -z-10' />

        </div>
    )
}

export default GetAQuote