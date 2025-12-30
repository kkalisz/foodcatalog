import { Timestamp } from "next/dist/server/lib/cache-handlers/types"
import { Key } from "readline"

export type PublicRestaurant = {
    id: string,
    name: string,
    phone: string,
    slug: string,
    city: string,
    category: string,
    shortDescription: string,
    coverImage?: string
    rating?: string
    reviewsCount?: string
    status?: string
    firmId?: string
    restaurantId?: string
    delivery: boolean
    createdAt: Timestamp
}