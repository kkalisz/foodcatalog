'use client';

import { useEffect, useState } from 'react';

import { Flex, Heading } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes/components/callout';
import { doc, getDoc } from 'firebase/firestore';
import { Star, MapPin, Phone, Clock, Globe, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { RestaurantMap } from '@/components/restaurant-map';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { PageSizeWrapper } from '@/components/ui/wrapper';
import { db } from '@/lib/firebase/client';

type Dish = {
  id: string;
  name: string;
  price: number;
  description?: string;
};
type Category = {
  id: string;
  name: string;
  dishes: Dish[];
};
const RestaurantPage = () => {
  const [restaurant, setRestaurant] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(0);
  const [menu, setMenu] = useState<Category[]>([]);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (!id) {
      return;
    }
    const fetchRestaurant = async () => {
      try {
        const ref = doc(db, 'public_restaurants', id);
        const snapshot = await getDoc(ref);
        if (snapshot.exists()) {
          setRestaurant({ id: snapshot.id, ...snapshot.data() });
        }
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRestaurant();
    const fetchMenu = async () => {
      try {
        const menuRef = doc(db, 'public_restaurants', id, 'menu', 'main');
        const menuSnap = await getDoc(menuRef);
        if (menuSnap.exists()) {
          setMenu(menuSnap.data().categories || []);
        } else {
          setMenu([]);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };
    fetchMenu();
  }, [id]);
  const handleSubmitReview = () => {
    setReviewText('');
    setUserRating(0);
  };
  if (loading) {
    return <p className="p-6">{t('restaurant_detail.loading')}</p>;
  }
  if (!restaurant) {
    return <p className="p-6">{t('restaurant_detail.not_found')}</p>;
  }
  if (!id) {
    return;
  }
  return (
    <PageSizeWrapper>
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
      <div className="max-w-7xl mx-auto sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="md:col-span-2">
            <Heading size="7">{restaurant.name}</Heading>
            <Flex py="3" direction="row" gap="4">
              <Flex direction="row" gap="2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <Text>{restaurant.rating}</Text>
              </Flex>
              <Text>
                ({restaurant.reviewCount} {t('restaurant_detail.reviews')})
              </Text>
              <Text>Cuisine: {restaurant.category.map((c: string) => c).join(', ')}</Text>
            </Flex>
          </div>
          <Card className="p-4 sm:p-6 h-fit md:col-span-1 order-first md:order-last">
            <Heading size="5">{t('restaurant_detail.contact_info')}</Heading>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <Text>{t('restaurant_detail.address')}</Text>
                <Text>{restaurant.city}</Text>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <Text>{t('restaurant_detail.phone')}</Text>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-sm sm:text-base font-medium text-primary hover:underline"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <Text>{t('restaurant_detail.opening_hours')}</Text>
                <Text>{restaurant.hours}</Text>
              </div>
            </div>
            {restaurant.website && (
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <Text>{t('restaurant_detail.website')}</Text>
                <Link href={`https://${restaurant.website}`}>{restaurant.website}</Link>
              </div>
            )}
            <Button className="w-full mt-6 text-sm sm:text-base h-10 sm:h-11">
              {t('restaurant_detail.reserve_table')}
            </Button>
          </Card>
          <Card>
            <p className="p-2 ">{restaurant.shortDescription}</p>
          </Card>
        </div>
        <div className="mb-8 sm:mb-10 border p-5  pb-8 sm:pb-10 rounded-lg bg-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
            {t('restaurant_detail.our_menu')}
          </h2>
          {menu.length === 0 ? (
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('restaurant_detail.menu_not_available')}
            </p>
          ) : (
            menu.map(category => (
              <div key={category.id} className="mb-8">
                <Heading size="7">{category.name}</Heading>
                {category.dishes.map(dish => (
                  <div key={dish.id} className="flex justify-between items-start">
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
            ))
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-4">
            <Heading size="5">{t('restaurant_detail.location')}</Heading>
            <RestaurantMap lat={restaurant.lat} lng={restaurant.lng} name={restaurant.name} />
          </Card>
          <div className="md:col-span-2 space-y-6">
            <Card className="p-4 sm:p-6">
              <Heading size="5">{t('restaurant_detail.rate_us')}</Heading>
              <Text>{t('restaurant_detail.rating')}</Text>
              <Flex gap="3">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 sm:w-8 sm:h-8 ${
                        star <= userRating ? 'fill-primary text-primary' : 'text-muted-foreground'
                      }`}
                    />
                  </button>
                ))}
              </Flex>
              <label className="text-xs sm:text-sm font-medium text-foreground block mb-2">
                {t('restaurant_detail.your_review')}
              </label>
              <Textarea
                placeholder={t('restaurant_detail.describe_experience')}
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                className="min-h-20 sm:min-h-24 text-sm"
              />
              <Button
                onClick={handleSubmitReview}
                disabled={!reviewText || userRating === 0}
                className="w-full text-sm sm:text-base h-10 sm:h-11"
              >
                {t('restaurant_detail.add_review')}
              </Button>
            </Card>
            <Card className="p-4 sm:p-6">
              <Heading size="5">{t('restaurant_detail.recent_reviews')}</Heading>
            </Card>
          </div>
        </div>
      </div>
    </PageSizeWrapper>
  );
};
export default RestaurantPage;
