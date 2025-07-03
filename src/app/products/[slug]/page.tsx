"use client"
import { useParams } from 'next/navigation';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer'; 
import ProductSizeOptions from '@/components/ProductSizeOptions';
import ProductQuantity from '@/components/ProductQuantity';
import ProductPairsWellWith from '@/components/ProductPairsWellWith';
import ProductYouMayAlsoLike from '@/components/ProductYouMayAlsoLike';
import ProductSlider from '@/components/ProductSlider';

import Season9_Mockup5 from "@/img/collections/collection-09/mockups/PCS Front Grey Long Sleeve.jpg"
import Season9_Mockup6 from "@/img/collections/collection-09/mockups/PCS back Grey Long Sleeve.jpg"


export default function Product(productName: string) {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <Navigation/>
      
      <div className='mx-1'>
        <ProductSlider/>
        <div className='mb-5'/>
        <div className='mx-2'>
          <h1 className="mb-5 font-[outfit] text-xl tracking-widest">{slug}</h1>
          <h1 className="mb-2 font-[outfit] text-sm tracking-widest">40000KHR</h1>
          <h1 className="mb-5 font-[outfit] text-sm tracking-widest">$10</h1>
          <h1 className="mb-2 font-[outfit] text-sm tracking-widest uppercase">Size</h1>
          <ProductSizeOptions/>
          <ProductQuantity/>
          <div className='flex bg-white border-[1px] w-full mb-8'>
            <button className='text-black font-[outfit] w-full px-5 py-3 mx-auto'>ADD TO CART</button>
          </div>
          <ProductPairsWellWith/>
          <p className='mb-8 font-[outfit] text-sm tracking-wider'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus neque et turpis scelerisque, quis mattis risus dictum. Nunc sed sodales massa. Vestibulum interdum lectus in tortor euismod, nec ornare massa volutpat. Vivamus laoreet congue pellentesque. Sed sed porttitor mi. Donec interdum porta est a congue. Sed id feugiat odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tristique molestie posuere. Sed sodales erat a tortor sagittis, quis mollis turpis aliquet. Vestibulum in tellus ut mi sollicitudin cursus. Aenean mollis mauris vitae augue faucibus, ut ultrices tortor gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vel sapien facilisis, volutpat magna luctus, venenatis lectus. Fusce lectus libero, vehicula vitae feugiat nec, auctor et erat.</p>
          <ProductYouMayAlsoLike/>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}
