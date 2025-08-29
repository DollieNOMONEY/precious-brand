import { useState } from 'react'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductSizeOptions() {
    const [pressedButton, setPressedButton] = useState('XS');
    function editSize(size: string){
        setPressedButton(size);
    }
    return (
    <>
        <p className="mb-2 text-gray-700 font-[outfit] text-sm tracking-widest uppercase">Size</p>
        <div className='flex gap-3 w-full overflow-auto mb-2 py-2'>
                {sizes.map(size => (
                <button 
                    key={size}
                    onClick={() => editSize(size)}
                    className={
                        size === pressedButton
                            ? 'bg-black px-5 py-2 text-center border-[1px] text-sm font-[outfit] text-white hover:cursor-pointer'
                            : 'bg-white border-gray-500 border-[1px] px-5 py-2 text-center text-sm font-[outfit] text-black hover:cursor-pointer transition hover:border-black active:border-black'
                    }
                >
                    {size}
                </button>
            ))}
        </div>
    </>
  )
}
