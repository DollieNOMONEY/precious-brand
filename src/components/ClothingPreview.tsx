import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
 

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
    function convertProductToSlug() {
        const nameConverted = name?.replace(/ /g, "-").toLowerCase();
        return nameConverted
    }
  return (
    <div>
        <div className='relative'>
            <Link href={`/products/${convertProductToSlug()}`} 
            className='opacity-0 absolute top-0 h-full w-full'
            >
            Link to Product   
            </Link>
            { clickedArrow && (
                <FontAwesomeIcon onClick={arrowOnClick} icon={faChevronLeft} className="cursor-pointer fa-fw absolute top-1/2 -translate-x-0.5 -translate-y-0.5 left-0"/>
                // <button onClick={arrowOnClick} className='absolute top-1/2 -translate-x-0.5 -translate-y-0.5 left-0'>◄</button>
            )}
            <Image
                src={ clickedArrow=== false ? srcLink ?? '/fallback.png' : srcLink2 ?? '/fallback.png' }
                alt={altText}
                width={500}
                height={500}
            />
            { !clickedArrow && (
                <FontAwesomeIcon onClick={arrowOnClick} icon={faChevronRight} className="cursor-pointer fa-fw absolute top-1/2 -translate-x-0.5 -translate-y-0.5 right-0"/>
                // <button onClick={arrowOnClick} className='absolute top-1/2 -translate-x-0.5 -translate-y-0.5 right-0'>►</button>
            )}
        </div>
       
        <p className='text-xs font-bold mb-2 font-[outfit]'>{name}</p>
        <p className='text-xs mb-2 font-[outfit]'>KHR {priceKHR}</p>
        <p className='text-xs mb-2 font-[outfit]'>${priceUSD}</p>
    </div>
  )
}
