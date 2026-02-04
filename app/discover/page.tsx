"use client"

import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import { RestaurantCard } from "@/components/restaurant-card"
import { Timestamp } from "firebase/firestore"

import { usePublickRestaurants } from "@/data/hooks/usePublickRestaurants"
import { PageSizeWrapper } from "@/components/ui/wrapper"
import PageLoader from "@/components/ui/loader/PageLoader"
import { useTranslation } from "react-i18next"
import EmptySearchContainer from "@/components/ui/containers/EmptySearchContainer"

export default function DiscoverPage() {
  const { loading, resteurants, setSearchQuery, searchQuery } = usePublickRestaurants()
  const { t } = useTranslation()

  if (loading && resteurants.length === 0) {
    return (
      <PageLoader>
        <p>{t("discover_page.loading")}</p>
      </PageLoader>
    )
  }
  return (
    <main className="min-h-screen bg-background">
      {loading && resteurants.length === 0 ? <EmptySearchContainer
        tittle={t("discover_page.no_results")}
        description={t("discover_page.try_adjusting")} /> :
        <PageSizeWrapper>
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">{t("discover_page.header")}</h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t("discover_page.subheader")}
            </p>
          </div>
          <div className="mb-6 sm:mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder={t("discover_page.search_placeholder")}
                className="pl-10 h-12 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-6">
          </div>
          <div className="mb-6">
            <p className="text-xs sm:text-sm text-muted-foreground">
            </p>
          </div>
          {/* Restaurant Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {resteurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.createdAt}
                restaurant={{
                  ...restaurant,
                  createdAt: Timestamp.fromMillis(restaurant.createdAt)
                }} />
            ))}
          </div>
        </PageSizeWrapper>}
    </main >)
}
