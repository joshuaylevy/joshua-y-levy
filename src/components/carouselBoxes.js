import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

function CarouselBigBox({ colStart, rowStart }) {

    return(
        <div className = {`col-start-${colStart} col-span-3 row-start-${rowStart} row-span-6 ${inter.className} font-semibold text-2xl px-5 py-4 rounded-lg border-blue-700 border-2`}>
            BIX BOX TEXT
        </div>
    )

};

function CarouselSmallBox({ colStart, rowStart }) {
    return(
        <div className = {`col-start-${colStart} col-span-2 row-start-${rowStart} row-span-3 font-semibold text-lg px-5 py-4 rounded-lg border-green-700 border-2`}>
            SMALL BOX TEXT
        </div>
    )
};

function CarouselTallBox({ colStart, rowStart }) {
    return(
        <div className = {`col-start-${colStart} col-span-2 row-start-${rowStart} row-span-6 font-semibold text-lg px-5 py-4 rounded-lg border-purple-700 border-2`}>
            TALL BOX TEXT
        </div>
    )
};

function CarouselWideBox({ colStart, rowStart }) {
    return(
        <div className = {`col-start-${colStart} col-span-4 row-start-${rowStart} row-span-3 font-semibold tex-lg px-5 py-4 rounded-lg border-orange-700 border-2`}>
            WIDE BOX TEXT
        </div>
    )
};


export { CarouselBigBox, CarouselSmallBox, CarouselTallBox, CarouselWideBox };