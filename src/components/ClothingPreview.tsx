"use client"
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

type PreviewProps = {
    srcLink: StaticImageData,
    srcLink2?: StaticImageData,
    altText: string,
    name?: string,
    priceUSD?: string,
    priceKHR?: string,
}

export default function ClothingPreview({srcLink, srcLink2, altText, name, priceKHR, priceUSD}: PreviewProps) {
    const [clickedArrow, setClickedArrow] = useState(false);
    function arrowOnClick() {
        setClickedArrow(!clickedArrow);
    }
  return (
    <div>
        <div className='relative'>
            { clickedArrow && (
                <button onClick={arrowOnClick} className='absolute top-1/2 -translate-x-0.5 -translate-y-0.5 left-0'>◄</button>
            )}
            <Image
                src={srcLink}
                alt={altText}
                width={500}
                height={500}
            />
            { !clickedArrow && (
                <button onClick={arrowOnClick} className='absolute top-1/2 -translate-x-0.5 -translate-y-0.5 right-0'>►</button>
            )}
        </div>
       
        <p className='text-xs font-bold mb-1'>{name}</p>
        <p className='text-xs'>KHR {priceKHR}</p>
        <p className='text-xs'>${priceUSD}</p>
    </div>
  )
}
