"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, MessageSquare, Star, Edit2 } from "lucide-react"

interface Restaurant {
  id: number
  name: string
  status: string
  views: number
  reviews: number
  rating: number
  image: string
}

interface RestaurantsListProps {
  restaurants: Restaurant[]
  onEdit: (restaurant: Restaurant) => void
}

export function RestaurantsList({ restaurants, onEdit }: RestaurantsListProps) {
  return (
    <div className="space-y-4">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.id} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Image */}
            <div className="w-full sm:w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={restaurant.image || "/placeholder.svg"}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="font-bold text-lg text-foreground">{restaurant.name}</h3>
                <div className="flex items-center gap-4 text-sm mt-2">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      restaurant.status === "active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {restaurant.status === "active" ? "Active" : "Inactive"}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  <span>
                    <strong className="text-foreground">{restaurant.views}</strong> views
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    <strong className="text-foreground">{restaurant.reviews}</strong> reviews
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 sm:flex-col">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onEdit(restaurant)}
                className="flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" />
                <span className="hidden sm:inline">Edit</span>
              </Button>
              <Button size="sm" variant="ghost">
                View
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
