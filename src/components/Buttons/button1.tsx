import React from 'react'
import Link from 'next/link'

interface ButtonParams {
    readonly link: string,
    readonly children: React.ReactNode;
}

export default function Button1({link, children}: ButtonParams) {
  return (
    <Link href={link} className="inline-block bg-black px-6 py-4 text-center outline-1 text-white font-[outfit]
        transition duration-100 hover:bg-white hover:text-black hover:outline-black
        active:bg-white active:text-black active:outline-black active:scale-90">
        {children}
    </Link>
  )
}
