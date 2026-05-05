'use client';

import { Flex, Text } from '@radix-ui/themes';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <Check className="text-green-500 shrink-0" size={16} />
    <Text size="2">{text}</Text>
  </div>
);

const SubscriptionPlanPro = () => {
  const t = useTranslations('subscription_page.plan_pro');

  return (
    <Flex direction="column" gap="3">
      <FeatureItem text={t('feature_1')} />
      <FeatureItem text={t('feature_2')} />
      <FeatureItem text={t('feature_3')} />
    </Flex>
  );
};

export default SubscriptionPlanPro;
