import Layout from '../components/layout.js';
import DownloadButton from "../components/utilityComponents/downloadButton.js";
import { Inter } from "next/font/google";
import Link from "next/link.js"

const inter = Inter({ subsets : ["latin"] })

export default function Resources() {
    return(        
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-10">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        Resources
                    </h1>
                </div> 
                <div className = "my-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Teaching Materials */}
                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            General
                        </h2>
                        {/* Removed list-disc and list-inside. Using custom bullet with flexbox for hanging indent. */}
                        <ul className="list-none">
                            <li className="flex items-start mb-2">
                                {/* Bullet point as a separate span, aligned with the start of the flex item */}
                                <span className="mr-2 text-gray-700">•</span>
                                {/* Content wrapped in a div to allow it to wrap under itself */}
                                <div>
                                    <Link
                                        href="https://econ.now/"
                                        className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    > EconNow:
                                    </Link>
                                    &nbsp; Maybe the most interesting new aggregator for professional/academic economist, by <Link href="https://x.com/aniketapanjwani" className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100">Aniket Panjwani</Link>
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 2</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 3</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 4</div>
                            </li>
                        </ul>
                    </div>
                    {/* Data Visualization */}
                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Data Visualization
                        </h2>
                        {/* Corrected HTML: li elements must be inside a ul/ol. Applied hanging indent styling. */}
                        <ul className="list-none">
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                        href="https://www.datawrapper.de/blog/colors-for-data-vis-style-guides"
                                        className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    > A long commentary and examples of color use in data viz
                                    </Link>
                                    &nbsp; by Lisa Charlotte Muth
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 2</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 3</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                        href= "https://github.com/joshuaylevy/projectTemplatesSnips/tree/main/theme_personal"
                                        className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100">
                                            theme_personal:
                                    </Link>
                                    &nbsp; how I think about data viz
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* Class Notes (commented out in original, keeping it that way) */}
                    {/* <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Class Notes
                        </h2>
                        <ul className="list-disc list-inside">
                        <li>
                                <Link
                                    href="https://www.nytimes.com"
                                    className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                > Link:
                                </Link>
                                &nbsp;to the New York Times
                                </li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                        </ul>
                    </div> */}
                    {/* For Undergrads */}
                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            For Undergrads
                        </h2>
                        <ul className="list-none">
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                        href="https://sfs.georgetown.edu/carroll-round/"
                                        className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    > Carroll Round:
                                    </Link>
                                    &nbsp;an in-person conference opportunity for undergrads
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                    href="https://gsb-faculty.stanford.edu/susan-athey/professional-advice/"
                                    className="text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100">
                                        Susan Athey
                                    </Link>
                                    &nbsp; on applying to grad school
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                            href="https://predoc.org/"
                                            className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    >
                                        PREDOC:
                                    </Link>
                                        &nbsp;job-opportunities for a future research career
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                            href="https://predoc.org/"
                                            className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    >
                                        EconRA Guide:
                                    </Link>
                                        &nbsp;a guide and notes on applying to a pre-doc
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Reflections of a Former Pre-Doc</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Low-Hanging Fruit: Thoughts on Economics PhD Applications</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>On Being a Better Social Scientist</div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Coding &amp; Workflow
                        </h2>
                        <ul className="list-none">
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                        href="https://web.stanford.edu/~gentzkow/research/CodeAndData.pdf"
                                        className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    > Coding and Data for the Social Sciences: A Practitioner&apos;s Guide
                                    </Link>
                                    &nbsp;by Gentzkow and Shaprio, a classic in the genre
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>
                                    <Link
                                        href="https://bashirmohammad.github.io/RAGuide/intro.html"
                                        className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                    >
                                            How to Get Stuff Done: A Handbook for Research Assistants and Coauthors 
                                    </Link>
                                    &nbsp; by Bashi, Best, and Caloi, another valuable guide on workflows and tools
                                </div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 3</div>
                            </li>
                            <li className="flex items-start mb-2">
                                <span className="mr-2 text-gray-700">•</span>
                                <div>Item 4</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </Layout>
        )
}
