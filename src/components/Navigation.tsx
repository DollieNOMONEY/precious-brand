'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/img/icons/precious_logo_black_croppped.png'

export default function Navigation() {

    const [menuOpened, setMenuOpened] = useState(false);
    function openMenu() {
        setMenuOpened(!menuOpened);
        // if (menuOpened == true) {
        //     document.body.style.overflow = "hidden";
        // }
        // else {
        //     document.body.style.overflow = "";
        // }
    }

  return (
    <nav className='w-full sticky top-0 z-10'>  {/* h-dvh  */}
    
        <div className='flex flex-col justify-between'> {/* h-dvh  */}
            <div className='w-full'>
                <div className='flex justify-between align-middle py-5 px-4 bg-white'>
                    <button onClick={openMenu} className='text-2xl opacity-75'>☰</button>
                    <Image
                        src={Logo}
                        alt="Precious"
                        width={100}
                        className='object-contain'
                    />
                    <a className='text-sm'>CART</a>
                </div>
               { menuOpened && (
                    <div>
                        <div>
                            <input 
                            placeholder='SEARCH'
                            className='w-full p-2 border-b-2 opacity-35 outline-0 outline-transparent text-sm'
                            
                            />
                        </div>
                        <div className='w-full p-3 uppercase text-sm'>Collections</div>
                        <div className='w-full p-3 uppercase text-sm'>Account</div>
                    </div>
               ) }
            </div>

            { menuOpened && (
                <div className='w-full flex flex-col justify-between'>
                    <div>
                        <div className='w-full p-3 uppercase text-sm'>Telegram</div>
                        <div className='w-full p-3 uppercase text-sm'>SSDrop</div>
                        <div className='w-full p-3 uppercase text-sm'>New Arrivals</div>
                    </div>
                </div>
            )}
        </div>

    </nav>
  )
}
