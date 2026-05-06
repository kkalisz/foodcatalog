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

const SubscriptionPlanPremium = () => {
  const t = useTranslations('owner_dashboard.subscription_page.plan_premium');

  return (
    <Flex direction="column" gap="3">
      <Text size="1" weight="medium" className="text-gray-400 uppercase tracking-wide">
        {t('all_from_pro')}
      </Text>
      <FeatureItem text={t('feature_1')} />
      <FeatureItem text={t('feature_2')} />
      <FeatureItem text={t('feature_3')} />
    </Flex>
  );
};

export default SubscriptionPlanPremium;
