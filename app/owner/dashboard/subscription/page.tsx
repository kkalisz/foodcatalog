'use client';

import { Card, Flex } from '@radix-ui/themes';

import { useTranslation } from 'react-i18next';
import { Flex } from '@radix-ui/themes';
import SubscriptionPlan from '@/components/subscription/SubscriptionPlan';
import { PageSizeWrapper } from '@/components/ui/wrapper';

export default function TestPage() {
import { Text } from '@radix-ui/themes';
export default function SubscriptionPage() {
  const { t } = useTranslation();

  return (
    <PageSizeWrapper>
      <Flex direction="column" gap="5" className="pt-5">
        <Text size="3" weight="bold">
          {t('subscription_page.current_plan')}:
          <span className="ml-2 text-primary">Plan Basic</span>
        </Text>
        <Text className="text-primary" size="6" align="center">
          {t('subscription_page.available_plans')}
        </Text>
      </Flex>
      <Flex
        direction={{ initial: 'column', md: 'row' }}
        justify="center"
        gap="4"
        height="100"
        align="stretch"
        mt="4"
      >
        <SubscriptionPlan
          description={t('subscription_page.plans.pro.description')}
          features={[
            t('subscription_page.plans.pro.features.restaurants'),
            t('subscription_page.plans.pro.features.stats'),
            t('subscription_page.plans.pro.features.support'),
          ]}
          header={'Pro Plan'}
          price={30}
        />
        <SubscriptionPlan
          description={t('subscription_page.plans.premium.description')}
          features={[
            t('subscription_page.plans.premium.features.restaurants'),
            t('subscription_page.plans.premium.features.menu'),
            t('subscription_page.plans.premium.features.support'),
            t('subscription_page.plans.premium.features.reviews'),
          ]}
          header={'Premium Plan'}
          price={40}
        />
        <SubscriptionPlan
          description={t('subscription_page.plans.ultra.description')}
          features={[
            t('subscription_page.plans.ultra.features.restaurants'),
            t('subscription_page.plans.ultra.features.analytics'),
            t('subscription_page.plans.ultra.features.account_manager'),
            t('subscription_page.plans.ultra.features.promotion'),
          ]}
          header={'Ultra Plan'}
          price={50}
        />
      </Flex>
    </PageSizeWrapper>
  );
}
