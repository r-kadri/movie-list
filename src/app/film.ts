export interface Film {
    title: string;
    year: number;
    director: string;
    actors: string[];
}

export const FILMS: Film[] = [
    {
        "title": "Inception",
        "year": 2010,
        "director": "Christopher Nolan",
        "actors": [
            "Joseph Gordon-Levitt",
            "Leonardo DiCaprio",
            "Ellen Page"
        ]
    }, {
        "title": "The dark Knight rises",
        "year": 2012,
        "director": "Christopher Nolan",
        "actors": [
            "Christian Bale",
            "Michael Caine",
            "Gary Oldman",
            "Marion Cotillard",
            "Joseph Gordon-Levitt"
        ]
    }, {
        "title": "Child 44",
        "year": 2015,
        "director": "Daniel Espinosa",
        "actors": [
            "Tom Hardy",
            "Noomi Rapace",
            "Gary Oldman",
            "Vincent Cassel"
        ]
    }
];