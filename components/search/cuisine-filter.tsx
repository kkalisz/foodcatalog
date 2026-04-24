'use client';

import { Box, Button, Card, CheckboxCards, Flex, Heading, TextField } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import { CUISINES } from '@/data/constants/cusines';

const CuisineFilter = () => {
  const t = useTranslations('search');
  return (
    <Card className="w-full">
      <Flex gap="5" direction="column">
        <Flex gap="2" align="center">
          <Heading size="4">{t('cuisine')}</Heading>
          <TextField.Root placeholder={t('cuisine_placeholder')}></TextField.Root>
          <Button>{t('find')}</Button>
        </Flex>

        <Flex gap="2" wrap="wrap" align="center" justify="center">
          {CUISINES.map(cuisine => (
            <CheckboxCards.Root key={cuisine}>
              <CheckboxCards.Item key={cuisine} value={cuisine}>
                <Flex>
                  <Box>{cuisine}</Box>
                </Flex>
              </CheckboxCards.Item>
            </CheckboxCards.Root>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default CuisineFilter;
