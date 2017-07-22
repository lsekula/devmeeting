export interface Item {
    id: number;
    name: string;
    description: string;
    img: string;
    promo: boolean;
}

export const ItemsList: Item[]=[
    {
        id: 1,
        name: "Towar 1",
        description: "Opis 1",
        img: "http://lorempixel.com/200/199/",
        promo: false
    },
        {
        id: 2,
        name: "Towar 2",
        description: "Opis 2",
        img: "http://lorempixel.com/200/198/",
        promo: false
    },
    {
        id: 3,
        name: "Towar 3",
        description: "Opis 3",
        img: "http://lorempixel.com/199/200/",
        promo: false
    },

    {
        id: 4,
        name: "Towar 4 Promo",
        description: "Opis 4",
        img: "http://lorempixel.com/198/200/",
        promo: true
    },

    {
        id: 5,
        name: "Towar 5",
        description: "Opis 5",
        img: "http://lorempixel.com/201/200/",
        promo: false
    },
];