'use client';

import { Timestamp } from 'firebase/firestore';
import { LocateIcon, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { RestaurantCard } from '@/components/restaurant-card';
import EmptySearchContainer from '@/components/ui/containers/EmptySearchContainer';
import PageLoader from '@/components/ui/loader/PageLoader';
import { PageHeightWrapper, PageSizeWrapper } from '@/components/ui/wrapper';
import { usePublickRestaurants } from '@/data/hooks/usePublickRestaurants';
import { useSearchParams } from 'next/navigation';
import { Flex, Heading } from '@radix-ui/themes';
import HeaderSearchRestaurant from '@/components/ui/search/HeaderSearchRestaurantParam';
import useLocalization from '@/data/hooks/useLocalization';

export default function DiscoverPage() {
  const { loading, resteurants, setSearchQuery, searchQuery } = usePublickRestaurants();
  const { t } = useTranslation();
  const params = useSearchParams();
  const searchParams = params.get('search');
  const cityParams = params.get('city');
  if (loading && resteurants.length === 0) {
    return <PageLoader loadingText={t('discover_page.loading')} />;
  }
  return (
    <PageHeightWrapper>
      {loading && resteurants.length === 0 ? (
        <EmptySearchContainer
          tittle={t('discover_page.no_results')}
          description={t('discover_page.try_adjusting')}
        />
      ) : (
        <PageSizeWrapper>
          <Flex direction="column" gap="2">
            <Heading size="7">{t('discover_page.header')}</Heading>
            <p className="text-sm sm:text-base text-muted-foreground">
              {t('discover_page.subheader')}
            </p>
            {t('discover_page.search_term')}
            {searchParams ? <Heading>{searchParams?.toLocaleUpperCase()}</Heading> : null}
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
            <HeaderSearchRestaurant
              icon={<Search />}
              placeholder={t('discover_page.search_placeholder')}
            />
          </Flex>
          <Flex direction="row" gap="5" wrap="wrap">
            {resteurants.map(restaurant => (
              <RestaurantCard
                key={restaurant.createdAt}
                restaurant={{
                  ...restaurant,
                  createdAt: Timestamp.fromMillis(restaurant.createdAt),
                }}
              />
            ))}
          </Flex>
        </PageSizeWrapper>
      )}
    </PageHeightWrapper>
  );
}
