import React from 'react'
// Importing the Logo component (SVG image) and Link component from Next.js
import Logo from "@/public/assets/images/logo.svg"
import Link from 'next/link'
// Importing the custom 'inter' font from the fonts folder
import { inter } from '@/app/fonts/fonts'

// Type definition for the navLinks array items
interface NavLink {
    item: string;        // The name of the navigation item
    links: string;       // The link URL for the item
    submenu: "true" | "false"; // Whether the item has a submenu (true/false)
}

const Header: React.FC = () => {
    // Array of navigation links, including a submenu indicator
    const navLinks: NavLink[] = [
        { item: "About Us", links: "/about-us", submenu: "false" },
        { item: "Home Loans", links: "/home-loans", submenu: "true" },
        { item: "Refinancing", links: "/refinancing", submenu: "false" },
        { item: "Business Loans", links: "/business-loans", submenu: "true" },
        { item: "Vehicle Loans", links: "/vehicle-loans", submenu: "true" },
        { item: "Personal Loans", links: "/personal-loans", submenu: "true" },
    ];

    return (
        // Main header container with padding and flex layout to space out logo and nav items
        <header className='py-[28px] flex items-center justify-between'>
            
            {/* Logo: Clicking redirects to the homepage */}
            <Link href={"/"}>
                <Logo />
            </Link>
            
            {/* Navigation Section: Contains a list of navigation links */}
            <nav>
                <ul className='flex gap-5'>
                    {navLinks.map((sItem, index) => (
                        <li key={index} className={`text-[#606065] font-medium text-base leading-8 hover:text-black transition-all ${inter.className}`}>
                            {/* Each link item wraps the navigation item name */}
                            <Link href={sItem.links} className='flex gap-2 items-center group'>
                                {sItem.item}
                                
                                {/* Display a submenu icon if the item has a submenu */}
                                {sItem.submenu === "true" && (
                                    <span className="transition-transform duration-300 group-hover:text-black group-hover:rotate-180">
                                        <svg
                                            width="25"
                                            height="24"
                                            viewBox="0 0 25 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current text-[#606065] group-hover:text-black"
                                        >
                                            {/* Downward arrow icon for the submenu */}
                                            <path d="M17.5146 8.29492L12.9246 12.8749L8.33456 8.29492L6.92456 9.70492L12.9246 15.7049L18.9246 9.70492L17.5146 8.29492Z" />
                                        </svg>
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
            {/* Button to navigate to the contact page with a call-to-action */}
            <button className="bg-custom-red py-[10px] px-5 text-white text-[20px] leading-[21px] rounded-[10px] font-medium text-center transition-all duration-300 transform hover:bg-custom-blue hover:shadow-lg hover:shadow-custom-blue/50">
                {/* The 'Link' component wraps the button text to make it clickable */}
                <Link href="/contact">
                    Free Consultation <br />
                    Book Now
                </Link>
            </button>
        </header>
    )
}

export default Header;
