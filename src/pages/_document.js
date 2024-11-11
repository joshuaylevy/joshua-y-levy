import { Html, Head, Main, NextScript} from 'next/document'
import Link from 'next/link'



const customKaTeXDisplayStyling = ".katex-display {display:block; margin:1em 0;text-align:center;align-self:center}"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"/>
       */}
        {/* <link rel="stylesheet" src="styles."/> */}


        {/* Adding KaTeX Stylings to make math render nicely. Note that in order to get the ```math``` display mode to "center" in the middle of a page, I had to add the extra custom styling (Basically adding the "align-self: center" option) */}
        {/* <link rel="preload" href="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css" integrity="sha384-wcIxkf4k558AjM3Yz3BBFQUbk/zgIYC2R0QpeeYb+TwlBVMrlgLqwRjRtGZiK7ww" crossOrigin="anonymous"/> */}
        <script src="https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js" integrity="sha384-hIoBPJpTUs74ddyc4bFZSM1TVlQDA60VBbJS0oA934VSz82sBx1X7kSx2ATBDIyd" crossOrigin="anonymous"></script>
        <style>
          {customKaTeXDisplayStyling}
        </style>



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
