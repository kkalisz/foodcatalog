import { MapPin, Phone, Clock, Globe } from 'lucide-react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { InfoItem } from '@/components/ui/info-item';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { PublicRestaurant } from '@/data/types/publicRestaurant';

interface RestaurantInfoProps {
  restaurant: PublicRestaurant;
}

export const RestaurantInfo = async ({ restaurant }: RestaurantInfoProps) => {
  const t = await getTranslations('restaurant_detail');

  return (
    <Card className="p-4 sm:p-6 h-fit md:col-span-1 order-first md:order-last">
      <Section title={t('contact_info')}>
        <Stack gap={4}>
          <InfoItem
            icon={<MapPin className="w-5 h-5" />}
            label={t('address')}
            value={`${restaurant.city}, ${restaurant.street}`}
          />

          <InfoItem
            icon={<Phone className="w-5 h-5" />}
            label={t('phone')}
            value={
              <a href={`tel:${restaurant.phone}`} className="text-primary hover:underline">
                {restaurant.phone}
              </a>
            }
          />

          <InfoItem
            icon={<Clock className="w-5 h-5" />}
            label={t('opening_hours')}
            value={(restaurant as any).hours}
          />

          {(restaurant as any).website && (
            <InfoItem
              icon={<Globe className="w-5 h-5" />}
              label={t('website')}
              value={
                <Link
                  href={`https://${(restaurant as any).website}`}
                  className="text-primary hover:underline"
                  target="_blank"
                >
                  {(restaurant as any).website}
                </Link>
              }
            />
          )}
        </Stack>
      </Section>

      <Button className="w-full mt-6 cursor-pointer" size="lg">
        {t('reserve_table')}
      </Button>
    </Card>
  );
};
