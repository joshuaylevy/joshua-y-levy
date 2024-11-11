import Layout from "../../../components/layout.js";
import Link from "next/link.js";
import matter from "gray-matter"; 
import { Inter } from "next/font/google";
import { getPostsMetaData } from "../../../scripts/blog/loadPosts.js";
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
        //Need to include logic for omitting non-published posts
        var postSlug = "/blog/posts/"+post.slug;   
        liveSlugs.push(postSlug)
    })
    return {
        paths: liveSlugs,
        fallback: false
    };
}


export default function Post({ postsMetadata }) {
    return
}
