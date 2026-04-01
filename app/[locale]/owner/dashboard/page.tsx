'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button } from '@radix-ui/themes';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { BarChart3, Eye, LogOut, MessageSquare, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { PageHeightWrapper } from '@/components/common/page-height-wrapper';
import DashboardHeader from '@/components/dashboard/dashboard-header';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { EditRestaurantModal } from '@/components/restaurant/edit-restaurant-modal';
import { RestaurantsList } from '@/components/restaurant/restaurant-list';
import { Card } from '@/components/ui/card';
import { PublicRestaurant } from '@/data/types/publicRestaurant';
import { db } from '@/lib/firebase/client';
import RestaurantsCounter from '@/lib/firebase/restaurantsCounter';
import { useAuth } from '@/providers/AuthContext';

// Mock owner data
const OWNER_STATS = {
  totalReviews: 145,
  averageRating: 4.7,
};

export default function OwnerDashboard() {
  const [showEditModal, setShowEditModal] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const { user, logout } = useAuth();
  const [restaurants, setRestaurants] = useState<PublicRestaurant[]>([]);
  const [, setLodaing] = useState(false);
  const t = useTranslations();

  const router = useRouter();

  const fetchRestaurants = useCallback(async () => {
    if (!user) {
      return;
    }

    setLodaing(true);

    try {
      const q = query(collection(db, 'public_restaurants'), where('firmId', '==', user.uid));

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(restaurantDoc => ({
        id: restaurantDoc.id,
        ...(restaurantDoc.data() as Omit<PublicRestaurant, 'id'>),
      }));

      setRestaurants(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching restaurants:', error);
    } finally {
      setLodaing(false);
    }
  }, [user]);

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedRestaurant(null);
  };

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchRestaurants();
  }, [user, fetchRestaurants, router]);
  useEffect(() => {
    RestaurantsCounter('1');
  }, []);
  return (
    <PageHeightWrapper>
      <div className="max-w-7xl mx-auto py-6">
        <DashboardHeader title={t('owner_dashboard.header')} />
        <p className="p-2">{t('owner_dashboard.subheader')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <DashboardStats
            title={t('owner_dashboard.total_views')}
            value={restaurants.reduce((acc, restaurant) => acc + (restaurant.views || 0), 0)}
            icon={Eye}
            trend={10}
          />
          <DashboardStats
            title={t('owner_dashboard.reviews')}
            value={100}
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
            value={restaurants.filter(r => r.status === 'active').length}
            icon={BarChart3}
            trend={0}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <DashboardHeader title={t('owner_dashboard.restaurants_header')} />
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
          <div className="space-y-4 sm:space-y-6">
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              onClick={logout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('owner_dashboard.logout')}
            </Button>
            <Card className="p-4 sm:p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <DashboardHeader title={t('owner_dashboard.premium_plan_header')} />
              <p className="text-xs sm:text-sm text-muted-foreground mb-4">
                {t('owner_dashboard.premium_plan_about')}
              </p>
              <Button className="w-full text-sm sm:text-base h-10 sm:h-11">
                {t('owner_dashboard.premium_plan_unlock')}
              </Button>
            </Card>
            <Card className="p-4 sm:p-6">
              <DashboardHeader title={t('owner_dashboard.need_help')} />
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
            <Card className="p-4 sm:p-6">
              <DashboardHeader title={t('owner_dashboard.subscription_header')} />
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
        <EditRestaurantModal restaurant={selectedRestaurant} onClose={handleCloseModal} />
      )}
    </PageHeightWrapper>
  );
}
