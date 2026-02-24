'use client';

import { Card, Flex } from '@radix-ui/themes';

import { PageSizeWrapper } from '@/components/ui/wrapper';
import SubscriptionCard from '@/components/ui/subscription/SubscriptionCard';
import SubscriptionPlanPremium from '@/components/subscription/SubscriptionPlanPremium';
import SubscriptionPlanUltra from '@/components/subscription/SubscriptionPlanUltra';

export default function TestPage() {
  return (
    <PageSizeWrapper>
      <Flex gap="" align="center" justify="center" direction="column">
        <Flex>Twój obecny plan to:</Flex>
        <Flex>Wybierz nowy plan</Flex>
        <Flex direction={{ initial: 'column', md: 'row' }} justify="center" gap="4" pt="5" pb="5">
          <SubscriptionCard header={'Plan Pro'} price={29} children={<SubscriptionPlanPremium />} />
          <SubscriptionCard
            header={'Plan Premium'}
            price={59}
            children={<SubscriptionPlanPremium />}
          />
          <SubscriptionCard header={'Plan Ultra'} price={79} children={<SubscriptionPlanUltra />} />
        </Flex>
      </Flex>
    </PageSizeWrapper>
  );
}
