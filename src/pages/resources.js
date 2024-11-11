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
                            Teaching Materials
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
                    </div>
                    {/* Data Visualization */}
                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Data Visualization
                        </h2>
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
                            <li>
                                <Link
                                    href= "https://github.com/joshuaylevy/projectTemplatesSnips/tree/main/theme_personal"
                                    className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100">
                                        theme_personal:
                                </Link>
                                &nbsp; how I think data viz
                            </li>
                    </div>
                    {/* Class Notes */}
                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Class Notes
                        </h2>
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
                    </div>
                    {/* For Undergrads */}
                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            For Undergrads
                        </h2>
                        <li>
                            <Link
                                href="https://sfs.georgetown.edu/carroll-round/"
                                className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                            > Carroll Round:
                            </Link>
                            &nbsp;an in-person conference opportunity for undergrads
                        </li>
                        <li>
                            <Link
                                    href="https://predoc.org/"
                                    className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                            >
                                PREDOC:
                            </Link>
                                &nbsp;job-opportunities for a future research career
                        </li>
                        <li>
                            <Link
                                    href="https://predoc.org/"
                                    className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                            >
                                EconRA Guide:
                            </Link>
                                &nbsp;a guide and notes on applying to a pre-doc
                        </li>
                        <li>
                            Reflections of a Former Pre-Doc
                        </li>
                        <li>
                            Low-Hanging Fruit: Thoughts on Economics PhD Applications
                        </li>
                        <li>
                            On Being a Better Social Scientist
                        </li>
                    </div>

                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Coding &amp; Workflow
                        </h2>
                        <li>
                                <Link
                                    href="https://web.stanford.edu/~gentzkow/research/CodeAndData.pdf"
                                    className = "text-gray-700 underline underline-offset-4 hover:text-blue-500 ease-in duration-100"
                                > Coding and Data for the Social Sciences: A Practitioner&apos;s Guide
                                </Link>
                                &nbsp;by Gentzkow and Shaprio, a classic in the genre
                                </li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                            <li>Item 4</li>
                    </div>
                </div>
            </div>
            
        </Layout>
        )
}