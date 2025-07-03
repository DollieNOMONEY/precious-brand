import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Season9_Mockup5 from "@/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"

export default function ProductYouMayAlsoLike() {
  return (
    <>
        <h1 className="mb-5 font-[outfit] text-sm tracking-widest uppercase">You may also like</h1>
            <div className='grid grid-cols-2 gap-3 w-full overflow-hidden mb-5'>
                <div className='relative'>
                    <Link href={`/products/test`} 
                    className='opacity-0 absolute top-0 h-full w-full z-20'
                    >
                    Link to Product
                    </Link>
                    <Image 
                    className='object-cover brightness-95 z-10'
                    src={Season9_Mockup5 || ''} 
                    alt={'Clothing Image'}
                    />
                    <div className='ml-3'>
                    <h1 className="mt-3 font-[outfit] text-xs tracking-wider uppercase">Another Clothing</h1>
                    <h1 className="font-[outfit] text-xs tracking-wider uppercase mb-2">$10</h1>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={`/products/test`} 
                    className='opacity-0 absolute top-0 h-full w-full z-20'
                    >
                    Link to Product
                    </Link>
                    <Image 
                    className='object-cover brightness-95 z-10'
                    src={Season9_Mockup5 || ''} 
                    alt={'Clothing Image'}
                    />
                    <div className='ml-3'>
                    <h1 className="mt-3 font-[outfit] text-xs tracking-wider uppercase">Another Clothing</h1>
                    <h1 className="font-[outfit] text-xs tracking-wider uppercase mb-2">$10</h1>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={`/products/test`} 
                    className='opacity-0 absolute top-0 h-full w-full z-20'
                    >
                    Link to Product
                    </Link>
                    <Image 
                    className='object-cover brightness-95 z-10'
                    src={Season9_Mockup5 || ''} 
                    alt={'Clothing Image'}
                    />
                    <div className='ml-3'>
                    <h1 className="mt-3 font-[outfit] text-xs tracking-wider uppercase">Another Clothing</h1>
                    <h1 className="font-[outfit] text-xs tracking-wider uppercase mb-2">$10</h1>
                    </div>
                </div>
                <div className='relative'>
                    <Link href={`/products/test`} 
                    className='opacity-0 absolute top-0 h-full w-full z-20'
                    >
                    Link to Product
                    </Link>
                    <Image 
                    className='object-cover brightness-95 z-10'
                    src={Season9_Mockup5 || ''} 
                    alt={'Clothing Image'}
                    />
                    <div className='ml-3'>
                    <h1 className="mt-3 font-[outfit] text-xs tracking-wider uppercase">Another Clothing</h1>
                    <h1 className="font-[outfit] text-xs tracking-wider uppercase mb-2">$10</h1>
                    </div>
                </div>
            </div>
    </>
  )
}
