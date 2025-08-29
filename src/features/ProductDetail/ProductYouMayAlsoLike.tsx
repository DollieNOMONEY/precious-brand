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
    },
    {
        id: 4,
        name: "Another Clothing",
        price: "USD10.99",
        imageSrc: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
    }
];

export default function ProductYouMayAlsoLike() {
    return (
        <>
            <h2 className="text-gray-700 mb-5 font-[outfit] text-sm tracking-widest uppercase">You may also like</h2>
            <div className='grid grid-cols-2 xl:grid-cols-4 gap-1 lg:gap-6 w-full overflow-hidden mb-5'>
                {productItems.map((item) => (
                    <div key={item.id} className='relative group overflow-hidden'>
                        <Link 
                            href={`/products/test`} 
                            className='block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md'
                        >
                            <div className="relative overflow-hidden w-full aspect-[4/5]">
                                <Image
                                    className='object-cover brightness-95 z-10 w-full h-full group-hover:scale-105 transition'
                                    src={item.imageSrc || ''}
                                    alt={item.name}
                                    fill
                                />
                            </div>
                            <div className='ml-3'>
                                <h3 className="text-gray-700 mt-3 mb-1 font-[outfit] text-xs tracking-wider uppercase group-hover:underline">{item.name}</h3>
                                <p className="text-gray-700 font-[outfit] text-xs tracking-wider uppercase mb-2">{item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}