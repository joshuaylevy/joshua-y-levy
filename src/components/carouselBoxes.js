import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

function CarouselBigBox({ title, key }) {

    return(
        <div key = {key} className = {`col-span-3 row-span-6 ${inter.className} font-semibold text-2xl px-5 py-4 rounded-lg border hover:border-gray-300 hover:bg-gray-100`}>
            { title }
        </div>
    )

};

function CarouselSmallBox({ title, key }) {
    return(
        <div key = {key} className = {`col-span-2 row-span-3 font-semibold text-lg px-5 py-4 rounded-lg border hover:border-gray-300 hover:bg-gray-100`}>
            { title }
        </div>
    )
};

function CarouselTallBox({ title, key }) {
    return(
        <div key = {key} className = {`col-span-2 row-span-6 font-semibold text-lg px-5 py-4 rounded-lg border hover:border-gray-300 hover:bg-gray-100`}>
            { title }
        </div>
    )
};

function CarouselWideBox({ title, key }) {
    return(
        <div key = {key} className = {`col-span-4 row-span-3 font-semibold tex-lg px-5 py-4 rounded-lg border hover:border-gray-300 hover:bg-gray-100`}>
            { title }
        </div>
    )
};


export { CarouselBigBox, CarouselSmallBox, CarouselTallBox, CarouselWideBox };