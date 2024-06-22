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
                            <li>Item 4</li>
                    </div>

                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            Classnotes
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

                    <div>
                        <h2 className = {`${inter.className} font-bold text-2xl my-2`}>
                            For Undergrads
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
                </div>
            </div>
            
        </Layout>
        )
}