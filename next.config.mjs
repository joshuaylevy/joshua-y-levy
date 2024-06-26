import remarkFrontmatter from "remark-frontmatter";
// import nextMDX from "@next/mdx";
import createMDX from "@next/mdx";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'

const withMDX = createMDX({
  extension :  /\.mdx?$/,
  options : {
    remarkPlugins : [remarkFrontmatter, remarkMdxFrontmatter, remarkMath],
    rehypePlugins: [rehypeKatex, rehypeHighlight]
  }
}
)

// Math support from KaTeX: https://katex.org/
// Help: https://mdxjs.com/guides/math/

// Syntax highlighting
// Demos available here: https://highlightjs.org/demo
// Downloadable and subsequently customizable .css files here https://highlightjs.org/demo



/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  // experimental: {
  //   mdxRs: true,
  // },
};
 
// module.exports = withMDX(nextConfig);
export default withMDX(nextConfig)