import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
        <div className="p-2 md:mt-5 md:flex md:justify-center mb-8">
          <Link href="/pages/about" className="text-gray-700 block w-full md:w-auto py-3 px-2 text-sm uppercase font-[outfit] hover:underline cursor-pointer">About</Link>
          <Link href="/pages/accessibility" className="text-gray-700 block w-full md:w-auto py-3 px-2 text-sm uppercase font-[outfit] hover:underline cursor-pointer">Accessibility</Link>
          <Link href="/pages/size-guide" className="text-gray-700 block w-full md:w-auto py-3 px-2 text-sm uppercase font-[outfit] hover:underline cursor-pointer">Size Guide</Link>
          <Link href="/pages/stocklists" className="text-gray-700 block w-full md:w-auto py-3 px-2 text-sm uppercase font-[outfit] hover:underline cursor-pointer">Stockists</Link>
          <a href="https://www.instagram.com/preciousphnompenh" target="_blank" rel="noopener noreferrer" className="text-gray-700 block w-full md:w-auto py-3 px-2 text-sm uppercase font-[outfit] hover:underline cursor-pointer">Social</a>
        </div>

      <div className="flex flex-col items-center justify-center">
        <div className="px-2 flex-wrap flex md:flex-row justify-evenly mb-12 gap-8 ">
          <Link href="/" className="text-gray-700 text-xs uppercase font-[outfit] hover:underline cursor-pointer">@ 2025. PRECIOUS</Link>
          <Link href="/policies/refund-policy" className="text-gray-700 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Refund policy</Link>
          <Link href="/policies/privacy-policy" className="text-gray-700 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Privacy policy</Link>
          <Link href="/policies/terms-of-service" className="text-gray-700 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Terms of Service</Link>
          <Link href="/policies/contact-information" className="text-gray-700 text-xs uppercase font-[outfit] hover:underline cursor-pointer">Contact Information</Link>
        </div>  
      </div>
    </>
  )
}
