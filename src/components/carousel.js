import {CarouselBigBox, CarouselSmallBox, CarouselTallBox, CarouselWideBox} from './carouselBoxes'


export default function Carousel({}) {
    return(
        <div className = "h-80 border-red-500 border-2 w-full max-w-8xl py-6 m-16 mt-0 grid grid-cols-12 grid-rows-6 gap-2">
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

        </div>
    )
}