import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Season9_Mockup5 from "@/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"

export default function ProductPairsWellWith() {
  return (
    <div className='flex flex-col gap-3 w-full overflow-auto mb-8'>
        <h1 className="mb-2 font-[outfit] text-sm tracking-widest uppercase">Pairs well with</h1>
        <div className='flex gap-7 relative'>
            <Link href={`/products/test`} 
            className='opacity-0 absolute top-0 h-full w-full z-20'
            >
            Link to Product
            </Link>
            <Image 
            className='w-1/3 object-cover brightness-95'
            src={Season9_Mockup5 || ''} 
            alt={'Clothing Image'}
            />
            <div>
            <h1 className="mt-3 font-[outfit] text-sm tracking-wider uppercase">Another Clothing</h1>
            <h1 className="font-[outfit] text-sm tracking-wider uppercase">$10</h1>
            <button className="font-[outfit] text-sm tracking-widest uppercase">Add To Cart</button>
            </div>
        </div>
        <div className='flex gap-7 relative'>
            <Link href={`/products/test`} 
            className='opacity-0 absolute top-0 h-full w-full z-20'
            >
            Link to Product
            </Link>
            <Image 
            className='w-1/3 object-cover brightness-95'
            src={Season9_Mockup5 || ''} 
            alt={'Clothing Image'}
            />
            <div>
            <h1 className="mt-3 font-[outfit] text-sm tracking-wider uppercase">Another Clothing</h1>
            <h1 className="font-[outfit] text-sm tracking-wider uppercase">$10</h1>
            <button className="font-[outfit] text-sm tracking-widest uppercase">Add To Cart</button>
            </div>
        </div>
        <div className='flex gap-7 mb-5 relative'>
            <Link href={`/products/test`} 
            className='opacity-0 absolute top-0 h-full w-full z-20'
            >
            Link to Product
            </Link>
            <Image 
            className='w-1/3 object-cover brightness-95'
            src={Season9_Mockup5 || ''} 
            alt={"Clothing Image"}
            />
            <div>
            <h1 className="mt-3 font-[outfit] text-sm tracking-wider uppercase">Another Clothing</h1>
            <h1 className="font-[outfit] text-sm tracking-wider uppercase">$10</h1>
            <button className="font-[outfit] text-sm tracking-widest uppercase">Add To Cart</button>
            </div>
        </div>
        
    </div>
  )
}
