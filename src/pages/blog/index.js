import Layout from "../../components/layout.js";
import { Inter } from "next/font/google";
import { getPostSlugs } from "/posts/lib/loadPosts.js";

const inter = Inter({ subsets : ["latin"] })



export async function getStaticProps() {
    const slugs = await getPostSlugs();
    return {
        props: { slugs }
      };
  }


export default function Blog({ slugs }) {
    return (
        <Layout>
            <div className = "flex flex-col w-full my-16">
                <div className = "my-10">
                    <h1 className = {`${inter.className} font-bold text-4xl`}>
                        Thoughts
                    </h1>
                </div>
            </div>
            {slugs.map((slug) => {
                return(
                    <div key = {slug}>
                        {slug}
                    </div>
                )
            })}


        </Layout>
    )
}