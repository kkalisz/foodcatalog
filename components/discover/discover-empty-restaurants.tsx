import { Flex, Heading, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

const DiscoverEmptyRestaurants = () => {
  const t = useTranslations('discover_page');

  return (
    <Flex className="h-full w-full mt-4 align-center justify-center flex flex-col items-center justify-center">
      <Heading>{t('no_results')}</Heading>
      <Text>{t('try_adjusting')}</Text>
    </Flex>
  );
};

export default DiscoverEmptyRestaurants;
