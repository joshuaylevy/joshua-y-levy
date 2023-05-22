import Layout from "../../components/layout.js";
import DownloadButton from "../../components/utilityComponents/downloadButton.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets : ["latin"] })

export default function Research() {
    return(
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-10">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        Research
                    </h1>
                </div>
                <div className = "my-10">
                    <h2 className =  {`${inter.className} font-bold text-3xl`}>
                        Working Papers
                    </h2>
                </div>
            </div>
        </Layout>
    )
}