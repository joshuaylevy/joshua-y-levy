import Layout from "../../components/layout.js";
import DownloadButton from "../../components/utilityComponents/downloadButton.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets : ["latin"] })


export default function CV() {
    return(        
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-10">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        CV
                    </h1>
                </div>

                <div className = "flex flex-row justify-start items-center my-2 space-x-4">
                    <div className = "text-lg">
                        Last updated: May 21st, 2023
                    </div>
                    <div>
                        <DownloadButton
                            linkTarget = "/"
                            newTabOpt = {true}
                        />
                    </div>
                </div>
                <div className = "my-10 lg:scale-100 md:scale-0 sm:scale-0 lg:h-auto md:h-0 sm:h-0">
                    <object data = "/JoshuaLevy_CV.pdf" type = "application/pdf" width = "100%" height = "700px">
                        <p>
                            Unable to load .PDF
                        </p>
                    </object>
                </div>

            </div>
        </Layout>
        )
}   