import Layout from "../../components/layout.js";
import { Inter } from "next/font/google";
// import { Document } from "react-pdf";

const inter = Inter({ subsets : ["latin"] })


export default function CV() {
    return(        
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-5">
                    <h1 className = {`${inter.className} font-bold text-3xl`}>
                        CV
                    </h1>
                </div>

                <object data = "/JoshuaLevy_CV.pdf" type = "application/pdf" width = "100%" height = "700px" className = "my-10">
                    <p>
                        Unable to load .PDF
                    </p>
                </object>

            </div>
        </Layout>
    )
}