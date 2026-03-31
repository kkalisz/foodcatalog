'use client';

import { Flex, Grid, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import CardWithHeader from '@/components/ui/containers/card-with-header';

export const AboutUs = () => {
  const t = useTranslations('footer.about_us');

  return (
    <CardWithHeader title={t('heading')}>
      <Grid
        columns={'2'}
        rows={'1'}
        className="flex-1 w-full h-full min-h-[400px] overflow-hidden rounded-xl border border-gray-200 shadow-sm"
      >
        <Flex className="bg-white w-full h-full" align="center" justify="center">
          <Text size="6" weight="bold" className="text-gray-800">
            {t('about')}
          </Text>
        </Flex>
        <Flex className="bg-orange-500 w-full h-full" align="center" justify="center">
          <Text size="6" weight="bold" className="text-white">
            {t('heading')}
          </Text>
        </Flex>
      </Grid>
    </CardWithHeader>
  );
};

export default AboutUs;
