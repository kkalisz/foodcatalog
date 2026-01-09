export type Dish = {
    id: string;
    name: string;
    price: number;
    description?: string;
    ingriediens?: string;
    imageUrl?: string;
}

export type Category = {
    id: string;
    name: string;
    dishes: Dish[];
}
