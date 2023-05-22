import Layout from "@/components/layout.js";
import DownloadButton from "@/components/utilityComponents/downloadButton.js";
import PaperDescriptionAccordion from "@/components/utilityComponents/paperDescAccordion.js";
import { Inter } from "next/font/google";


const inter = Inter({ subsets : ["latin"] })


let examplePapers = [
    {
        title : "Working paper title 1: evidence from test",
        year : 2023,
        authors : ["Joshua Levy", "test"],
        abstract : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!"
    },
    {
        title : "Second working paper title: theory and practice",
        year : 2023,
        authors : ["Joshua Levy", "test"],
        abstract : "orem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!"
    }
]

export default function Research() {
    return(
        <Layout>
            <div className = "flex flex-col w-full my-16">
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
                {examplePapers.map((paper, index) => {
                    return(
                        <PaperDescriptionAccordion
                            key = {index}
                            title = {paper.title}
                            year = {paper.year}
                            authorsList = {paper.authors}
                            abstract = {paper.abstract}
                        />
                    )
                })}
            </div>
        </Layout>
    )
}