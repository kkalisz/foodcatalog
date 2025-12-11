"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Eye, MessageSquare, TrendingUp } from "lucide-react"
import { DashboardStats } from "@/components/dashboard-stats"
import { RestaurantsList } from "@/components/restaurants-list"
import { EditRestaurantModal } from "@/components/edit-restaurant-modal"

// Mock owner data
const OWNER_STATS = {
  totalViews: 2451,
  totalReviews: 145,
  averageRating: 4.7,
  monthlyTrend: 12,
}

const OWNER_RESTAURANTS = [
  {
    id: 1,
    name: "La Familia Trattoria",
    status: "active",
    views: 1203,
    reviews: 89,
    rating: 4.8,
    image: "/italian-restaurant-interior.jpg",
  },
  {
    id: 2,
    name: "Mama's Kitchen",
    status: "active",
    views: 1248,
    reviews: 56,
    rating: 4.6,
    image: "/cozy-kitchen.jpg",
  },
]

export default function OwnerDashboard() {
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null)

  const handleEditRestaurant = (restaurant: any) => {
    setSelectedRestaurant(restaurant)
    setShowEditModal(true)
  }

  const handleCloseModal = () => {
    setShowEditModal(false)
    setSelectedRestaurant(null)
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Owner Dashboard</h1>
          <p className="text-sm sm:text-base text-muted-foreground">Manage your restaurants and track performance</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <DashboardStats
            title="Total Views"
            value={OWNER_STATS.totalViews.toLocaleString()}
            icon={Eye}
            trend={OWNER_STATS.monthlyTrend}
          />
          <DashboardStats title="Reviews" value={OWNER_STATS.totalReviews.toString()} icon={MessageSquare} trend={8} />
          <DashboardStats
            title="Average Rating"
            value={OWNER_STATS.averageRating.toString()}
            icon={TrendingUp}
            trend={2}
          />
          <DashboardStats title="Active Listings" value="2" icon={BarChart3} trend={0} />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Restaurants List */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Your Restaurants</h2>
                <Button className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11">Add Restaurant</Button>
              </div>
              <RestaurantsList restaurants={OWNER_RESTAURANTS} onEdit={handleEditRestaurant} />
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4 sm:space-y-6">
            {/* Upgrade Plan */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">Premium Plan</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Unlock advanced analytics, priority support, and promotional features
              </p>
              <Button className="w-full text-sm sm:text-base h-10 sm:h-11">Upgrade Now</Button>
            </Card>

            {/* Support Card */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">Need Help?</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                Check our documentation or contact our support team
              </p>
              <Button variant="outline" className="w-full bg-transparent text-sm sm:text-base h-10 sm:h-11">
                Visit Help Center
              </Button>
            </Card>

            {/* Subscription Info */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-4">Subscription</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Plan</span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">Starter</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Billing Period</span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">Amount</span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">49 PLN/mo</span>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent text-sm h-10 sm:h-11">
                  Manage Billing
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && <EditRestaurantModal restaurant={selectedRestaurant} onClose={handleCloseModal} />}
    </main>
  )
}
