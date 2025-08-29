"use client"
import { useParams } from 'next/navigation';

import ProductSizeOptions from '@/features/ProductDetail/ProductSizeOptions';
import ProductQuantity from '@/features/ProductDetail/ProductQuantity';
import ProductPairsWellWith from '@/features/ProductDetail/ProductPairsWellWith';
import ProductYouMayAlsoLike from '@/features/ProductDetail/ProductYouMayAlsoLike';
import ProductSlider from '@/features/ProductDetail/ProductSlider';

export default function Product() {
  const params = useParams();
  const { slug } = params;

  return (
    <div className="lg:flex flex-col items-center justify-center w-full uppercase">
      
      <div className='mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-[120rem]'>
        <div className='md:flex md:justify-between md:gap-3'>
          <div className='md:w-1/2 xl:w-2/3'>
            <ProductSlider/>
          </div>
          <div className='mb-5'/>
          <div className='md:w-1/2 mx-2 xl:w-1/3'>
            <h2 className="mb-5 font-[outfit] text-xl tracking-widest">{slug}</h2>
            <p className="mb-5 font-[outfit] text-sm tracking-widest">USD10.99</p>
            <ProductSizeOptions/>
            <div className='mb-5'/>
            <ProductQuantity/>
            <a 
              href="https://t.me/preciouslocalbrand"
              target="_blank" rel="noopener noreferrer"
              className='inline-block text-center text-gray-700 px-5 py-3 text-sm font-[outfit] bg-white border-[1px] border-gray-700 w-full mb-12 transition hover:ring-1 active:ring-1 active:ring-black hover:ring-black'>
              Contact via Telegram
            </a>
            <ProductPairsWellWith/>
            <p className='text-gray-700 mb-8 font-[outfit] text-sm tracking-wider normal-case'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus neque et turpis scelerisque, quis mattis risus dictum. Nunc sed sodales massa. Vestibulum interdum lectus in tortor euismod, nec ornare massa volutpat. Vivamus laoreet congue pellentesque. Sed sed porttitor mi. Donec interdum porta est a congue. Sed id feugiat odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tristique molestie posuere. Sed sodales erat a tortor sagittis, quis mollis turpis aliquet. Vestibulum in tellus ut mi sollicitudin cursus. Aenean mollis mauris vitae augue faucibus, ut ultrices tortor gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vel sapien facilisis, volutpat magna luctus, venenatis lectus. Fusce lectus libero, vehicula vitae feugiat nec, auctor et erat.</p>
          </div>
        </div>
        <div className='mb-15'/>
        <ProductYouMayAlsoLike/>
        <div className='mb-15'/>
      </div>
    </div>
  );
}
