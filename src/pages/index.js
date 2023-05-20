import Image from 'next/image'
import Footer from '../components/footer'
import { CarouselBigBox, CarouselSmallBox, CarouselTallBox, CarouselWideBox
 } from '../components/carouselBoxes';
import { Inter } from 'next/font/google'
import { IoLogoTwitter } from 'react-icons/io'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-24 lg:pt-12 lg:pb-8 md:px-2">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get in touch with me&nbsp;
          <code className="font-mono font-bold">
            <a
              href = "mailto:joshua.levy676@gmail.com"
            >
              here
            </a>
          </code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://twitter.com/JoshuaYLevy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow me on{' '} <IoLogoTwitter size={20}/>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center m-16 after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <div className = "relative flex flex-row flex-wrap flex-grow gap-10 justify-evenly">
          <div className = "lg:scale-100 lg:max-w-none md:scale-0 md:max-w-0">
            <Image
              src = "/profile_picture_narrow.jpg"
              alt = "Joshua Levy Profile Picture"
              width = {400}
              height = {600}
              className = "rounded-2xl"
            />
          </div>
          <div className = "relative flex flex-col justify-around  max-w-md content-end lg:pt-0 md:pt-10">

            <div>
              <h1 className = "text-5xl font-bold text-wrap flex self-start">
                Joshua Y. Levy
              </h1>  
            </div>
            <div className = "self-auto">
              <p className = "text-justify">
                I am currently a Research Professional working for Luigi Zingales at the University of Chicago&apos;s Booth School of Business and the Stigler Center. I am also an incoming Economics PhD student at the University of Southern California. My research interests lie at the intersection of spatial economics and political economy but I&apos;m always excited to learn about other stuff too 😀
              </p>
            </div>
          </div>
        </div>
      </div>

    <div className = "h-80 border-red-500 border-2 w-full max-w-8xl py-6 m-16 mt-0 grid grid-cols-12 grid-rows-6 gap-2">
      {/* <div className = "col-start-1 col-span-3 row-start-1 row-span-6 border-black border-2 rounded-lg" >
         BIG BOX    
      </div> */}

      <CarouselBigBox
        colStart = {1}
        rowStart = {1}
      />

      <CarouselSmallBox
        colStart = {4}
        rowStart = {1} 
      />
      <CarouselSmallBox
        colStart = {6}
        rowStart = {1} 
      />

      <CarouselWideBox
        colStart={4}
        rowStart={4}
      />

      <CarouselTallBox
        colStart={8}
        rowStart={1}
      />

      <CarouselBigBox
        colStart={10}
        rowStart={1}
      />

{/* 
      <div className = "col-start-4 col-span-2 row-start-1 row-span-3 border-black border-2 rounded-lg">
        SMALL BOX
      </div>

      <div className = "col-start-6 col-span-2 row-start-1 row-span-3 border-black border-2 rounded-lg">
        SMALL BOX
      </div>
      
      <div className = "col-start-4 col-span-4 row-start-4 row-span-3 border-black border-2 rounded-lg">
        WIDE BOX
      </div>

      <div className = "col-start-8 col-span-2 row-start-1 row-span-6 border-black border-2 rounded-lg">
        TALL BOX
      </div>

      <div className = "col-start-10 col-span-3 row-start-1 row-span-6 border-black border-2 rounded-lg" >
         BIG BOX    
      </div> */}


    


    </div>


      <Footer/>
    </main>
  )
}
