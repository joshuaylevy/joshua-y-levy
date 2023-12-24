import Layout from "../../components/layout.js";
import Link from "next/link.js";
import matter from "gray-matter"; 
import { Inter } from "next/font/google";
import { getPostsMetaData } from "/posts/lib/loadPosts.js";
// import { getPost } from "/posts/lib/getPost.js";
import { usePathname } from "next/navigation"


const inter = Inter({ subsets : ["latin"]})


export async function getStaticProps() {
    const postsMetadata = await getPostsMetaData();
    return {
        props : {postsMetadata}
    };
}

export async function getStaticPaths() {
    // Tells Next what pages to render at build time
    const postsMetadata = await getPostsMetaData(); 
    var liveSlugs = [];
    postsMetadata.map((post) => {
        var postSlug = "/blog/"+post.slug;   
        liveSlugs.push(postSlug)
    })
    return {
        paths: liveSlugs,
        fallback: false
    };
}

// const thisPage = usePathname();
// const thisPageSlug = thisPage.replace("/blog/", "");
// console.log(thisPageSlug)
// const thisPostPath = "posts/" + thisPageSlug + ".mdx";
// const thisPostMDX = fs.readFileSync(path, 'utf-8');
// const thisPostGrayMatter = matter(thisPostMDX)
// const thisPostMetaData = thisPostGrayMatter.data

// var thisPost = getPost(thisPageSlug);
// var thisPostMarkdown = thisPost.markdown;
// var thisPostMetaData = thisPost.metadata;

export default function Post({ children, postsMetadata }) {
    
    console.log(postsMetadata)
    console.log(children )

    // console.log(thisPostMarkdown)
    // console.log(thisPostMetaData)

    // var title = thisPostMetaData.title
    return (
        <Layout>
            <div className = "flex flex-col w-full mt-16">
                <div className = "my-10">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        Test TItle
                    </h1>
                </div>
            </div>
        </Layout>
    )
}