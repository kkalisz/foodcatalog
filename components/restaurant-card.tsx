import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Star, MapPin } from "lucide-react"

interface Restaurant {
  id: number
  name: string
  category: string
  rating: number
  reviewCount: number
  image: string
  address: string
  cuisine: string[]
  priceRange: string
}

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* Image */}
        <div className="relative h-48 bg-muted overflow-hidden">
          <img
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {restaurant.priceRange}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name and Rating */}
          <div className="mb-3">
            <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">{restaurant.name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">{restaurant.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({restaurant.reviewCount})</span>
            </div>
          </div>

          {/* Cuisine Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {restaurant.cuisine.slice(0, 2).map((cuisine) => (
              <span key={cuisine} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                {cuisine}
              </span>
            ))}
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{restaurant.address}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
