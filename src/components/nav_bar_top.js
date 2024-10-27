import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react';
import { Inter } from 'next/font/google';
import HamburgerButton from './utilityComponents/hamburgerButton';


const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);
    const links = [
        { label : 'Home', href : '/' }, 
        { label : 'CV', href : '/cv' },
        { label : 'Research', href : '/research' },
        { label : 'Thoughts', href : '/blog' },
        { label : 'Resources', href : '/resources' }
    ];

    return(
       <nav className="my-6 self-stretch self-center max-w">
            <div className = "flex flex-row justify-between items-center mx-0 my-5 w-full max-h-20 relative">
                <div>
                    <div className = "self-auto max-h-full max-w-full justify-self-start relative scale-0 md:scale-100 lg:scale-100">
                        <Link href = "/">
                            <Image
                                // src = "/Shield_RegUse_Blk_RGB.png"
                                src = "/Shield_SmUse_Blk_RGB.png"
                                alt = "USC shield logo mark"
                                width = {56}
                                height = {64}
                                className = "object-scale-down"
                            />
                        </Link>
                    </div>
                </div>
                <div className = "hidden md:flex md:flex-row md:flex-wrap md:justify-end lg:flex lg:flex-row lg:flex-wrap lg:justify-end space-x-16 w-full max-w-9/12">
                    {links.map(({ label, href }) => (
                        <div key = {href}>
                            <Link href = {href}>
                                <p
                                    className = {`${inter.className} font-medium hover:-translate-y-1 ease-in duration-200`}
                                >
                                    {label}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className = "md:hidden lg:hidden">
                    <div className = "justify-self-end">
                        <button onClick={() => setIsActive(!isActive)} className = "justify-self-end">
                            <HamburgerButton
                                size = {22}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <div className = {`${isActive ? "max-h-auto" : "max-h-0"} ${inter.className} overflow-hidden border-gray-400 border-b`}>
                    <div className = "flex flex-col">
                        {links.map(({ label, href }) => (
                            <div key = {href} className='center my-3 text-2xl'>
                                <Link href = {href}>
                                    <p
                                        className = {`${inter.className} font-medium hover:-translate-y-1 ease-in duration-200`}
                                    >
                                        {label}
                                    </p>
                                </Link>
                            </div>
                        ))}
                    </div>
                    
            </div>

        </nav>

            
        
    )
}