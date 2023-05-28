import fs from 'fs';

export async function getPostSlugs() {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith("mdx"));
    const slugs = markdownPosts.map((file) => file.replace(".mdx", ""));
    return slugs
}

export function getPostsSlugs() {
    
}
