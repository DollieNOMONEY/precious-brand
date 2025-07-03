import React from 'react'

export default function Footer() {
  return (
    <>
        <div className="p-2 md:mt-5 md:flex md:justify-center">
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">About</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Accessibility</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Size Guide</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Stockists</a>
          <a className="block w-full md:w-auto py-3 px-2 text-xs uppercase mb-8 font-[outfit] hover:underline cursor-pointer">Social</a>
        </div>

      <div className="flex flex-col items-center justify-center">
        <div className="px-2 flex-wrap flex md:flex-row justify-evenly mb-12 gap-8 h-12">
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">@ 2025, PRECIOUS</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Refund policy</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Privacy policy</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Terms of Service</p>
          <p className="text-xs uppercase font-[outfit] hover:underline cursor-pointer">Contact Information</p>
        </div>  
      </div>
    </>
  )
}
