import Layout from '../components/layout.js';
import DownloadButton from "../components/utilityComponents/downloadButton.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets : ["latin"] })

export default function Resources() {
    return(        
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-5">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        Resources
                    </h1>
                </div> 
                <div className = "my-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <h2 className = {`${inter.className} font-bold text-2xl`}>
                        Header 1
                    </h2>
                    <h2 className = {`${inter.className} font-bold text-2xl`}>
                        Header 2
                    </h2>
                    <h2 className = {`${inter.className} font-bold text-2xl`}>
                        Header 3
                    </h2>
                </div>
            </div>
            
        </Layout>
        )
}