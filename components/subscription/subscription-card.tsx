import { Button, Flex, Heading } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import CardWithHeader from '../ui/containers/card-with-header';

type SubscriptionCardProps = {
  header: string;
  price: number;
  children: React.ReactNode;
};
const SubscriptionCard = ({ header, price, children }: SubscriptionCardProps) => {
  const t = useTranslations('subscription_plans');

  return (
    <CardWithHeader title={header}>
      <Flex direction="column" gap="3">
        <Heading size="5">{t('price_per_month', { price })}</Heading>
        {children}
        <Button size="4">{t('select')}</Button>
      </Flex>
    </CardWithHeader>
  );
};

export default SubscriptionCard;
