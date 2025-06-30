import React from "react";
import Image from "next/image";

import Navigation from "@/components/Navigation";
import ClothingPreview from "@/components/ClothingPreview";

import Mockup1 from "@/img/mock-up/Collection 9/PCS Front Black tee.jpg"
// import Mockup2 from "@/img/mock-up/Collection 9/PCS Back Black tee.jpg"
import Mockup3 from "@/img/mock-up/Collection 9/PCS Front White tee.jpg"
// import Mockup4 from "@/img/mock-up/Collection 9/PCS Back White tee.jpg"
import Mockup5 from "@/img/mock-up/Collection 9/PCS Front Grey tee.jpg"
// import Mockup6 from "@/img/mock-up/Collection 9/PCS back Grey tee.jpg"
import Cover from "@/img/mock-up/Collection 9/2K8A0869.jpg"
import Cover2 from "@/img/mock-up/Collection 9/PCS Cover Facebook 1.jpg"

export default function Home() {
  return (
    <div>
      <Navigation/>
      <div className=""/>

      <div>
        <div className="relative mb-5">
           <Image
            className="w-full"
            src={Cover}
            alt="Cover 1"
          />
          <h1 className="text-white absolute bottom-18 left-1/2 -translate-x-1/2 text-xs">2nd Anniversary Drop/SS25</h1>
          <h1 className="text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-xs">Adventure the Sea Way</h1>
          <a className="text-white absolute bottom-5 left-1/2 -translate-x-1/2 text-xs underline">SHOP NOW</a>
        </div>

        <div className="relative">
          <Image
            className="w-full"
            src={Cover2}
            alt="Cover 2"
          />
          <h1 className="text-white absolute bottom-18 left-1/2 -translate-x-1/2 text-xs">Spring Summer collection/SS25</h1>
          <h1 className="text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-xs">Fresh Outfit of the Spring Season</h1>
          <a className="text-white absolute bottom-5 left-1/2 -translate-x-1/2 text-xs underline">SHOP NOW</a>
        </div>

        <div className="p-5">
          <p className="mb-2">DISCOVER WHAT&apos;S NEW</p>
          <div className="flex justify-start md:justify-around">
             <div className="flex gap-5">
              <button className="text-xs underline">All</button>
              <button className="text-xs">Show Product</button>
              <button className="text-xs">SS25</button>
              <button className="text-xs">SS24</button>
              <button className="text-xs">SS23</button>
            </div>
            <div className="hidden md:block">
              View All
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            <ClothingPreview srcLink={Mockup1} altText="Mockup 1" name="PCS Black Tee" priceKHR="40000" priceUSD="10"/>
            <ClothingPreview srcLink={Mockup3} altText="Mockup 3" name="PCS White Tee" priceKHR="40000" priceUSD="10"/>
            <ClothingPreview srcLink={Mockup5} altText="Mockup 5" name="PCS Gray Tee" priceKHR="40000" priceUSD="10"/>
            <ClothingPreview srcLink={Mockup5} altText="Mockup 5" name="PCS Gray Tee" priceKHR="40000" priceUSD="10"/>
          </div>
         
        </div>

        {/* *Shop Collection */}

        <div className="p-2">
          <a className="block w-full py-3 px-2 text-xs uppercase">About</a>
          <a className="block w-full py-3 px-2 text-xs uppercase">Accessibility</a>
          <a className="block w-full py-3 px-2 text-xs uppercase">Size Guide</a>
          <a className="block w-full py-3 px-2 text-xs uppercase">Stockists</a>
          <a className="block w-full py-3 px-2 text-xs uppercase mb-8">Social</a>
        </div>

       <div className="flex flex-col justify-center">
         <div className="p-2 flex justify-around">
            <p className="text-xs uppercase">@ 2025, PRECIOUS</p>
            <p className="text-xs uppercase">Refund policy</p>
            <p className="text-xs uppercase">Privacy policy</p>
          </div>
          <div className="px-2 flex justify-evenly mb-12">
            <p className="text-xs uppercase">Terms of Service</p>
            <p className="text-xs uppercase">Contact Information</p>
          </div>
       </div>
        
      </div>

    </div>
  );
}
