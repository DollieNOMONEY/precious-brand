import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductItem {
    id: number;
    name: string;
    price: string;
    imageSrc: string;
}

const productItems: ProductItem[] = [
    {
        id: 1,
        name: "Another Clothing",
        price: "USD10.99",
        imageSrc: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
    },
    {
        id: 2,
        name: "Another Clothing",
        price: "USD10.99",
        imageSrc: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
    },
    {
        id: 3,
        name: "Another Clothing",
        price: "USD10.99",
        imageSrc: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
    }
];

export default function ProductPairsWellWith() {
    return (
        <div className='flex flex-col gap-3 w-full overflow-auto mb-8'>
            <h3 className="text-gray-700 mb-2 font-[outfit] text-sm tracking-widest uppercase">Pairs well with</h3>
            
            {productItems.map((item) => (
                <div key={item.id} className='flex gap-7 relative group'>
                    <div className='relative overflow-hidden w-1/4 aspect-3/4'>
                        <Link 
                            href={`/products/test`} 
                            className='absolute top-0 h-full w-full z-20 hover:cursor-pointer'
                            aria-label={`View ${item.name}`}
                        >
                            <Image
                                className='w-full h-full object-cover brightness-95 transform scale-100 group-hover:scale-105 transition'
                                src={item.imageSrc}
                                alt={item.name}
                                fill
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href={`/products/test`} aria-label={`View ${item.name}`}>
                            <h4 className="text-gray-700 mt-3 mb-1 font-[outfit] text-xs tracking-wider uppercase group-hover:underline">{item.name}</h4>
                        </Link>
                        <p className="text-gray-500 font-[outfit] text-xs tracking-wider uppercase mb-2">{item.price}</p>
                        <p className="font-[outfit] text-gray-500 text-xs tracking-widest uppercase">Add To Cart</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
