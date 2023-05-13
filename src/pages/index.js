import Image from 'next/image'
import Footer from '../components/footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className = "relative flex flex-row space-x-10">
          <div>
            <Image
              src = "/profile_picture_narrow.jpg"
              alt = "Joshua Levy Profile Picture"
              width = {400}
              height = {600}
              className = "rounded-2xl"
            />
          </div>
          <div className = "relative flex flex-col justify-between space-y-5 max-w-sm content-end">
            <div>
              <h1 className = "text-5xl font-bold text-justify">
                Joshua Y. Levy
              </h1>  
            </div>
            <div className = "bg-neutral-300 rounded-lg self-auto">
              <p>
                My name is Joshua Levy.
              </p>
            </div>
            <div className = "self-auto">
              <p className = "text-justify">
                I am currently a Research Professional working for Luigi Zingales at the University of Chicago&apos;s Booth School of Business and the Stigler Center. I am also an incoming Economics PhD student at the University of Southern California. My research interests lie at the intersection of spatial economics and political economy but I'm always excited to learn about other stuff too 😀
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
