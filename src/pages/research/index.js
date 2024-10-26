import Layout from "@/components/layout.js";
import PaperDescriptionAccordion from "@/components/utilityComponents/paperDescAccordion.js";
import { Inter } from "next/font/google";
import { wp_list } from "./working_papers_db.js";

const inter = Inter({ subsets : ["latin"] })


// Importing databases of papers objects
let workingPapers = wp_list;


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
                {workingPapers.map((paper, index) => {
                    return(
                        <PaperDescriptionAccordion
                            key = {index}
                            title = {paper.title}
                            year = {paper.year}
                            authorsList = {paper.authors}
                            journal = {paper.pubvenue}
                            paperStatus = {paper.status}
                            abstract = {paper.abstract}
                            downloadPath = {paper.downloadPath}
                            downloadTabOpt = {paper.downloadTabOpt}
                            otherButtons = {paper.otherButtons}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}