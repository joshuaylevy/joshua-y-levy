import Navbar from './nav_bar_top.js';
import Footer from './footer.js'
import { MDXProvider } from '@mdx-js/react';
import { Heading } from "./mdxComponents/heading.js"
import { BaseStylings } from './mdxComponents/baseStylings.js';


const components = {
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    p: BaseStylings.Para,
    a: BaseStylings.LinkInLine,
    pre: BaseStylings.Pre,
    blockquote: BaseStylings.BlockQuote
  };
  
export default function Layout ({children, ...props}) {

    return (
        <div className="flex flex-col mx-auto px-24 min-h-screen max-w-6    xl">
            <Navbar />
            <main>
                <div className="flex flex-col place-items-start justify-between mx-auto  my-10 max-w-3xl">
                <MDXProvider components={components}>
                    {children}
                </MDXProvider>
                </div>
            </main>
            <Footer />
        </div>
    )
}