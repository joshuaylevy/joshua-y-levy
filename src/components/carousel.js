import {CarouselBigBox, CarouselSmallBox, CarouselTallBox, CarouselWideBox} from './carouselBoxes'

const boxDimensions = {
    big : {
        cols : 3,
        rows : 6
    },
    small : {
        cols: 2,
        rows: 3
    },
    wide : {
        cols: 4,
        rows: 3
    },
    tall : {
        cols: 2,
        rows: 6
    },
}

// eventually this is going to be an API call that fetches 
// a sample of things that are eligible to go in the carousel
let displayObjects = [
    {
        title : "Paper 1",
        short_title : "Pap1",
        first_size_pref : "big",
        second_size_pref : "wide"
    },
    {
        title : "Paper 2",
        short_title : "Pap2",
        first_size_pref : "big",
        second_size_pref : "small"
    },
    {
        title : "Blog post 1",
        short_title : "blog1",
        first_size_pref : "wide",
        second_size_pref : "small"
    },
    {
        title : "img 1",
        short_title : "img1",
        first_size_pref : "small",
        second_size_pref : "big"
    },
    {
        title : "img 2",
        short_title : "img2",
        first_size_pref : "small",
        second_size_pref : "small"
    },
    {
        title : "Blog post 2",
        short_title : "Blog 2",
        first_size_pref : "tall",
        second_size_pref : "wide"
    },
]

function carouselTiling( potentialObjects ) {
    // displayObjects.map(({ title, first_size_pref, second_size_pref }) =>
    //     console.log(title);
    //     console.log(first_size_pref);
    //     first_size_pref_cols = boxDimensions.get(first_size_pref).get('cols')
    //     console.timeLog
    
    // ) 

    potentialObjects.forEach(tile => {
        console.log(tile.title)
        console.log(tile.first_size_pref)
        let first_size_pref_cols = boxDimensions[tile.first_size_pref]['cols'];
        let first_size_pref_rows = boxDimensions[tile.first_size_pref]['rows']
        console.log(`PREFERRED COLS: ${first_size_pref_cols}`)
        console.log(`PREFERRED ROWS: ${first_size_pref_rows}`)
        console.log(tile.second_size_pref)
        let second_size_pref_cols = boxDimensions[tile.second_size_pref]['cols']
        let second_size_pref_rows = boxDimensions[tile.second_size_pref]['rows']
        console.log(`FALLBACK COLS: ${second_size_pref_cols}`)
        console.log(`FALLBACK ROWS: ${second_size_pref_rows}`)
        
        console.log("+===========+")
    });
}

carouselTiling(displayObjects)


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