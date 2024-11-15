import Image from 'next/image';
import React from 'react';
import HappyClient from "@/public/assets/images/happy-clients.png";
import { inter } from '@/app/fonts/fonts';

// Define the type for the tags array
const tags: string[] = [
  "Single Family",
  "Town Home",
  "Condominium",
  "Multi-Family",
  "Mobile/Manufactured",
  "Others",
];

const ReFinancing: React.FC = () => {
  return (
    <div className="my-[30px] flex items-end w-full">
      {/* Text & Tags Section */}
      <div className="flex-1">
        <div className="flex flex-col gap-3">
          <h1 className="font-normal text-[60px] leading-[75px]">
            Looking for<br />
            <span className="font-semibold text-custom-blue">Refinance.</span>
          </h1>
          <p className={`font-normal ${inter.className} text-[20px] leading-7 text-[#717171] pr-[8rem]`}>
            Lower your interest rates, reduce monthly payments, and save more on your mortgage. Refinancing can help you achieve financial flexibility and secure a better deal.
          </p>
        </div>
        
        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 mt-10 w-[66.66%]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#F1F1F1] px-[18px] py-[10px] rounded-[8px] text-[#606065] font-medium text-[20px] leading-7"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-1 justify-end">
        <Image src={HappyClient} alt="Happy Client" layout="intrinsic" />
      </div>
    </div>
  );
};

export default ReFinancing;
