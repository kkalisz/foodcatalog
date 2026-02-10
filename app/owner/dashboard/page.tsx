'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, Eye, LogOut, MessageSquare, TrendingUp } from 'lucide-react'
import { DashboardStats } from '@/components/dashboard-stats'
import { RestaurantsList } from '@/components/restaurants-list'
import { EditRestaurantModal } from '@/components/edit-restaurant-modal'
import { useAuth } from '@/providers/AuthContext'
import { useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'

import { PublicRestaurant } from '../../../data/types/publicRestaurant'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { db } from '@/lib/firebase/client'

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
    name: 'La Familia Trattoria',
    status: 'active',
    views: 1203,
    reviews: 89,
    rating: 4.8,
    image: '/italian-restaurant-interior.jpg',
  },
]

export default function OwnerDashboard() {
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null)
  const { user, logout } = useAuth()
  const [restaurants, setRestaurants] = useState<PublicRestaurant[]>([])
  const [loading, setLodaing] = useState(false)
  const { t } = useTranslation()

  const router = useRouter()

  const fetchRestaurants = async () => {
    if (!user) return

    setLodaing(true)

    try {
      const q = query(
        collection(db, 'public_restaurants'),
        where('firmId', '==', user.uid)
      )

      const snapshot = await getDocs(q)

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<PublicRestaurant, 'id'>),
      }))

      setRestaurants(data)
    } catch (error) {
      console.error('Error fetching restaurants:', error)
    } finally {
      setLodaing(false)
    }
  }

  const fetchUser = async (uid: string) => {
    const ref = doc(collection(db, 'users', uid))
    const snap = await getDoc(ref)

    if (!snap.exists()) {
      throw new Error('Dane uzytkownika nie istenieja')
    }

    return snap.data()?.companyName
  }

  const handleEditRestaurant = (restaurant: any) => {
    setSelectedRestaurant(restaurant)
    setShowEditModal(true)
  }

  const handleCloseModal = () => {
    setShowEditModal(false)
    setSelectedRestaurant(null)
  }

  useEffect(() => {
    if (!user) {
      router.push('/login')
      return
    }
    fetchRestaurants()
  }, [user])

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            {t('owner_dashboard.header')}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            {t('owner_dashboard.subheader')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <DashboardStats
            title={t('owner_dashboard.total_views')}
            value={OWNER_STATS.totalViews}
            icon={Eye}
            trend={OWNER_STATS.monthlyTrend}
          />
          <DashboardStats
            title={t('owner_dashboard.reviews')}
            value={OWNER_STATS.totalReviews}
            icon={MessageSquare}
            trend={8}
          />
          <DashboardStats
            title={t('owner_dashboard.average_rating')}
            value={OWNER_STATS.averageRating}
            icon={TrendingUp}
            trend={2}
          />
          <DashboardStats
            title={t('owner_dashboard.active_listings')}
            value={2}
            icon={BarChart3}
            trend={0}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Restaurants List */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {t('owner_dashboard.restaurants_header')}
                </h2>
                <Button
                  onClick={() => router.push('/owner/dashboard/restaurants')}
                  className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
                >
                  {t('owner_dashboard.add_restaurant_btn')}
                </Button>
              </div>
              <RestaurantsList restaurants={restaurants} />
            </Card>
          </div>

          {/* Quick Actions */}

          <div className="space-y-4 sm:space-y-6">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              onClick={logout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('owner_dashboard.logout')}
            </Button>
            {/* Upgrade Plan */}
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">
                {t('owner_dashboard.premium_plan_header')}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                {t('owner_dashboard.premium_plan_about')}
              </p>
              <Button className="w-full text-sm sm:text-base h-10 sm:h-11">
                {t('owner_dashboard.premium_plan_unlock')}
              </Button>
            </Card>

            {/* Support Card */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">
                {t('owner_dashboard.need_help')}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                {t('owner_dashboard.need_help_about')}
              </p>
              <Button
                variant="outline"
                className="w-full bg-transparent text-sm sm:text-base h-10 sm:h-11"
                onClick={() => router.push('/help')}
              >
                {t('owner_dashboard.need_help_button')}
              </Button>
            </Card>

            {/* Subscription Info */}
            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg text-foreground mb-4">
                {t('owner_dashboard.subscription_header')}
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {t('owner_dashboard.subscription_plan')}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {t('owner_dashboard.subscription_plan_starter')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {t('owner_dashboard.subscription_plan_period')}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {t('owner_dashboard.subscription_plan_period_monthly')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {t('owner_dashboard.subscription_plan_amount')}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-foreground">
                    {t('owner_dashboard.subscription_plan_price')}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 bg-transparent text-sm h-10 sm:h-11"
                  onClick={() => router.push('dashboard/subscription')}
                >
                  {t('owner_dashboard.manage_subscription')}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <EditRestaurantModal
          restaurant={selectedRestaurant}
          onClose={handleCloseModal}
        />
      )}
    </main>
  )
}
