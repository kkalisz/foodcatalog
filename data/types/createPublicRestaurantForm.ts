export type CreatePublicRestaurantForm = {
    name: string
    city: string
    phone: string
    category: string[]
    shortDescription: string
    coverImage?: string
    delivery: boolean
}