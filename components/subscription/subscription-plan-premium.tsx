import { Flex, Text } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const SubscriptionPlanPremium = () => {
  const t = useTranslations('subscription_plans');

  return (
    <Flex className="p-2 " direction="column" gap="3">
      <Text size="3">{t('promo_description')}</Text>
      <Flex direction="column" gap="3" align="center">
        <Text size="4" weight="bold">
          {t('what_you_get')}
        </Text>
        <Flex>
          <DotIcon />{' '}
          <Text size="3" weight="bold">
            {t('full_presentation')}
          </Text>{' '}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SubscriptionPlanPremium;
