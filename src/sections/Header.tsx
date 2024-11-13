import React from 'react'
import Logo from "@/public/assets/images/logo.svg"
import ArrowDown from "@/public/assets/icons/arrow-down.svg"
import Link from 'next/link'

const Header = () => {
    const navLinks = [
        { item: "About Us", links: "/about-us", submenu: "false" },
        { item: "Home Loans", links: "/home-loans", submenu: "true" },
        { item: "Refinancing", links: "/refinancing", submenu: "true" },
        { item: "Business Loans", links: "/business-loans", submenu: "true" },
        { item: "Vehicle Loans", links: "/vehicle-loans", submenu: "true" },
        { item: "Personal Loans", links: "/personal-loans", submenu: "true" },
    ];

    return (
        <header className='py-[28px] flex items-center justify-between'>
            <Link href={"/"}><Logo /></Link>
            <nav>
                <ul className='flex gap-5'>
                    {navLinks.map((sItem, index) => (
                        <li key={index} className='text-[#606065] font-medium text-base leading-8 hover:text-black transition-all'>
                            <Link href={sItem.links} className='flex gap-2 items-center group'>
                                {sItem.item}
                                {sItem.submenu === "true" && (
                                    <span className="transition-transform duration-300 group-hover:text-black group-hover:rotate-180">
                                        <svg
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current text-[#606065] group-hover:text-black"
                                        >
                                            <path d="M17.5146 8.29492L12.9246 12.8749L8.33456 8.29492L6.92456 9.70492L12.9246 15.7049L18.9246 9.70492L17.5146 8.29492Z" />
                                        </svg>
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <button className="bg-[#ED1C24] py-[10px] px-5 text-[#FFFFFF] text-[20px] leading-[21px] rounded-[10px] font-medium text-center transition-all duration-300 transform  hover:bg-[#434A9F] hover:shadow-lg hover:shadow-[background: #434A9F]/50">
                <Link href="/contact">
                    Free Consultation <br />
                    Book Now
                </Link>
            </button>
        </header>
    )
}

export default Header;
