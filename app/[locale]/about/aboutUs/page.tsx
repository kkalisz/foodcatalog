'use client';

import { Flex } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import { PageHeightWrapper } from '@/components/common/page-height-wrapper';

export const AboutUs = () => {
  const t = useTranslations();

  return (
    <PageHeightWrapper>
      <Flex align="center" justify="center">
        <h1 className="">{t('about_page.header')}</h1>
      </Flex>
    </PageHeightWrapper>
  );
};

export default AboutUs;
