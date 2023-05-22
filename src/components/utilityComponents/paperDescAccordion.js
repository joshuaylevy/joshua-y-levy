import { Inter } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import SwivelChevronButton from './swivelAccordionButton';

const inter = Inter({ subsets : ["latin"] })


export default function PaperDescriptionAccordion({ title, year, authorsList, abstract }){
    const [isActive, setIsActive] = useState(false);
    return(
        <div className = "flex flex-col justify-between border-gray-300 border-b mb-4">
            <div className = "flex flex-row justify-between items-end pb-5">
                <div>
                    <h3 className = {`${inter.className} font-semibold text-2xl`}>
                        {title}
                    </h3>
                </div>
                <div>
                    <h4 className = {`${inter.className} font-light text-lg`}>
                        {year}
                    </h4>
                </div>
                <div>
                    <button onClick={() => setIsActive(!isActive)} className = {`${isActive && "rotate-90 duration-200"}`}>
                        <SwivelChevronButton
                            size = {20}
                        />
                    </button>
                </div>
            </div>

            <div className = "flex flex-row justify-start h-10 space-x-4">
                {authorsList.map((author, index) => {
                    return(
                        <div className = "h-10" key = {index}>
                            <p className = {`${inter.className} font-base text-md`}>
                                {author} 
                            </p>
                        </div>
                    )
                })}
            </div>
            {/* {isActive &&  */}
                <div className = {`${isActive ? "max-h-40" : "max-h-0"} ${inter.className} text-justify overflow-hidden transition-[max-height] duration-200`}>
                    <p>
                        {abstract}
                    </p>
                </div>
            {/* } */}
            
        </div>
    )

}