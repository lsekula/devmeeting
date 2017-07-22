export interface Item {
    id: number;
    name: string;
    description: string;
    img: string;
    promo: boolean;
    price: number;
    tags:string[];
}

export const ItemsList: Item[] = [
    {
        id: 1,
        name: 'Okno',
        description: "Opis 1",
        img: "http://lorempixel.com/200/199/",
        promo: false,
        price: 23.2,
        tags: ['białe', 'pcv', 'czerwone']
    },
        {
        id: 2,
        name: "Jabłko",
        description: "Opis 2",
        img: "http://lorempixel.com/200/198/",
        promo: false,
        price: 43.2,
        tags:['czerwone', 'dojrzałe']
    },
    {
        id: 3,
        name: "Opona",
        description: "Opis 3",
        img: "http://lorempixel.com/199/200/",
        promo: false,
        price: 13.2,
        tags:['Letnie', 'zimowe']
    },

    {
        id: 4,
        name: "Auto Promo",
        description: "Opis 4",
        img: "http://lorempixel.com/198/200/",
        promo: true,
        price: 123,
        tags:['BMW', 'Audi']
    },

    {
        id: 5,
        name: "Rower",
        description: "Opis 5",
        img: "http://lorempixel.com/201/200/",
        promo: false,
        price: 243.2,
        tags:['pedał', 'łańczuch', 'tag10', 'tag11']
    },
];