import Layout from "@/components/layout.js";
import DownloadButton from "@/components/utilityComponents/downloadButton.js";
import PaperDescriptionAccordion from "@/components/utilityComponents/paperDescAccordion.js";
import { Inter } from "next/font/google";


const inter = Inter({ subsets : ["latin"] })


let examplePapers = [
    {
        title : "Working paper title 1: evidence from test",
        year : 2023,
        // authors : ["Joshua Levy", "test"],
        authors : [
            {authorName : "Joshua Levy", authorWebsiteLink : "/", authorWebsiteLinkNewTabOpt : false},
            {authorName : "Filippo Lancieri", authorWebsiteLink : "/", authorWebsiteLinkNewTabOpt : true},
        ],
        abstract : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
        status : "Working paper",
        pubvenue : "Journal of Imaginary Studies",
        downloadPath : "/",
        downloadTabOpt : true,
        otherButtons: []
    },
    {
        title : "Second working paper title: theory and practice",
        year : 2023,
        authors : [
            {authorName : "Joshua Levy", authorWebsiteLink : "/", authorWebsiteLinkNewTabOpt : false},
            {authorName : "Filippo Lancieri", authorWebsiteLink : "/", authorWebsiteLinkNewTabOpt : true},
        ],
        abstract : "orem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis quaerat iure quos dolorum accusantium ducimus in illum vero commodi pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque quidem maiores doloremque est numquam praesentium eos voluptatem amet! Repudiandae, mollitia id reprehenderit a ab odit!",
        status : "Working paper",
        pubvenue : "Journal of Imaginary Studies",
        downloadPath : "/",
        downloadTabOpt : false,
        otherButtons : [
            {buttonText : "buttonText1", buttonLink: "/", buttonNewTabOpt : false}
        ]
    }
]

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
                {examplePapers.map((paper, index) => {
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