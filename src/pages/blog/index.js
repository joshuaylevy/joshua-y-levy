import Layout from "../../components/layout.js";
import Link from "next/link.js";
import { Inter } from "next/font/google";
import { getPostsMetaData } from "../../scripts/blog/loadPosts.js";

const inter = Inter({ subsets : ["latin"] })



export async function getStaticProps() {
    const postsMetadata = await getPostsMetaData();
    return {
        props: { postsMetadata }
      };
  }


export default function Blog({ postsMetadata }) {
    return (
        <Layout>
            <div className = "flex flex-col w-full">
                <div className = "my-10">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        Thoughts
                    </h1>
                </div>
            </div>
            <div className = "flex flex-col mb-5" >
                {postsMetadata.map((post) => {
                    return(
                        <div key = {post.slug} className = "my-5">
                            <Link
                                href = {`/blog/posts/${post.slug}`}
                                target = ""
                                className = {` ${inter.className} font-bold text-2xl hover:text-blue-500 ease-in duration-100`}
                            >
                                {post.title}
                            
                            </Link>
                            <div className="my-2">
                                {`${post.author}  |  ${post.date}`}
                            </div>
                            <div>
                                {post.preview}
                            </div>
                        </div>
                    )
                })}
            </div>


        </Layout>
    )
}