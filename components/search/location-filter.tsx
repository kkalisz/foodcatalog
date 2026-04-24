'use client';

import { useState } from 'react';

import { Button, Card, Flex, Heading, Slider, TextField } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

const LocationFilter = () => {
  const [value, setValue] = useState([10]);
  const t = useTranslations('search');
  return (
    <Flex gap="5" direction="column" align="center" justify="center">
      <Card>
        <Flex gap="5" direction="row" align="center" justify="center">
          <Heading size="4">{t('city')}</Heading>
          <TextField.Root placeholder={t('city_placeholder')}></TextField.Root>
          <Button>{t('find')}</Button>
        </Flex>
        <Flex gap="2" pt="5" direction="row" align="center" justify="center">
          <Heading size="4">{t('radius')}</Heading>
          <Slider defaultValue={value} max={10} onValueChange={setValue} />
          <p>{value}km</p>
        </Flex>
      </Card>
    </Flex>
  );
};

export default LocationFilter;
