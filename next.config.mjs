import remarkFrontmatter from "remark-frontmatter";
// import nextMDX from "@next/mdx";
import createMDX from "@next/mdx";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";



const withMDX = createMDX({
  extension :  /\.mdx?$/,
  options : {
    remarkPlugins : [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: []
  }
}
)
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // experimental: {
  //   mdxRs: true,
  // },
};
 
// module.exports = withMDX(nextConfig);
export default withMDX(nextConfig)