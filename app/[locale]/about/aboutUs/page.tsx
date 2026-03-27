'use client';

import { Flex, Grid } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import CardWithHeader from '@/components/ui/containers/card-with-header';

export const AboutUs = () => {
  const t = useTranslations();

  return (
    <CardWithHeader title={'O nas'}>
      <Grid columns={'2'} rows={'1'} className="flex-1 w-full h-full min-h-0">
        <Flex className="bg-white  w-full h-full" align="center" justify="center">
          About us
        </Flex>
        <Flex className="bg-orange-500  w-full h-full" align="center" justify="center">
          Our mission
        </Flex>
      </Grid>
    </CardWithHeader>
  );
};

export default AboutUs;
