"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Eye, MessageSquare, TrendingUp, Plus, Settings, LogOut, Menu } from "lucide-react"
import { DashboardStats } from "@/components/dashboard-stats"
import { getOwnerSession, clearOwnerSession } from "@/lib/auth"

// Mock restaurant data for demo
const DEMO_RESTAURANTS = [
  {
    id: "1",
    name: "La Familia Trattoria",
    status: "active",
    views: 1203,
    reviews: 89,
    rating: 4.8,
    image: "/italian-restaurant-interior.jpg",
  },
  {
    id: "2",
    name: "Mama's Kitchen",
    status: "active",
    views: 1248,
    reviews: 56,
    rating: 4.6,
    image: "/cozy-kitchen.jpg",
  },
]

export default function OwnerDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [restaurants, setRestaurants] = useState(DEMO_RESTAURANTS)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const session = getOwnerSession()
    if (!session) {
      router.push("/owner/login")
    } else {
      setUser(session.user)
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    clearOwnerSession()
    router.push("/owner/login")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  const totalViews = restaurants.reduce((sum, r) => sum + r.views, 0)
  const totalReviews = restaurants.reduce((sum, r) => sum + r.reviews, 0)
  const avgRating = (restaurants.reduce((sum, r) => sum + r.rating, 0) / restaurants.length).toFixed(1)

  return (
    <main className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <div className="md:hidden border-b bg-card sticky top-0 z-40">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">Dashboard</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/subscription">Subscription</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/help-center">Help Center</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Desktop Header with Navigation */}
        <div className="hidden md:block mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">Welcome, {user?.name}</h1>
              <p className="text-muted-foreground">Manage your restaurants and track performance</p>
            </div>
            <Button variant="outline" onClick={handleLogout} className="bg-transparent h-11">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" asChild className="bg-transparent">
              <Link href="/owner/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild className="bg-transparent">
              <Link href="/owner/subscription">Subscription</Link>
            </Button>
            <Button variant="ghost" asChild className="bg-transparent">
              <Link href="/owner/help-center">Help Center</Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <DashboardStats title="Total Views" value={totalViews.toLocaleString()} icon={Eye} trend={12} />
          <DashboardStats title="Reviews" value={totalReviews.toString()} icon={MessageSquare} trend={8} />
          <DashboardStats title="Average Rating" value={avgRating.toString()} icon={TrendingUp} trend={2} />
          <DashboardStats title="Active Listings" value={restaurants.length.toString()} icon={BarChart3} trend={0} />
        </div>

        {/* Restaurants List */}
        <Card className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Your Restaurants</h2>
            <Button className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11">
              <Plus className="w-4 h-4 mr-2" />
              Add Restaurant
            </Button>
          </div>

          {/* Restaurants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-foreground flex-1">{restaurant.name}</h3>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${
                        restaurant.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {restaurant.status}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground text-xs">Views</p>
                      <p className="font-bold text-foreground">{restaurant.views}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground text-xs">Reviews</p>
                      <p className="font-bold text-foreground">{restaurant.reviews}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground text-xs">Rating</p>
                      <p className="font-bold text-foreground">{restaurant.rating}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent text-sm h-9" asChild>
                      <Link href={`/owner/restaurant/${restaurant.id}`}>
                        <Settings className="w-4 h-4 mr-1" />
                        Edit
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent text-sm h-9" asChild>
                      <Link href={`/restaurant/${restaurant.id}`}>
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent text-sm h-9" asChild>
                      <Link href={`/owner/restaurant/${restaurant.id}/menu`}>Menu</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}
