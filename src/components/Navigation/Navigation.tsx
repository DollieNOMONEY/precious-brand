'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

type DropdownName = 'collections' | 'shopall' | 'search' | null;

export default function Navigation() {
    const [menuOpened, setMenuOpened] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
    const [mobileActiveDropdown, setMobileActiveDropdown] = useState<DropdownName>(null);

    // Function to handle opening/closing the mobile menu
    function toggleMobileMenu() {
        setMenuOpened(!menuOpened);
        // Reset mobile dropdown when menu closes
        if (menuOpened) {
            setMobileActiveDropdown(null);
        }
    }

    // Function to toggle desktop dropdowns
    const toggleDesktopDropdown = (dropdownName: DropdownName) => {
        setActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));
    };

    // Function to toggle mobile dropdowns
    const toggleMobileDropdown = (dropdownName: DropdownName) => {
        setMobileActiveDropdown(prev => (prev === dropdownName ? null : dropdownName));
    };

    // Effect to handle body scroll lock for mobile menu
    useEffect(() => {
        if (menuOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpened]);

    // Effect to handle clicking outside the desktop dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeDropdown && event.target instanceof HTMLElement && !event.target.closest('.desktop-nav')) {
                setActiveDropdown(null);
            }
        };

        if (activeDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    const DropdownContent = ({ type, isMobile = false }: { type: DropdownName, isMobile?: boolean }) => {
        if (!type) return null;

        const commonClasses = isMobile ? 'w-full px-4 py-3' : 'max-w-full mx-auto px-8';
        const linkClasses = 'text-xs text-gray-600 hover:text-black hover:underline active:underline';

        switch (type) {
            case 'collections':
                return (
                    <div className={commonClasses}>
                        <ul className='font-[outfit]'>
                            <li><a href="/collections" className={linkClasses}>All Collections</a></li>
                            <li><a href="/collections/s-10" className={linkClasses}>Collection 10</a></li>
                            <li><a href="/collections/s-9" className={linkClasses}>Collection 9</a></li>
                            <li><a href="/collections/s-8" className={linkClasses}>Collection 8</a></li>
                            <li><a href="/collections/s-7" className={linkClasses}>Collection 7</a></li>
                            <li><a href="/collections/s-6" className={linkClasses}>Collection 6</a></li>
                            <li><a href="/collections/s-5" className={linkClasses}>Collection 5</a></li>
                            <li><a href="/collections/s-4" className={linkClasses}>Collection 4</a></li>
                            <li><a href="/collections/s-3" className={linkClasses}>Collection 3</a></li>
                            <li><a href="/collections/s-2" className={linkClasses}>Collection 2</a></li>
                            <li><a href="/collections/s-1" className={linkClasses}>Collection 1</a></li>
                        </ul>
                    </div>
                );
            case 'shopall':
                return (
                    <div className={commonClasses}>
                        <ul className='font-[outfit]'>
                            <li><a href="/shop-all" className={linkClasses}>All Products</a></li>
                            <li><a href="/collections/new-arrivals" className={linkClasses}>New Arrivals</a></li>
                            <li><a href="/collections/tee" className={linkClasses}>Tee</a></li>
                            <li><a href="/collections/long-sleeves" className={linkClasses}>Long Sleeves</a></li>
                            <li><a href="/collections/hoodie" className={linkClasses}>Hoodie</a></li>
                            <li><a href="/collections/polo" className={linkClasses}>Polo</a></li>
                            <li><a href="/collections/zip-up" className={linkClasses}>Zip-Up</a></li>
                        </ul>
                    </div>
                );
            case 'search':
                return (
                    <div className={commonClasses}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full font-[outfit] opacity-50 outline-0 outline-transparent text-sm"
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <nav className='w-full sticky top-0 z-50 tracking-widest desktop-nav'>
            <div className='flex flex-col justify-between'>
                <div className='w-full'>
                    {/* Main Navigation Bar */}
                    <div className="relative flex items-center px-3 md:px-8 py-[1rem] bg-white z-20">
                        {/* Left Section (Hamburger + Desktop Nav Links) */}
                        <div className='flex items-center gap-5 xl:gap-10 md:w-3/6'>
                            <button onClick={toggleMobileMenu} className='text-2xl opacity-75 lg:hidden cursor-pointer'>☰</button>

                            <nav className='hidden lg:inline'>
                                <ul className='flex gap-8'>
                                    <li>
                                        <button
                                            onClick={() => toggleDesktopDropdown('shopall')}
                                            className='text-gray-700 text-xs font-[outfit] uppercase hover:underline active:no-underline cursor-pointer'
                                        >
                                            Shop All
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => toggleDesktopDropdown('collections')}
                                            className='text-gray-700 text-xs font-[outfit] uppercase hover:underline active:no-underline cursor-pointer'
                                        >
                                            Collections
                                        </button>
                                    </li>
                                </ul>
                            </nav>

                        </div>

                        <Link
                            href="/"
                            className="active:scale-95 duration-75 transition md:mx-auto ml-4 md:ml-0"
                        >
                            <Image
                                src="/img/icons/precious_logo_black_croppped.png"
                                alt="Precious"
                                height={444}
                                width={100}
                                priority
                                className="object-contain"
                            />
                        </Link>

                        {/* Right Section (Search + Cart) */}
                        <div className='ml-auto md:ml-0 flex gap-10 md:w-3/6 md:justify-end md:gap-5'>
                            <button aria-label="Search" className='hidden md:inline cursor-pointer' onClick={() => toggleDesktopDropdown('search')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <div>
                                <a
                                    href="https://t.me/preciouslocalbrand"
                                    target="_blank" rel="noopener noreferrer"
                                    className='text-gray-700 text-xs font-[outfit] uppercase cursor-pointer'>Telegram</a>
                            </div>
                        </div>
                    </div>

                    {/* Full-width Desktop Dropdown (visible only on lg screens and up) */}
                    {activeDropdown && (
                        <div className='absolute top-full left-0 w-full bg-white shadow-lg py-8 z-30 hidden lg:block'>
                            <DropdownContent type={activeDropdown} />
                        </div>
                    )}

                    {/* Mobile Menu (visible only on smaller screens) */}
                    {menuOpened && (
                        <div className='fixed inset-0 bg-[#000000a3] z-40 lg:hidden'>
                            <div className='flex flex-col justify-between fixed bg-white top-0 left-0 h-dvh w-full z-50'>
                                <div>
                                    {/* Close button for the mobile menu */}
                                    <div className='py-5 px-8 flex justify-end'>
                                        <button onClick={toggleMobileMenu} className='text-2xl opacity-75 cursor-pointer'>✕</button>
                                    </div>

                                    {/* Search input for mobile */}
                                    <div className='mb-4 px-8'>
                                        <input
                                            type="text"
                                            placeholder='SEARCH'
                                            className='w-full p-2 border-b-2 opacity-35 outline-0 outline-transparent text-xs'
                                        />
                                    </div>

                                    <div className='w-full'>
                                        <button onClick={() => toggleMobileDropdown('shopall')} className='text-gray-700 block w-full text-left p-3 uppercase text-xs font-[outfit] cursor-pointer'>Shop All</button>
                                        {mobileActiveDropdown === 'shopall' && <DropdownContent type="shopall" isMobile={true} />}
                                        <button onClick={() => toggleMobileDropdown('collections')} className='text-gray-700 block w-full text-left p-3 uppercase text-xs font-[outfit] cursor-pointer'>Collections</button>
                                        {mobileActiveDropdown === 'collections' && <DropdownContent type="collections" isMobile={true} />}
                                    </div>
                                </div>

                                {/* <div>
                                    <div className='text-gray-700 w-full p-3 uppercase text-xs font-[outfit] border-t mt-4'>Contact Us</div>
                                </div> */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}