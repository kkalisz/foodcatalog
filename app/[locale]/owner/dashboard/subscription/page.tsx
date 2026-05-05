'use client';

import { Flex, Heading, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import SubscriptionCard from '@/components/subscription/subscription-card';
import SubscriptionPlanPremium from '@/components/subscription/subscription-plan-premium';
import SubscriptionPlanPro from '@/components/subscription/subscription-plan-pro';
import SubscriptionPlanUltra from '@/components/subscription/subscription-plan-ultra';
import CardWithHeader from '@/components/ui/containers/card-with-header';

export default function SubscriptionPage() {
  const t = useTranslations('subscription_page');

  return (
    <CardWithHeader title={t('title')}>
      <Flex direction="column" align="center" gap="1" pt="4" pb="2">
        <Heading size="6" className="text-center">
          {t('heading')}
        </Heading>
        <Text size="3" className="text-center" style={{ color: 'var(--gray-10)' }}>
          {t('subheading')}
        </Text>
      </Flex>

      <Flex
        direction={{ initial: 'column', md: 'row' }}
        justify="center"
        align={{ initial: 'center', md: 'stretch' }}
        gap="5"
        pt="8"
        pb="8"
        px="4"
      >
        <div className="w-full max-w-[280px] flex flex-col">
          <SubscriptionCard
            header={t('plan_pro_header')}
            tagline={t('plan_pro_tagline')}
            price={29}
          >
            <SubscriptionPlanPro />
          </SubscriptionCard>
        </div>

        <div className="w-full max-w-[280px] flex flex-col">
          <SubscriptionCard
            header={t('plan_premium_header')}
            tagline={t('plan_premium_tagline')}
            price={59}
            isPopular
          >
            <SubscriptionPlanPremium />
          </SubscriptionCard>
        </div>

        <div className="w-full max-w-[280px] flex flex-col">
          <SubscriptionCard
            header={t('plan_ultra_header')}
            tagline={t('plan_ultra_tagline')}
            price={79}
          >
            <SubscriptionPlanUltra />
          </SubscriptionCard>
        </div>
      </Flex>
    </CardWithHeader>
  );
}
