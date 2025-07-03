import React from 'react'
import Image from 'next/image'

import Season9_Mockup5 from "@/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
import Season9_Mockup6 from "@/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg"

export default function ProductSlider() {
  return (
    <div className='flex gap-5 overflow-x-scroll'>
        <div className='w-[380px] h-[380px] overflow-hidden shrink-0'>
        <Image 
        className='w-full h-full object-cover brightness-95'
        src={Season9_Mockup5 || ''} 
        alt={"Front View of Clothing"}
        />
        </div>
        <div className='w-[380px] h-[380px] overflow-hidden shrink-0'>
        <Image 
        className='w-full h-full object-cover brightness-95'
        src={Season9_Mockup6 || ''} 
         alt={"Back View of Clothing"}
        />
        </div>
    </div>
  )
}
