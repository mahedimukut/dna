import React from 'react'
// Importing ArrowAngle SVG icon and Group image
import ArrowAngle from "@/public/assets/icons/arrow-angle.svg"
import GroupImg from "@/public/assets/images/group.svg"
// Importing the 'inter' font from the fonts folder
import { inter } from '@/app/fonts/fonts'

const Hero: React.FC = () => {
  return (
    // Main container with a gradient background, rounded corners, and flex layout
    <div className="bg-gradient-to-br from-red-600/15 via-blue-700/15 to-white/15 rounded-xl flex items-center justify-between pl-[60px]">
        
        {/* Left Section: Contains the heading and paragraph */}
        <div className='bg-[#FAFFFF] px-8 py-[52px] rounded-[10px] flex flex-col gap-10'>
            
            {/* Heading section: Title and description of the hero section */}
            <div className='flex flex-col gap-3 w-full'>
                <h1 className='font-normal text-[60px] leading-[65px]'>
                    Your Trusted <br /> Partner in <span className='font-semibold text-custom-blue'>Home Financing</span>
                </h1>
                <p className='w-2/3 font-normal text-[20px] leading-7 text-[#5C5C5C] pr-10'>
                    Expert advice, personalized service, and a seamless loan process.
                </p>
            </div>

            {/* Additional Text and Call-to-action Button */}
            <div className='flex flex-col gap-3 items-start'>
                
                {/* Small description text using the inter font */}
                <p className={`${inter.className} text-base leading-8 font-medium`}>
                    If you are looking for Refinance or Buy a new property?
                </p>

                {/* Button to schedule, contains an icon on the right */}
                <button className='flex flex-row items-center rounded-[10px] gap-1 bg-custom-red text-white py-3 pr-2 pl-[26px] font-medium transition-all duration-300 transform hover:bg-custom-blue text-[20px] leading-[22px]'>
                    Let&apos;s Schedule <ArrowAngle />
                </button>
            </div>
        </div>

        {/* Right Section: Group Image */}
        <div className='mt-[-45px] ml-[-20px] mr-[-40px]'>
            <GroupImg />
        </div>

    </div>
  )
}

export default Hero;
