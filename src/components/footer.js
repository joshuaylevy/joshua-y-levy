import Link from 'next/link'
import Image from 'next/image'
import HoverCard from './hoverCard.js'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


export default function Footer(){
    const footerLinks = [
        { label : 'CV',  description : 'This is a placeholder CV description', href : '/cv'},
        { label : 'Research',  description : 'This is a placeholder research description', href : '/research'},
        { label : 'Thoughts',  description : 'This is a placeholder thoughts description', href : '/blog'},
        { label : 'Resources',  description : 'This is a placeholder resources description', href : '/resources'}
    ];
    console.log("Footer links are: ")
    console.log(footerLinks)

    return(
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            {footerLinks.map(({ href, label, description }) => (
                <div key = {href}>
                    <HoverCard
                        href = {href}
                        desc = {description}
                        label = {label}
                    />
                </div>
            ))}
        </div>


    )
}