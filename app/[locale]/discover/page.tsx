'use client';

import { useState } from 'react';

import { Flex, Heading } from '@radix-ui/themes';
import { Timestamp } from 'firebase/firestore';
import { LocateIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { PageHeightWrapper } from '@/components/common/page-height-wrapper';
import PageLoader from '@/components/common/page-loader';
import { RestaurantCard } from '@/components/restaurant/restaurant-card';
import FiltersDiscoveryPage from '@/components/search/filters-discovery-page';
import EmptySearchContainer from '@/components/ui/containers/EmptySearchContainer';
import { usePublickRestaurants } from '@/data/hooks/usePublickRestaurants';

export default function DiscoverPage() {
  const t = useTranslations();
  const params = useSearchParams();
  const searchParams = params.get('search');
  const cityParams = params.get('city');
  const [currentSearch, setCurrentSearch] = useState('');

  const { loading, restaurants } = usePublickRestaurants(currentSearch);

  if (loading && restaurants.length === 0) {
    return <PageLoader loadingText={t('discover_page.loading')} />;
  }
  return (
    <PageHeightWrapper>
      {loading && restaurants.length === 0 ? (
        <EmptySearchContainer
          tittle={t('discover_page.no_results')}
          description={t('discover_page.try_adjusting')}
        />
      ) : (
        <div>
          <Flex direction="column" gap="2">
            <Heading size="7">{t('discover_page.header')}</Heading>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('discover_page.subheader')}
            </p>
            {t('discover_page.search_term')}
            {searchParams ? <Heading>{searchParams?.toLocaleUpperCase()}</Heading> : null}
            <Flex direction="column" gap="2">
              <FiltersDiscoveryPage onSearchChange={setCurrentSearch} />
            </Flex>
            <Flex gap="2" align="center">
              <Heading size="3" className="text-muted-foreground">
                {t('discover_page.searching_in')}
              </Heading>
              {cityParams ? (
                <Flex align="center">
                  <LocateIcon className="w-5 h-5 pr-2 text-primary" />
                  <Heading size="3" className="text-primary">
                    {cityParams?.toLocaleUpperCase()}
                  </Heading>
                </Flex>
              ) : null}
            </Flex>
          </Flex>
          <Flex direction="row" gap="5" wrap="wrap">
            {restaurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.createdAt}
                restaurant={{
                  ...restaurant,
                  createdAt: Timestamp.fromMillis(restaurant.createdAt),
                }}
              />
            ))}
          </Flex>
        </div>
      )}
    </PageHeightWrapper>
  );
}
