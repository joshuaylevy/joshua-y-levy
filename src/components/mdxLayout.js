import Navbar from './nav_bar_top.js';
import Footer from './footer.js'
import { MDXProvider } from '@mdx-js/react';
import { Heading } from "./mdxComponents/heading.js"
import Para from "./mdxComponents/para.js"

const components = {
    h1: Heading.H1,
    h2: Heading.H2,
    p: Para,
  };
  
export default function Layout ({children, ...props}) {

    return (
        <div className="flex flex-col px-24 min-h-screen">
            <Navbar />
            <main>
                <div className="flex flex-col place-items-start justify-between mx-24 max-w-8xl">
                <MDXProvider components={components}>
                    {children}
                </MDXProvider>
                </div>
            </main>
            <Footer />
        </div>
    )
}