import matter from 'gray-matter';
import fs from 'fs';

export async function getPost(slug) {
    var thisPostPath = "posts/" + slug  + ".mdx";
    var thisPostMDX = fs.readFileSync(thisPostPath, 'utf-8');
    var thisPostGrayMatter = matter(thisPostMDX);
    var thisPostMetaData = thisPostGrayMatter.data

    return {
        metadata : thisPostMetaData, 
        markdown : thisPostGrayMatter 
    }
}