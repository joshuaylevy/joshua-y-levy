import Footer from './footer.js'
import Navbar from './nav_bar_top.js';
import { MDXProvider } from '@mdx-js/react';
import { Heading } from "./mdxComponents/heading.js"
import { Footnote, FootnoteRef } from './mdxComponents/footnote.js';
import FootnoteBoxText from './mdxComponents/footNoteBoxText';
import { FootnoteProvider } from './mdxComponents/footnoteContext.js';
import { BaseStylings } from './mdxComponents/baseStylings.js';
import { Image } from './mdxComponents/image.js';
import { List } from './mdxComponents/list.js';
import NextImage from 'next/image';


const components = {
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    p: BaseStylings.Para,
    a: BaseStylings.LinkInLine,
    pre: BaseStylings.Pre,
    blockquote: BaseStylings.BlockQuote,
    ul: List.Unordered,
    ol: List.Ordered,
    li: List.Item,
    img: Image,
    Footnote,
    FootnoteRef,
    FootnoteBoxText
  };
  
export default function Layout ({children, heroImage, heroAlt = "a", heroWide = false, title, ...metaRemains}) {
    console.log(heroImage)
    console.log(heroAlt)

    return (
        <div className="flex flex-col mx-auto px-24 min-h-screen max-w-6xl">
            <Navbar />
            <main>
                {heroImage && (
                    <div className={`relative ${heroWide ? '' : 'max-w-4xl mx-auto'} mb-10`}>
                        <NextImage
                            src={heroImage}
                            alt={heroAlt}
                            width={800}
                            height={450}
                            priority
                            style={{ width: "100%", height: "auto", "max-height": "400px"}}
                            className="rounded-xl shadow-md object-cover"
                            />
                    </div>
                )}
                {/* <h1 className="mt-4 mb-2 text-4xl font-bold">{title}</h1> */}
                <div className="flex flex-col place-items-start justify-between mx-auto my-10 max-w-3xl">
                    <FootnoteProvider>
                        <MDXProvider components={components}>
                            <div className="flex flex-col w-full">
                                {children}
                            </div>
                        </MDXProvider>
                    </FootnoteProvider>
                </div>
            </main>
            <Footer />
        </div>
    )
}