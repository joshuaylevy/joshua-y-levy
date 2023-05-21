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

class TreeNode {
    constructor(tile) {
        this.cols_pref = boxDimensions[tile.first_size_pref]['cols']
        this.rows_pref = boxDimensions[tile.first_size_pref]['rows']
        this.cols_fb = boxDimensions[tile.second_size_pref]['cols']
        this.rows_fb = boxDimensions[tile.second_size_pref]['rows']

        // this.carouselStructure = [
        //     [0,0,0,0,0,0,0,0,0,0,0,0],
        //     [0,0,0,0,0,0,0,0,0,0,0,0],
        //     [0,0,0,0,0,0,0,0,0,0,0,0],
        //     [0,0,0,0,0,0,0,0,0,0,0,0],
        //     [0,0,0,0,0,0,0,0,0,0,0,0],
        //     [0,0,0,0,0,0,0,0,0,0,0,0]
        // ]

        this.descendants = [];
        this.parent = NULL;
        this.root = NULL;
    }

}