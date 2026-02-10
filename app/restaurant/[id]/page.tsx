'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Star, MapPin, Phone, Clock, Globe, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { RestaurantMap } from '@/components/restaurant-map'
import { useTranslation } from 'react-i18next'

import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/client'

type Dish = {
  id: string
  name: string
  price: number
  description?: string
}

type Category = {
  id: string
  name: string
  dishes: Dish[]
}

const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [reviewText, setReviewText] = useState('')
  const [userRating, setUserRating] = useState(0)
  const [menu, setMenu] = useState<Category[]>([])
  const { t } = useTranslation()

  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    if (!id) return

    const fetchRestaurant = async () => {
      try {
        const ref = doc(db, 'public_restaurants', id)
        const snapshot = await getDoc(ref)
        if (snapshot.exists()) {
          setRestaurant({ id: snapshot.id, ...snapshot.data() })
        }
      } catch (error) {
        console.error('Error fetching restaurant:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchRestaurant()

    const fetchMenu = async () => {
      try {
        const menuRef = doc(db, 'public_restaurants', id, 'menu', 'main')

        const menuSnap = await getDoc(menuRef)
        if (menuSnap.exists()) {
          setMenu(menuSnap.data().categories || [])
        } else {
          setMenu([])
        }
      } catch (error) {
        console.error('Error fetching menu:', error)
      }
    }
    fetchMenu()
  }, [id])
  const handleSubmitReview = () => {
    setReviewText('')
    setUserRating(0)
  }

  if (loading) {
    return <p className="p-6">{t('restaurant_detail.loading')}</p>
  }

  if (!restaurant) {
    return <p className="p-6">{t('restaurant_detail.not_found')}</p>
  }

  if (!id) return

  return (
    <main className="min-h-screen bg-background">
      {/* Header Image - Mobile optimized */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-muted overflow-hidden">
        <img
          src={restaurant.coverImage || null}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <Link
          href="/discover"
          className="absolute top-4 left-4 bg-background/80 hover:bg-background rounded-full p-2 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Restaurant Info - Mobile: stacked, Tablet+: grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Main Info */}
          <div className="md:col-span-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              {restaurant.name}
            </h1>
            <h2></h2>
            {/* Rating */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-lg sm:text-xl font-bold text-foreground">
                  {restaurant.rating}
                </span>
              </div>
              <span className="text-sm text-muted-foreground">
                ({restaurant.reviewCount} {t('restaurant_detail.reviews')})
              </span>
              <span className="text-xs sm:text-sm bg-muted text-muted-foreground px-2.5 py-1 rounded">
                {restaurant.category}
              </span>
            </div>

            {/* Description */}

            {/* Cuisine Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {restaurant.cuisine?.map((c: string) => (
                <span
                  key={c}
                  className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Card - Mobile: full width at top, Tablet+: sidebar */}
          <Card className="p-4 sm:p-6 h-fit md:col-span-1 order-first md:order-last">
            <h3 className="font-bold text-base sm:text-lg mb-4">
              {t('restaurant_detail.contact_info')}
            </h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t('restaurant_detail.address')}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    {restaurant.city}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t('restaurant_detail.phone')}
                  </p>
                  <a
                    href={`tel:${restaurant.phone}`}
                    className="text-sm sm:text-base font-medium text-primary hover:underline"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {t('restaurant_detail.opening_hours')}
                  </p>
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    {restaurant.hours}
                  </p>
                </div>
              </div>

              {/* Website */}
              {restaurant.website && (
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {t('restaurant_detail.website')}
                    </p>
                    <a
                      href={`https://${restaurant.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-medium text-primary hover:underline truncate"
                    >
                      {restaurant.website}
                    </a>
                  </div>
                </div>
              )}

              <Button className="w-full mt-6 text-sm sm:text-base h-10 sm:h-11">
                {t('restaurant_detail.reserve_table')}
              </Button>
            </div>
          </Card>
          <Card>
            <p className="p-2 ">{restaurant.shortDescription}</p>
          </Card>
        </div>

        {/* Menu Section */}
        <div className="mb-8 sm:mb-10 border p-5  pb-8 sm:pb-10 rounded-lg bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            {t('restaurant_detail.our_menu')}
          </h2>
          {menu.length === 0 ? (
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('restaurant_detail.menu_not_available')}
            </p>
          ) : (
            menu.map((category) => (
              <div key={category.id} className="mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  {category.name}
                </h3>
                <div className="space-y-6">
                  {category.dishes.map((dish) => (
                    <div
                      key={dish.id}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <h4 className="text-lg sm:text-xl font-medium text-foreground">
                          {dish.name}
                        </h4>
                        {dish.description && (
                          <p className="text-sm sm:text-base text-muted-foreground mt-1">
                            {dish.description}
                          </p>
                        )}
                      </div>
                      <span className="text-sm sm:text-base font-medium text-foreground">
                        {Number(dish.price).toFixed(2)} zł
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Map and Reviews - Mobile: stacked, Desktop: grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Map - Mobile: below reviews, Desktop: sidebar */}
          <Card className="md:col-span-1 p-3 sm:p-4 order-last md:order-first">
            <h3 className="font-bold text-base sm:text-lg mb-4">
              {t('restaurant_detail.location')}
            </h3>
            <RestaurantMap
              lat={restaurant.lat}
              lng={restaurant.lng}
              name={restaurant.name}
            />
          </Card>

          {/* Reviews Section */}
          <div className="md:col-span-2 space-y-6">
            {/* Write Review */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-4">
                {t('restaurant_detail.rate_us')}
              </h3>

              {/* Rating */}
              <div className="mb-4">
                <label className="text-xs sm:text-sm font-medium text-foreground block mb-3">
                  {t('restaurant_detail.rating')}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setUserRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-7 h-7 sm:w-8 sm:h-8 ${
                          star <= userRating
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-4">
                <label className="text-xs sm:text-sm font-medium text-foreground block mb-2">
                  {t('restaurant_detail.your_review')}
                </label>
                <Textarea
                  placeholder={t('restaurant_detail.describe_experience')}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="min-h-20 sm:min-h-24 text-sm"
                />
              </div>

              <Button
                onClick={handleSubmitReview}
                disabled={!reviewText || userRating === 0}
                className="w-full text-sm sm:text-base h-10 sm:h-11"
              >
                {t('restaurant_detail.add_review')}
              </Button>
            </Card>

            {/* Reviews List */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-6">
                {t('restaurant_detail.recent_reviews')}
              </h3>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
export default RestaurantPage
