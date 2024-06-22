import { Inter } from 'next/font/google';
import { useState } from 'react';
import Link from 'next/link';
import SwivelChevronButton from './swivelAccordionButton';
import DownloadButton from './downloadButton';
import GeneralHoverButton from './generalHoverButton';

const inter = Inter({ subsets : ["latin"] })


export default function PaperDescriptionAccordion({ title, year, authorsList, abstract, paperStatus, journal, downloadPath, downloadTabOpt, otherButtons }){
    const [isActive, setIsActive] = useState(false);
    return(
        <div className = "flex flex-col justify-between border-gray-300 border-b mb-4 py-4">
            <div className = "grid grid-cols-12 justify-items-stretch items-end pb-3">
                <div className = "col-span-9 justify-self-start">
                    <h3 className = {`${inter.className} font-semibold text-2xl`}>
                        {title}
                    </h3>
                </div>
                <div className = "col-span-2 justify-self-end">
                    <h4 className = {`${inter.className} font-light text-lg`}>
                        {year}
                    </h4>
                </div>
                <div className = "col-span-1 justify-self-end">
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
                            <Link
                                href = {author.authorWebsiteLink}
                                target = {author.authorWebsiteLinkNewTabOpt? "_blank" : ""}
                                className = "hover:text-blue-500 ease-in duration-100"
                            >
                                {author.authorName}
                            </Link>
                        </div>
                    )
                })}
                <div>
                    |
                </div>
                <div>
                    <p className="font-base text-md italic"> {journal} </p>
                </div>
                <div>
                    <p className="font-base text-md"> {paperStatus} </p>
                </div>
            </div>
            <div className = {`${isActive ? "max-h-auto" : "max-h-0"} ${inter.className} overflow-hidden transition-[max-height]  duration-200 `}>
                <div className='flex flex-col space-y-3'>
                    <div className = "">
                        <p className = "text-justify">
                            {abstract}
                        </p>
                    </div>
                    <div className = "flex flow-row justify-items-start space-x-4 overflow-hidden py-5">
                        <DownloadButton
                            linkTarget = {downloadPath}
                            newTabOpt = {downloadTabOpt}
                        />
                        {otherButtons.map((button, index) => {
                            return(
                                <div key = {index}>
                                <GeneralHoverButton
                                    buttonText = {button.buttonText}
                                    link = {button.buttonLink}
                                    newTabOpt = {button.buttonNewTabOpt}
                                />
                                </div>
                            )
                        })}
{/* 
                        <GeneralHoverButton
                            buttonText = "Blog"
                            link = "/"
                            newTabOpt = {true}
                        /> */}
                    </div>

                </div>


            </div>
            
            

        </div>
    )

}