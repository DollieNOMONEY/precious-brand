'use client'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '@/img/icons/precious_logo_black_croppped.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
                <div className='relative flex justify-between align-middle py-5 px-4 bg-white z-20'>
                    <div className='flex gap-5 md:w-3/6'>
                        <button onClick={openMenu} className='text-2xl opacity-75 lg:hidden'>☰</button>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase'>Collections</a>
                        </div>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase'>Telegram</a>
                        </div>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase'>SSDrop</a>
                        </div>
                        <div className='hidden lg:inline'>
                            <a className='text-xs font-[outfit] uppercase'>New Arrivals</a>
                        </div>
                    </div>
                    <Image
                        src={Logo}
                        alt="Precious"
                        width={100}
                        className='object-contain'
                    />
                   <div className='flex gap-5 md:w-3/6 md:justify-end md:gap-5'>
                        <span className=' hidden md:inline'>
                            <FontAwesomeIcon icon={faSearch}/>
                        </span>
                        <div>
                            <a className='text-xs font-[outfit] uppercase'>Cart</a>
                        </div>
                   </div>
                </div>
               { menuOpened && (
                <div className='absolute top-0 left-0 w-full h-dvh bg-[#000000a3]'>
                    <div className='flex flex-col justify-between fixed bg-white top-0 left-0 h-dvh w-5/6 z-10'>
                        <div>
                            <div className='mb-20'/>
                            <input 
                            placeholder='SEARCH'
                            className='w-full p-2 border-b-2 opacity-35 outline-0 outline-transparent text-xs'
                            />
                            <div className='w-full p-3 uppercase text-xs font-[outfit]'>Collections</div>
                            {/* <div className='w-full p-3 uppercase text-xs font-[outfit]'>Account</div> */}
                        </div>
                        
                        <div>
                            <div className='w-full p-3 uppercase text-xs font-[outfit]'>Telegram</div>
                            <div className='w-full p-3 uppercase text-xs font-[outfit]'>SSDrop</div>
                            <div className='w-full p-3 uppercase text-xs font-[outfit]'>New Arrivals</div>
                        </div>
                    </div>
                </div>
               ) }
            </div>

            {/* { menuOpened && (
                
            )} */}
        </div>

    </nav>
  )
}
