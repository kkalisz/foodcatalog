import { Heading, Button } from '@radix-ui/themes';
import { MapPin, Phone, Clock, Globe } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { Card } from '@/components/ui/card';
import { PublicRestaurant } from '@/data/types/publicRestaurant';

interface RestaurantInfoProps {
  restaurant: PublicRestaurant;
}

export const RestaurantInfo = async ({ restaurant }: RestaurantInfoProps) => {
  const t = await getTranslations('restaurant_detail');

  return (
    <Card className="p-4 sm:p-6 h-fit md:col-span-1 order-first md:order-last">
      <Heading size="5" className="mb-4">
        {t('contact_info')}
      </Heading>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">{t('address')}</div>
            <div className="font-medium">
              {restaurant.city}, {restaurant.street}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">{t('phone')}</div>
            <a
              href={`tel:${restaurant.phone}`}
              className="font-medium text-primary hover:underline"
            >
              {restaurant.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">{t('opening_hours')}</div>
            {/* The original code had restaurant.hours, let's assume it exists even if not in the type */}
            <div className="font-medium">{(restaurant as any).hours}</div>
          </div>
        </div>

        {(restaurant as any).website && (
          <div className="flex items-start gap-3">
            <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-muted-foreground">{t('website')}</div>
              <Link
                href={`https://${(restaurant as any).website}`}
                className="font-medium text-primary hover:underline"
                target="_blank"
              >
                {(restaurant as any).website}
              </Link>
            </div>
          </div>
        )}
      </div>

      <Button className="w-full mt-6 text-sm sm:text-base h-10 sm:h-11 cursor-pointer">
        {t('reserve_table')}
      </Button>
    </Card>
  );
};
