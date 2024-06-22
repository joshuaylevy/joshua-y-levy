import Link from 'next/link';
import Image from 'next/image'
import { useRouter }  from 'next/router';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

    const router = useRouter();
    const links = [
        { label : 'CV', href : '/cv'},
        { label : 'Research', href : '/research'},
        { label : 'Thoughts', href : '/blog'},
        { label : 'Resources', href : '/resources'}
    ];

    return(
       <nav className="my-6">
            <div className = "flex flex-row justify-between items-center mx-0 my-5 w-full max-h-20 relative">
                <div>
                    <div className = "self-auto max-h-full max-w-full justify-self-start relative">
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
                <div className = "flex flex-row justify-end space-x-16 w-full max-w-9/12">
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
            </div>

{/* 
            <ul className="flex flex-row justify-between items-center max-w-4xl mx-auto p-5 ">
                {links.map(({ label, href }) => (
                    <li key = {href}>
                        <Link href= {href}>
                            <p
                                className = {`${
                                    router.pathname === href ? 'text-blue-400 font-bold text-2xl' : 'text-gray-800 text-2xl'
                                } hover: text-white`}
                            >
                                {label}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul> */}
        </nav>

            
        
    )
}