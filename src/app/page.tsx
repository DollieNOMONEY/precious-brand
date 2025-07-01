import React from "react";
import Image from "next/image";

import Navigation from "@/components/Navigation";

import Cover from "@/img/collections/collection-09/lifestyle/2K8A0869.jpg"
import Cover2 from "@/img/collections/collection-09/thumbnail/PCS Cover Facebook 1.jpg"
import CollectionPreview from "@/components/CollectionPreview";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <div className=""/>

      <div>
        <div className="relative mb-7">
           <Image
            className="w-full"
            src={Cover}
            alt="Cover 1"
          />
          <h1 className="text-white absolute bottom-18 left-1/2 -translate-x-1/2 text-xs font-[outfit]">2nd Anniversary Drop/SS25</h1>
          <h1 className="text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-xs font-[outfit]">Adventure the Sea Way</h1>
          <a className="text-white absolute bottom-5 left-1/2 -translate-x-1/2 text-xs underline font-[outfit] hover:underline cursor-pointer">SHOP NOW</a>
        </div>

        <div className="relative">
          <Image
            className="w-full"
            src={Cover2}
            alt="Cover 2"
          />
          <h1 className="text-white absolute bottom-18 left-1/2 -translate-x-1/2 text-xs font-[outfit]">Spring Summer collection/SS25</h1>
          <h1 className="text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-xs font-[outfit]">Fresh Outfit of the Spring Season</h1>
          <a className="text-white absolute bottom-5 left-1/2 -translate-x-1/2 text-xs underline font-[outfit] hover:underline cursor-pointer">SHOP NOW</a>
        </div>

        <CollectionPreview/>

        {/* *Shop Collection */}

        <div className="p-2 md:mt-5 md:flex md:justify-center">
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">About</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Accessibility</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Size Guide</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Stockists</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase mb-8 font-[outfit] hover:underline cursor-pointer">Social</a>
        </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="px-2 flex-wrap flex md:flex-row justify-evenly mb-12 gap-8 h-12">
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">@ 2025, PRECIOUS</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Refund policy</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Privacy policy</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Terms of Service</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Contact Information</p>
        </div>  
      </div>
        
      </div>

    </div>
  );
}
