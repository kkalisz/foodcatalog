'use client';

import { Card, Flex } from '@radix-ui/themes';

import { PageSizeWrapper } from '@/components/ui/wrapper';

export default function TestPage() {
  return (
    <PageSizeWrapper className="mt-2  max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
      <Flex gap="" align="center" justify="center" direction="column">
        <Flex>Twój obecny plan to:</Flex>
        <Flex>Wybierz nowy plan</Flex>
        <Flex direction={{ initial: "column", md: "row" }} 
          justify="center" 
          gap="4" 
          pt="5" 
          pb="5">
          <SubscriptionCard header={'Plan Pro'} price={29} children={<SubscriptionPlanPro/>}/>
          <SubscriptionCard header={'Plan Premium'} price={59} children={<SubscriptionPlanPremium/>}/>
          <SubscriptionCard header={'Plan Ultra'} price={79} children={<SubscriptionPlanUltra/>}/>
        </Flex>
      </Flex>
    </PageSizeWrapper>
  );
}
