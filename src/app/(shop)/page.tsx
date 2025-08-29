import React from "react";
import Image from "next/image";
import Link from "next/link";


import CollectionPreview from "@/components/CollectionPreview/CollectionPreview";

export default function Home() {
  return (
    <div className="w-full uppercase">
      {/* <div className=""/> */}

      <div className="flex flex-col items-center justify-center">
        <div className="relative mb-7 2xl:max-w-[120rem]">
          <div className="relative w-full aspect-[15/7]">
            <Image
              src="/img/collections/collection-09/lifestyle/2K8A0869.jpg"
              alt="Cover 1"
              fill
              className="object-cover object-[0%_38%]"
              draggable={false}
              priority
            />
          </div>
          <h1 className="text-white absolute top-[50rem] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-5 text-xs md:text-base md:mb-1 font-[outfit]">2nd Anniversary Drop/SS25</h1>
          <h1 className="text-white absolute top-[51rem] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-5 text-xs md:text-base font-[outfit]">Adventure the Sea Way</h1>
          <span>
            <Link href="/" className="text-white absolute top-[53rem] left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-5 text-xs md:text-base hover:underline active:underlinea active:scale-105 font-[outfit] cursor-pointer font-bold transition duration-[25ms]">SHOP NOW</Link>
          </span>

          <CollectionPreview/>

          <div className="relative w-full h-[900px]"> {/* or use aspect ratio */}
            <Image
              src="/img/collections/collection-09/thumbnail/PCS Cover Facebook 1.jpg"
              alt="Cover 2"
              fill
              className="object-cover"
              draggable={false}
            />
          </div>
          <h1 className="text-white absolute bottom-18 left-1/2 -translate-x-1/2 text-xs font-[outfit]">Spring Summer collection/SS25</h1>
          <h1 className="text-white absolute bottom-14 left-1/2 -translate-x-1/2 text-xs font-[outfit]">Fresh Outfit of the Spring Season</h1>
          <span>
            <Link href="/" className="text-white absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-[outfit] hover:underline cursor-pointer font-bold">SHOP NOW</Link>
          </span>

          {/* *Shop Collection */}
        </div>

      </div>

    </div>
  );
}