import React from 'react';
import { inter } from '@/app/fonts/fonts';
import Image from 'next/image';
import CTA from "@/public/assets/icons/cta.png";
import Link from 'next/link';

const Cta: React.FC = () => {
  return (
    <div className='flex w-full text-white gap-x-4 mb-[30px]'>
      <div className='bg-custom-blue px-10 py-[30px] rounded-xl flex items-center justify-between w-5/6'>
        <h1 className='text-[50px] leading-[60px] font-normal'>
          Book for your <br />
          <span className='font-semibold'>Free consultation</span>
        </h1>
        <p className={`${inter.className} text-xl font-normal`}>
          Get the <span className='font-bold'>Best Price</span> & <br />
          Coverage for All Your <br /> Property Needs
        </p>
      </div>
      <div className='bg-custom-blue px-10 py-[30px] rounded-xl flex items-center justify-center w-1/6'>
        <Link className='transition-all transform hover:scale-110 hover:rotate-12 duration-300 ease-in-out' href={"/contact"}>
            <Image src={CTA} alt='Arrow' />
        </Link>
      </div>
    </div>
  );
}

export default Cta;
