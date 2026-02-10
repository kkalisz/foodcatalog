'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Star, MapPin } from 'lucide-react'
import { Timestamp } from 'firebase/firestore'
import { useTranslation } from 'react-i18next'
import { restaurantImage } from '@/data/constans/icons'

interface Restaurant {
  id?: string
  name: string
  slug?: string
  city: string
  category?: string
  shortDescription?: string
  coverImage?: string | null
  rating?: string
  reviewsCount?: string
  status?: string
  firmId?: string
  restaurantId?: string
  delivery?: boolean
  createdAt?: Timestamp
}

interface RestaurantCardProps {
  restaurant: Restaurant
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const { t } = useTranslation()

  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        {/* Image */}
        <div className="relative h-48 bg-muted overflow-hidden">
          <img
            src={restaurant.coverImage || restaurantImage}
            alt={restaurant.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {t('restaurant_card.price_range')}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name and Rating */}
          <div className="mb-3">
            <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="font-semibold text-foreground">
                  {restaurant.rating}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({restaurant.reviewsCount})
              </span>
            </div>
          </div>

          {/* Cuisine Tags */}
          <div className="flex flex-wrap gap-1 mb-3">{restaurant.category}</div>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className="line-clamp-2">{restaurant.city}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
