import React from 'react'
import { inter } from '@/app/fonts/fonts';

const HappyClients: React.FC = () => {
  return (
    <div className='flex gap-5 pt-[30px]'>
        {/* Empowering Financial Futures Section */}
        <div className='w-2/6 bg-[#F8F8F8] rounded-xl font-light text-[32px] leading-[42px] flex items-center justify-center p-[58px]'>
            <h1>
                Empowering <br />
                <span className='font-semibold'>Financial Futures</span>
            </h1>
        </div>
        
        {/* Stats Section */}
        <div className='w-4/6 flex bg-[#F8F8F8] rounded-xl gap-20 items-center justify-center'>
            {/* $20B+ Settled Loans */}
            <div>
                <h1 className='font-semibold text-black text-[73px] leading-[50px]'>
                    $20<span className='text-custom-red'>B+</span>
                </h1>
                <p className={`${inter.className} font-bold text-base text-[#606065] mt-7`}>
                    Settled loans <span className='font-medium'>with <br />Australian banks</span>
                </p>
            </div>
            
            {/* 1k+ Referral Partners */}
            <div>
                <h1 className='font-semibold text-black text-[73px] leading-[50px]'>
                    1k<span className='text-custom-red'>+</span>
                </h1>
                <p className={`${inter.className} font-bold text-base text-[#606065] mt-7`}>
                    Referral Partners <span className='font-medium'>in<br /> our Network</span>
                </p>
            </div>
            
            {/* 150k+ Clients Connected */}
            <div>
                <h1 className='font-semibold text-black text-[73px] leading-[50px]'>
                    150<span className='text-custom-red'>k+</span>
                </h1>
                <p className={`${inter.className} font-bold text-base text-[#606065] mt-7`}>
                    Clients <span className='font-medium'>connected <br /> to banks</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default HappyClients;
