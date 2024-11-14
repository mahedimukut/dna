import React from 'react'
import ArrowAngle from "@/public/assets/icons/arrow-angle.svg"
import HeroImg from "@/public/assets/images/hero.svg"
import GroupImg from "@/public/assets/images/group.svg"
import { inter } from '@/app/fonts/fonts'

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-red-600/15 via-blue-700/15 to-white/15 rounded-xl flex items-center justify-between pl-[60px]">
        <div className='bg-[#FAFFFF] px-8 py-[52px] rounded-[10px] flex flex-col gap-10'>
            <div className='flex flex-col gap-3 w-full'>
                <h1 className='font-normal text-[60px] leading-[65px]'>Your Trusted <br /> Partner in <span className='font-semibold text-[#434A9F]'>Home Financing</span></h1>
                <p className='w-2/3 font-normal text-[20px] leading-7 text-[#5C5C5C] pr-10'>Expert advice, personalized service, and a seamless loan process.</p>
            </div>
            <div className='flex flex-col gap-3 items-start'>
                <p className={`${inter.className} text-base leading-8 font-medium`}>If you are looking for Refinance or Buy a new property?</p>
                <button className='flex flex-row items-center rounded-[10px] gap-1 bg-[#ED1C24] text-white py-3 pr-2 pl-[26px] font-medium transition-all duration-300 transform  hover:bg-[#434A9F]'>Let&apos;s Schedule <ArrowAngle /></button>
            </div>
        </div>
        <div className='mt-[-45px] ml-[-20px] mr-[-40px]'><GroupImg /></div>
    </div>

  )
}

export default Hero