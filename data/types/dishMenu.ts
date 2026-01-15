export type Dish = {
    id: string;
    name: string;
    price: number;
    description?: string;
    ingriediens?: string;
    imageUrl?: string;
}



export type Category = {
    name: string;
    id: string;
    dishes: Dish[]
}
export type MenuForm = {
    categories: Category[];
}

