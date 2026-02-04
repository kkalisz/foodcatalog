import { CreateRestaurantForm } from "./restaurants"

export type Firm = {
    restaurants: CreateRestaurantForm[]
    ownerId: string,
    name: string,
    createdAt: Date,
}