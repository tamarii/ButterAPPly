export const richDudes = [
    {
        firstName: "Bill Gates",
        worth: "$115B",
        birthYear: 1955,
        source: "microsoft",
        country: "USA",
        img: "https://specials-images.forbesimg.com/imageserve/59d502f931358e542c034e76/200x200.jpg?background=000000&cropX1=245&cropX2=2420&cropY1=636&cropY2=2813"
    }, {
        firstName: "Warren Buffett",
        worth: "$108B",
        birthYear: 1931,
        source: "Berkshire Hathaway",
        country: "USA",
        img: "https://specials-images.forbesimg.com/imageserve/59d5055931358e542c034ead/200x200.jpg?background"
    }, {
        firstName: "Mark Zuckerberg",
        worth: "$134.5B",
        birthYear: 1984,
        source: "Facebook",
        country: "USA",
        img: "https://specials-images.forbesimg.com/imageserve/59d5062131358e542c034eb7/200x200.jpg?background"
    }, {
        firstName: "Larry Ellison",
        worth: "$91B",
        birthYear: 1945,
        source: "Sun, Oracle",
        country: "USA",
        img: "https://specials-images.forbesimg.com/imageserve/59d5069b31358e542c034ec1/200x200.jpg?background"
    }, {
        firstName: "Michael Bloomberg",
        worth: "$82B",
        birthYear: 1942,
        source: "Bloomberg",
        country: "USA",
        img: "https://specials-images.forbesimg.com/imageserve/58c1d278a7ea431f321add1f/200x200.jpg?background="
    },
    {
        firstName: "Bernard Arnault",
        worth: "$172.9B",
        birthYear: 1949,
        source: "Paris",
        country: "France",
        img: "images/richrich/BernardArnault.jpg"
    },
    {
        firstName: "Elon Musk",
        worth: "$168.5B",
        birthYear: 1971,
        source: "Texas",
        country: "USA",
        img: "images/richrich/ElonMusk.jpg"
    },
    {
        firstName: "Jeff Bezos",
        worth: "$114.5B",
        birthYear: 1964,
        source: "Washington",
        country: "USA",
        img: "images/richrich/JeffBezos.jpg"
    }
];
export class richMen {
    firstName;
    worth;
    birthYear;
    source;
    country;
    img;
    constructor(firstName, worth, birthYear, source, country, img) {
        this.firstName = firstName;
        this.worth = worth;
        this.birthYear = birthYear;
        this.source = source;
        this.country = country;
        this.img = img;
    }
}
