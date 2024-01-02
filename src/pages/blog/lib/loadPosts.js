import matter from 'gray-matter';
import { format } from 'date-fns';
import fs from 'fs';

export async function getPostsMetaData() {
    const folder = "src/pages/blog/posts/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith("mdx"));
    
    console.log(markdownPosts)

    return markdownPosts.map((post) => {
        const path = folder + post
        const slug = post.replace(".mdx", "")
        const postFile = fs.readFileSync(path, 'utf-8')
        
        
        const grayMatter = matter(postFile)
        // console.log(grayMatter)
        const metadata = grayMatter.data
        console.log(metadata)


        return {
            title : metadata.title,
            author : metadata.author,
            preview : metadata.preview,
            date : metadata.publishedDate,
            slug : slug
        }
    })

}