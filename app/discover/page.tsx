"use client"

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import { RestaurantCard } from "@/components/restaurant-card"
import { Timestamp } from "firebase/firestore"



//Types
import { usePublickRestaurants } from "@/data/hooks/usePublickRestaurants"
import { PageSizeWrapper } from "@/components/ui/wrapper"


export default function DiscoverPage() {
  const { loading, resteurants, setSearchQuery, searchQuery, t } = usePublickRestaurants()
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground text-sm sm:text-base">Loading restaurants...</p>
      </main>
    )
  }
  return (
    <main className="min-h-screen bg-background">
      <PageSizeWrapper>
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">{t("discover_page_header")}</h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t("discover_page_subheader")}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={t("discover_page_add_restaurant_search")}
              className="pl-10 h-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters - Mobile Toggle and Desktop Always Visible */}
        <div className="mb-6">

        </div>

        {/* Results Info */}
        <div className="mb-6">
          <p className="text-xs sm:text-sm text-muted-foreground">

          </p>
        </div>

        {/* Restaurant Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {resteurants.map((restaurant) => (
            <RestaurantCard key={restaurant.createdAt} restaurant={{ ...restaurant, createdAt: Timestamp.fromMillis(restaurant.createdAt) }} />
          ))}
        </div>
      </PageSizeWrapper>
      {resteurants.length === 0 ? <Card className="p-8 sm:p-12 text-center">
        <p className="text-sm sm:text-base text-muted-foreground mb-2">No restaurants found</p>
        <p className="text-xs sm:text-sm text-muted-foreground">Try adjusting your search or filters</p>
      </Card> : null}



    </main >)

}
