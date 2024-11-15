import React from 'react';
import { inter } from '@/app/fonts/fonts';
import CTA from "@/public/assets/icons/cta.svg";  // Importing the CTA icon (SVG format)
import Link from 'next/link';

const Cta: React.FC = () => {
  return (
    <div className='flex w-full text-white gap-x-4 mb-[30px]'>
      
      {/* Left section: Heading and description */}
      <div className='bg-custom-blue px-[30px] py-[40px] rounded-xl flex items-center justify-between w-[80%]'>
        {/* Heading */}
        <h1 className='text-[50px] leading-[60px] font-normal'>
          Book for your <br />
          <span className='font-semibold'>Free consultation</span>
        </h1>
        
        {/* Description text */}
        <p className={`${inter.className} text-xl font-normal pr-8`}>
          Get the <span className='font-bold'>Best Price</span> & <br />
          Coverage for All Your <br /> Property Needs
        </p>
      </div>
      
      {/* Right section: CTA button (icon) */}
      <div className='bg-custom-blue py-[40px] px-[30px] rounded-xl flex items-center justify-center w-[20%]'>
        
        {/* Link to Contact page with hover effects on the CTA icon */}
        <Link className='transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out' href={"/contact"}>
          {/* CTA icon (SVG) */}
          <CTA />
        </Link>
      </div>

    </div>
  );
}

export default Cta;