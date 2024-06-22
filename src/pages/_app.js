import '@/styles/globals.css'
import "@/styles/atom-one-dark-hljs.css"
import Head from 'next/head.js'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Joshua Y. Levy</title>
      </Head>
      <Component {...pageProps} />
    </>
)
}
