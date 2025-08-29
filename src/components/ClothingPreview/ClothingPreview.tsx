"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
 

type PreviewProps = {
    readonly srcLink: string,
    readonly srcLink2?: string,
    readonly altText: string,
    readonly name?: string,
    readonly priceUSD?: string,
    readonly priceKHR?: string,
}

export default function ClothingPreview({srcLink, srcLink2, altText, name, priceKHR, priceUSD}: PreviewProps) {
    const [clickedArrow, setClickedArrow] = useState(false);
    function arrowOnClick() {
        setClickedArrow(!clickedArrow);
    }
    function convertProductToSlug() {
        const nameConverted = name?.replace(/ /g, "-").toLowerCase();
        return nameConverted
    }
    
    return (
        <div>
            {/* Added 'group' class to the parent div for hover effects on child elements */}
            <div className='relative group'>
                {/* Previous Arrow Button - Now visible and slides to the right on hover */}
                { clickedArrow && (
                    <button 
                        onClick={arrowOnClick} 
                        className='absolute top-1/2 left-8 z-10 p-2 opacity-25 transition-all duration-300 group-hover:left-2 group-hover:opacity-75'
                        aria-label="Previous image"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="fa-fw"/>
                    </button>
                )}
                {/* Product Image Link - Removed focus outline classes */}
                <Link 
                    href={`/products/${convertProductToSlug()}`} 
                    className='rounded-md block focus:outline-none focus-visible:ring-0 active:outline-none'
                >
                    <Image
                        src={ clickedArrow=== false ? srcLink ?? '/fallback.png' : srcLink2 ?? '/fallback.png' }
                        alt={altText}
                        width={500}
                        height={500}
                    />
                </Link>
                {/* Next Arrow Button - Now visible and slides to the left on hover */}
                { !clickedArrow && (
                    <button 
                        onClick={arrowOnClick} 
                        className='absolute top-1/2 right-8 z-10 opacity-25 p-2 transition-all duration-300 group-hover:right-2 group-hover:opacity-75'
                        aria-label="Next image"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="fa-fw"/>
                    </button>
                )}
            </div>
            
            <h3 className='text-gray-700 text-xs mb-2 font-[outfit]'>{name}</h3>
            {priceKHR && (
                <p className='text-xs mb-2 font-[outfit]'>KHR {priceKHR}</p>
            )}
            {priceUSD && (
                <p className='text-xs mb-2 font-[outfit]'>${priceUSD}</p>
            )}
        </div>
    )
}
