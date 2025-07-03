"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

import ClothingPreview from "@/components/ClothingPreview";

import Season7_Mockup1 from "@/img/collections/collection-07/mockups/PCS Front POLO.jpg"
import Season7_Mockup2 from "@/img/collections/collection-07/mockups/PCS Back POLO.jpg"
import Season7_Mockup3 from "@/img/collections/collection-07/mockups/PCS Front ZIP UP Hoodie.jpg"
import Season7_Mockup4 from "@/img/collections/collection-07/mockups/PCS Back ZIP UP Hoodie.jpg"
import Season7_Mockup5 from "@/img/collections/collection-07/mockups/PCS Front Black.jpg"
import Season7_Mockup6 from "@/img/collections/collection-07/mockups/PCS Back Black.jpg"
import Season8_Mockup1 from "@/img/collections/collection-08/mockups/PCS Front tee Black.jpg"
import Season8_Mockup2 from "@/img/collections/collection-08/mockups/PCS Back tee Black.jpg"
import Season8_Mockup3 from "@/img/collections/collection-08/mockups/PCS Front tee White.jpg"
import Season8_Mockup4 from "@/img/collections/collection-08/mockups/PCS Back tee White.jpg"
import Season8_Mockup5 from "@/img/collections/collection-08/mockups/PCS Front tee Blue.jpg"
import Season8_Mockup6 from "@/img/collections/collection-08/mockups/PCS Back tee Blue.jpg"
import Season8_Mockup7 from "@/img/collections/collection-08/mockups/PCS Front Long Sleeve.jpg"
import Season8_Mockup8 from "@/img/collections/collection-08/mockups/PCS Back Long Sleeve.jpg"
import Season9_Mockup1 from "@/img/collections/collection-09/mockups/PCS Front Black tee.jpg"
import Season9_Mockup2 from "@/img/collections/collection-09/mockups/PCS Back Black tee.jpg"
import Season9_Mockup3 from "@/img/collections/collection-09/mockups/PCS Front White tee.jpg"
import Season9_Mockup4 from "@/img/collections/collection-09/mockups/PCS Back White tee.jpg"
import Season9_Mockup5 from "@/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
import Season9_Mockup6 from "@/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg"


export default function CollectionPreview() {
    const [season, setSeason] = useState("7");
    function buttonOnClicked(num: string) {
        setSeason(num);
    }
    return (
        <div className="p-7 flex flex-col items-center">
          <p className="mb-5 font-bold font-[outfit]">DISCOVER WHAT&apos;S NEW</p>
          <div className="flex justify-start md:justify-between mb-2">
            <div className="flex gap-5">
              <button onClick={() => buttonOnClicked("9")} className="text-xs font-[outfit] hover:underline cursor-pointer">Collection 9</button>
              <button onClick={() => buttonOnClicked("8")} className="text-xs font-[outfit] hover:underline cursor-pointer">Collection 8</button>
              <button onClick={() => buttonOnClicked("7")} className="text-xs font-[outfit] hover:underline cursor-pointer">Collection 7</button>
            </div>
            <div className="hidden md:block">
              <Link href="/" className="text-xs font-[outfit] hover:underline">View All</Link>
            </div>
          </div>
            { season=="9" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    <ClothingPreview srcLink={Season9_Mockup1} srcLink2={Season9_Mockup2} altText="Season9_Mockup 1" name="PCS Black Tee" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season9_Mockup3} srcLink2={Season9_Mockup4} altText="Season9_Mockup 3" name="PCS White Tee" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season9_Mockup5} srcLink2={Season9_Mockup6} altText="Season9_Mockup 5" name="PCS Gray Long Sleeve" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season9_Mockup5} srcLink2={Season9_Mockup6} altText="Season9_Mockup 5" name="PCS Gray Long Sleeve" priceKHR="40000" priceUSD="10"/>
                </div>
            )}
            { season=="8" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    <ClothingPreview srcLink={Season8_Mockup1} srcLink2={Season8_Mockup2} altText="Season8_Mockup 1" name="PCS Black Tee" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season8_Mockup3} srcLink2={Season8_Mockup4} altText="Season8_Mockup 3" name="PCS White Tee" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season8_Mockup5} srcLink2={Season8_Mockup6} altText="Season8_Mockup 5" name="PCS Blue Tee" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season8_Mockup7} srcLink2={Season8_Mockup8} altText="Season8_Mockup 5" name="PCS Blue Long Sleeve" priceKHR="40000" priceUSD="10"/>
                </div>
            )}
            { season=="7" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    <ClothingPreview srcLink={Season7_Mockup1} srcLink2={Season7_Mockup2} altText="Season7_Mockup 1" name="PCS White Polo" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season7_Mockup3} srcLink2={Season7_Mockup4} altText="Season7_Mockup 3" name="PCS Green Zip-up Hoodie" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season7_Mockup5} srcLink2={Season7_Mockup6} altText="Season7_Mockup 5" name="PCS Black Tee" priceKHR="40000" priceUSD="10"/>
                    <ClothingPreview srcLink={Season7_Mockup5} srcLink2={Season7_Mockup6} altText="Season7_Mockup 5" name="PCS Black Tee" priceKHR="40000" priceUSD="10"/>
                </div>
            )}
        </div>
    )
}
