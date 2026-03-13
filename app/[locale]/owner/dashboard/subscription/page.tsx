'use client';

import { Flex } from '@radix-ui/themes';

import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import SubscriptionCard from '@/components/subscription/subscription-card';
import SubscriptionPlanPremium from '@/components/subscription/subscription-plan-premium';
import SubscriptionPlanUltra from '@/components/subscription/subscription-plan-ultra';

export default function TestPage() {
  return (
    <PageSizeWrapper>
      <Flex gap="" align="center" justify="center" direction="column">
        <Flex>Twój obecny plan to:</Flex>
        <Flex>Wybierz nowy plan</Flex>
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
    </PageSizeWrapper>
  );
}
