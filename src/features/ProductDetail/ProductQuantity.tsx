import React from 'react'
import { useState } from 'react'

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);
  function editQuantity(num: number){
      if (quantity+num >= 0) {
        setQuantity(quantity+num);
      }
  }
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    // Only allow numbers (or empty string if clearing input)
    if (/^\d*$/.test(value)) {
      setQuantity(value === '' ? 0 : parseInt(value));
    }
  }


  return (
   <div>
    <h2 className="text-gray-700 mb-2 font-[outfit] text-sm tracking-widest uppercase">Quantity</h2>
        <div className='flex w-fit bg-white border-[1px] border-gray text-center mb-5'>
            <button
              onClick={() => editQuantity(-1)}
              className={`text-xl font-[outfit] px-5 py-3 ${
                quantity <= 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:cursor-pointer'
              }`}
              disabled={quantity <= 0}
            >
              –
            </button>
            <input onChange={handleInputChange} className='text-gray-700 text-lg font-[outfit]  py-3 w-16 text-center' value={quantity}/>
            <button onClick={() => editQuantity(1)} className='text-gray-700 text-xl font-[outfit] px-5 py-3 hover:cursor-pointer'>+</button>
        </div>
   </div>
  )
}