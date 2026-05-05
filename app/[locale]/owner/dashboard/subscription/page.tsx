'use client';

import { Flex, Heading, Text } from '@radix-ui/themes';

import SubscriptionCard from '@/components/subscription/subscription-card';
import SubscriptionPlanPremium from '@/components/subscription/subscription-plan-premium';
import SubscriptionPlanPro from '@/components/subscription/subscription-plan-pro';
import SubscriptionPlanUltra from '@/components/subscription/subscription-plan-ultra';
import CardWithHeader from '@/components/ui/containers/card-with-header';

export default function SubscriptionPage() {
  return (
    <CardWithHeader title="Subskrypcja">
      <Flex direction="column" align="center" gap="1" pt="4" pb="2">
        <Heading size="6" className="text-center">
          Rozwiń skrzydła swojej restauracji
        </Heading>
        <Text size="3" className="text-center" style={{ color: 'var(--gray-10)' }}>
          Wybierz plan dopasowany do Twoich potrzeb
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
            header="Plan Pro"
            tagline="Idealny start dla małych lokali."
            price={29}
          >
            <SubscriptionPlanPro />
          </SubscriptionCard>
        </div>

        <div className="w-full max-w-[280px] flex flex-col">
          <SubscriptionCard
            header="Plan Premium"
            tagline="Narzędzia do budowy lojalności i zwiększania zysków."
            price={59}
            isPopular
          >
            <SubscriptionPlanPremium />
          </SubscriptionCard>
        </div>

        <div className="w-full max-w-[280px] flex flex-col">
          <SubscriptionCard
            header="Plan Ultra"
            tagline="Pełna dominacja w sieci dla wymagających."
            price={79}
          >
            <SubscriptionPlanUltra />
          </SubscriptionCard>
        </div>
      </Flex>
    </CardWithHeader>
  );
}
