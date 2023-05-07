import Link from 'next/link'
import Image from 'next/image'
import HoverCard from './hoverCard.js'
import { Inter } from 'next/font/google';
import { Space_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
const monoSpace = Space_Mono({ subsets: ['latin'] , weight : ["400"]})

export default function Footer(){
    const footerLinks = [
        { label : 'CV',  description : 'This is a placeholder CV description', href : '/cv'},
        { label : 'Research',  description : 'This is a placeholder research description', href : '/research'},
        { label : 'Thoughts',  description : 'This is a placeholder thoughts description', href : '/blog'},
        { label : 'Resources',  description : 'This is a placeholder resources description', href : '/resources'}
    ];

    return(
        <div className="flex flex-col items-center space-y-12">
            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {footerLinks.map(({ href, label, description }) => (
                    <div key = {href} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                        <HoverCard
                            href = {href}
                            desc = {description}
                            label = {label}
                        />
                    </div>
                ))}
            </div>
            <div className = {`${monoSpace.className} bg-center text-grey-800 text-sm`}>
               <p>
                H S S H D O L
               </p>
               <p>
               N Y I K C R A
               </p>
               <p>
               D D N G A D X
               </p>
            </div>
        </div>



    )
}