import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductPreview() {
  return (
   <div key={1} className='relative group overflow-hidden'>
        <Link 
            href={`/products/test`} 
            className='block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md'
        >
            <div className="relative overflow-hidden w-full aspect-[5/5]">
                <Image
                    className='object-cover brightness-95 z-10 w-full h-full group-hover:scale-105 transition'
                    src="/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
                    alt="Another Clothing"
                    width={1920}
                    height={1920}
                />
            </div>
            <div className='ml-3'>
                <h3 className="text-gray-700 mt-3 mb-1 font-[outfit] text-xs tracking-wider uppercase group-hover:underline">Another Clothing</h3>
                <p className="text-gray-700 font-[outfit] text-xs tracking-wider uppercase mb-2">USD10.99</p>
            </div>
        </Link>
    </div>
  )
}
