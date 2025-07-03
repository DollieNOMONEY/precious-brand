import React from "react";
import Image from "next/image";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import Cover from "@/img/collections/collection-09/lifestyle/2K8A0869.jpg"
import Cover2 from "@/img/collections/collection-09/thumbnail/PCS Cover Facebook 1.jpg"
import CollectionPreview from "@/components/CollectionPreview";

export default function Home() {
  return (
    <div>
      <Navigation/>
      {/* <div className=""/> */}

      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-7 2xl:max-w-[120rem]">
          <Image
            className="w-full"
            src={Cover}
            alt="Cover 1"
          />
          <h1 className="text-white absolute bottom-18 left-1/2 -translate-x-1/2 text-xs font-[outfit]">2nd Anniversary Drop/SS25</h1>
          <h1 className="text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-xs font-[outfit]">Adventure the Sea Way</h1>
          <a className="text-white absolute bottom-5 left-1/2 -translate-x-1/2 text-xs underline font-[outfit] hover:underline cursor-pointer">SHOP NOW</a>
        </div>
        <div className="relative 2xl:w-[120rem]">
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

        <Footer/>
        
      </div>

    </div>
  );
}
