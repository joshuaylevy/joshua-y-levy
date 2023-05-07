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

    console.log(router.pathname)
    return(
       <nav className="my-6">
            <div className = "flex flex-row justify-between items-center max-w-4xl mx-auto pt-5 max-h-10">
                <Image
                    // src = "/Shield_RegUse_Blk_RGB.png"
                    src = "/Shield_SmUse_Blk_RGB.png"
                    alt = "USC shield logo mark"
                    // width = {345}
                    // height = {388}
                    width = {172}
                    height = {195}
                    className = ""
                />
                {links.map(({ label, href }) => (
                    <div key = {href}>
                        <Link href = {href}>
                            <p
                                className = {`${inter.className} font-semibold`}
                            >
                                {label}
                            </p>
                        </Link>
                    </div>
                ))}
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