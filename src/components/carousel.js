import {
  CarouselBigBox,
  CarouselSmallBox,
  CarouselTallBox,
  CarouselWideBox,
} from "./carouselBoxes";

const boxDimensions = {
  big: {
    cols: 3,
    rows: 6,
  },
  small: {
    cols: 2,
    rows: 3,
  },
  wide: {
    cols: 4,
    rows: 3,
  },
  tall: {
    cols: 2,
    rows: 6,
  },
};

// eventually this is going to be an API call that fetches
// a sample of things that are eligible to go in the carousel
let displayObjects = [
  {
    title: "Paper 1",
    short_title: "Pap1",
    first_size_pref: "big",
    second_size_pref: "wide",
  },
  {
    title: "Paper 2",
    short_title: "Pap2",
    first_size_pref: "big",
    second_size_pref: "small",
  },
  {
    title: "Blog post 1",
    short_title: "blog1",
    first_size_pref: "wide",
    second_size_pref: "small",
  },
  {
    title: "img 1",
    short_title: "img1",
    first_size_pref: "small",
    second_size_pref: "big",
  },
  {
    title: "img 2",
    short_title: "img2",
    first_size_pref: "small",
    second_size_pref: "small",
  },
  {
    title: "Blog post 2",
    short_title: "Blog 2",
    first_size_pref: "tall",
    second_size_pref: "wide",
  },
];


let carouselBoxOptions = [
  CarouselBigBox,
  CarouselSmallBox,
  CarouselTallBox,
  CarouselWideBox,
];

function getRandomComponent() {
    let randomNum = Math.floor(Math.random() * carouselBoxOptions.length);
    return carouselBoxOptions[randomNum];
}


export default function Carousel({}) {
  return (
    <div className="h-80 border-red-500 border-2 w-full max-w-8xl py-6 m-16 mt-0 grid grid-flow-col-dense grid-row-12 grid-rows-6 gap-2">
      {displayObjects.map((tile, index) => {
        const RandomComponent = getRandomComponent();
        return (
            <RandomComponent
                key = {index}
                title = {tile.title}
            />         
        )
      })}
      
    </div>
  );
}
