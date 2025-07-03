import React from 'react'
import { useState } from 'react'

export default function ProductSizeOptions() {
    const [pressedButton, setPressedButton] = useState('XS');
    function editSize(size: string){
        setPressedButton(size);
    }
    return (
   <div className='flex gap-3 w-full overflow-auto mb-2'>
        <button onClick={() => editSize('XS')} className={pressedButton=="XS"?'bg-black px-6 py-2 text-center' : 'bg-white border-black border-[1px] px-6 py-2 text-center'}>
            <p className= {pressedButton=="XS" ? 'text-white font-[outfit]' : 'text-black font-[outfit]'}
            >XS</p>
        </button>
        <button onClick={() => editSize('S')} className={pressedButton=="S"?'bg-black px-6 py-2 text-center' : 'bg-white border-black border-[1px] px-6 py-2 text-center'}>
            <p className= {pressedButton=="S" ? 'text-white font-[outfit]' : 'text-black font-[outfit]'}
            >S</p>
        </button>
       <button onClick={() => editSize('M')} className={pressedButton=="M"?'bg-black px-6 py-2 text-center' : 'bg-white border-black border-[1px] px-6 py-2 text-center'}>
            <p className= {pressedButton=="M" ? 'text-white font-[outfit]' : 'text-black font-[outfit]'}
            >M</p>
        </button>
        <button onClick={() => editSize('L')} className={pressedButton=="L"?'bg-black px-6 py-2 text-center' : 'bg-white border-black border-[1px] px-6 py-2 text-center'}>
            <p className= {pressedButton=="L" ? 'text-white font-[outfit]' : 'text-black font-[outfit]'}
            >L</p>
        </button>
        <button onClick={() => editSize('XL')} className={pressedButton=="XL"?'bg-black px-6 py-2 text-center' : 'bg-white border-black border-[1px] px-6 py-2 text-center'}>
            <p className= {pressedButton=="XL" ? 'text-white font-[outfit]' : 'text-black font-[outfit]'}
            >XL</p>
        </button>
        <button onClick={() => editSize('XXL')} className={pressedButton=="XXL"?'bg-black px-6 py-2 text-center' : 'bg-white border-black border-[1px] px-6 py-2 text-center'}>
            <p className= {pressedButton=="XXL" ? 'text-white font-[outfit]' : 'text-black font-[outfit]'}
            >XXL</p>
        </button>
    </div>
  )
}
