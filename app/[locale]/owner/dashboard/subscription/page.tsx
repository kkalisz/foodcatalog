'use client';

import { Flex, Heading } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';


import SubscriptionCard from '@/components/subscription/subscription-card';
import SubscriptionPlanPremium from '@/components/subscription/subscription-plan-premium';
import SubscriptionPlanUltra from '@/components/subscription/subscription-plan-ultra';
import CardWithHeader from '@/components/ui/containers/card-with-header';

export default function TestPage() {
  const t = useTranslations('subscription_plans');
  const tPage = useTranslations('subscription_page');

  return (
    <CardWithHeader title={tPage('subscription')}>
      <Flex gap="" align="center" justify="center" direction="column">
        <Flex>{t('current_plan')}</Flex>
        <Heading>{t('choose_plan')}</Heading>
        <Flex direction={{ initial: 'column', md: 'row' }} justify="center" gap="4" pt="5" pb="5">
          <SubscriptionCard header={'Plan Pro'} price={29}>
            <SubscriptionPlanPremium />
          </SubscriptionCard>
          <SubscriptionCard header={'Plan Premium'} price={59}>
            <SubscriptionPlanPremium />
          </SubscriptionCard>
          <SubscriptionCard header={'Plan Ultra'} price={79}>
            <SubscriptionPlanUltra />
          </SubscriptionCard>
        </Flex>
      </Flex>
    </CardWithHeader>
  );
}
