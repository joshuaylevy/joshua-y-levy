import Layout from "../../components/layout.js";
import DownloadButton from "../../components/downloadButton.js";
import { Inter } from "next/font/google";
// import { Document } from "react-pdf";

const exampleList = [
    {title: "TITLE HOLDER"},
    {title: "TITLE HOLDER"},
    {title: "TITLE HOLDER"},
    {title: "TITLE HOLDER"},
]


export default function CV() {
    return(        
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-5">
                    <h1 className = {`${inter.className} font-bold text-3xl`}>
                        CV
                    </h1>
                </div>

                <div>
                    <DownloadButton
                        linkTarget = "/"
                        newTabOpt = {true}
                    />
                </div>
                <object data = "/JoshuaLevy_CV.pdf" type = "application/pdf" width = "100%" height = "700px" className = "my-10 lg:scale-100 md:scale-0 sm:scale-0">
                    <p>
                        {title}
                    </p>
                </div>
            ))}
        </Layout>
    )
}