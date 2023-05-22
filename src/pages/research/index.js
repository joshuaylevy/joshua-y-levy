import Layout from "../../components/layout.js";
import DownloadButton from "../../components/downloadButton.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets : ["latin"] })

export default function Research() {
    return(
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-5">
                    <h1 className = {`${inter.className} font-bold text-3xl`}>
                        Research
                    </h1>
                </div>
            </div>

            <div>
                Test
            </div>
        </Layout>
    )
}