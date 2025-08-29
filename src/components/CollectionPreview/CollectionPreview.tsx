"use client"
import { useState } from 'react';
import Link from 'next/link';

import ClothingPreview from "@/components/ClothingPreview/ClothingPreview";


interface ClothingItem {
    srcLink: string;
    srcLink2: string;
    altText: string;
    name: string;
}

const seasonsData: { [key: string]: ClothingItem[] } = {
    "9": [
        { srcLink: "/img/collections/collection-09/mockups/PCS Front Black tee.jpg", srcLink2: "/img/collections/collection-09/mockups/PCS Back Black tee.jpg", altText: "Season9_Mockup 1", name: "PCS Black Tee" },
        { srcLink: "/img/collections/collection-09/mockups/PCS Front White tee.jpg", srcLink2: "/img/collections/collection-09/mockups/PCS Back White tee.jpg", altText: "Season9_Mockup 3", name: "PCS White Tee" },
        { srcLink: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg", srcLink2: "/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg", altText: "Season9_Mockup 5", name: "PCS Gray Long Sleeve" },
        { srcLink: "/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg", srcLink2: "/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg", altText: "Season9_Mockup 5", name: "PCS Gray Long Sleeve" }
    ],
    "8": [
        { srcLink: "/img/collections/collection-08/mockups/PCS Front tee Black.jpg", srcLink2: "/img/collections/collection-08/mockups/PCS Back tee Black.jpg", altText: "Season8_Mockup 1", name: "PCS Black Tee" },
        { srcLink: "/img/collections/collection-08/mockups/PCS Front tee White.jpg", srcLink2: "/img/collections/collection-08/mockups/PCS Back tee White.jpg", altText: "Season8_Mockup 3", name: "PCS White Tee" },
        { srcLink: "/img/collections/collection-08/mockups/PCS Front tee Blue.jpg", srcLink2: "/img/collections/collection-08/mockups/PCS Back tee Blue.jpg", altText: "Season8_Mockup 5", name: "PCS Blue Tee" },
        { srcLink: "/img/collections/collection-08/mockups/PCS Front Long Sleeve.jpg", srcLink2: "/img/collections/collection-08/mockups/PCS Back Long Sleeve.jpg", altText: "Season8_Mockup 5", name: "PCS Blue Long Sleeve" }
    ],
    "7": [
        { srcLink: "/img/collections/collection-07/mockups/PCS Front POLO.jpg", srcLink2: "/img/collections/collection-07/mockups/PCS Back POLO.jpg", altText: "Season7_Mockup 1", name: "PCS White Polo" },
        { srcLink: "/img/collections/collection-07/mockups/PCS Front ZIP UP Hoodie.jpg", srcLink2: "/img/collections/collection-07/mockups/PCS Back ZIP UP Hoodie.jpg", altText: "Season7_Mockup 3", name: "PCS Green Zip-up Hoodie" },
        { srcLink: "/img/collections/collection-07/mockups/PCS Front Black.jpg", srcLink2: "/img/collections/collection-07/mockups/PCS Back Black.jpg", altText: "Season7_Mockup 5", name: "PCS Black Tee" },
        { srcLink: "/img/collections/collection-07/mockups/PCS Front Black.jpg", srcLink2: "/img/collections/collection-07/mockups/PCS Back Black.jpg", altText: "Season7_Mockup 5", name: "PCS Black Tee" }
    ]
};

export default function CollectionPreview() {
    const [season, setSeason] = useState("7");
    function buttonOnClicked(num: string) {
        setSeason(num);
    }
    return (
        <div className="p-7 flex flex-col items-center md:items-start">
          <div className="w-full flex justify-center md:justify-start">
            <h2 className="mb-5 font-bold font-[outfit]">DISCOVER WHAT&apos;S NEW</h2>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between mb-2 items-center">
            <div className="flex gap-5 mb-4 md:mb-0">
              <button onClick={() => buttonOnClicked("9")} className="text-gray-700 text-xs font-[outfit] hover:underline cursor-pointer uppercase focus:outline rounded-md">Collection 9</button>
              <button onClick={() => buttonOnClicked("8")} className="text-gray-700 text-xs font-[outfit] hover:underline cursor-pointer uppercase focus:outline rounded-md">Collection 8</button>
              <button onClick={() => buttonOnClicked("7")} className="text-gray-700 text-xs font-[outfit] hover:underline cursor-pointer uppercase focus:outline rounded-md">Collection 7</button>
            </div>
            <div className="md:block">
              <Link href="/" className="text-gray-700 text-xs font-[outfit] hover:underline focus:outline rounded-md">View All</Link>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {seasonsData[season]?.map((item, index) => (
                    <ClothingPreview 
                        key={index}
                        srcLink={item.srcLink} 
                        srcLink2={item.srcLink2} 
                        altText={item.altText} 
                        name={item.name}
                    />
            ))}
          </div>
        </div>
    )
}
