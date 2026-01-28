"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Edit2, Trash } from "lucide-react"
import { PublicRestaurant } from "@/data/types/publicRestaurant"
import { deletePublicRestaurant } from "@/lib/firebase/restaurants"

type RestaurantsListProps = {
  restaurants: PublicRestaurant[]
}

export const RestaurantsList = ({ restaurants }: RestaurantsListProps) => {
  const router = useRouter()
  const handleDelete = async (restaurantId: string) => {
    if (!confirm("Are you sure you want to delete this restaurant?")) return
    try {
      await deletePublicRestaurant(restaurantId)
      alert("Restaurant deleted successfully")
      router.refresh()
    }
    catch (error) {
      console.error("Error deleting restaurant:", error)
    }
  }
  return (
    <div className="space-y-4">
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          className="p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Image */}
            <div className="w-full sm:w-32 h-32 bg-muted rounded-lg overflow-hidden">
              <img
                src={restaurant.coverImage || "/placeholder.svg"}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-bold text-lg">{restaurant.name}</h3>

              <div className="flex items-center gap-4 text-sm mt-2">
                <span
                  className={`px-2 py-1 rounded-full ${restaurant.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {restaurant.status}
                </span>

                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-semibold">{restaurant.rating}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 sm:flex-col">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  router.push(`/owner/restaurants/${restaurant.id}/edit`)
                }
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edytuj
              </Button>
              <Button onClick={() => router.push(`/owner/restaurants/${restaurant.id}/menu`)} >
                Dodaje / Edytuj menu
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(restaurant.id)}
              ><Trash className="w-4 h-4 mr-2" />Usuń</Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
