'use client';

import { Flex } from '@radix-ui/themes';
import { useTranslation } from 'react-i18next';

import { PageHeightWrapper } from '@/components/common/page-height-wrapper';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <PageHeightWrapper>
      <Flex align="center" justify="center">
        <h1 className="">{t('about_page.header')}</h1>
      </Flex>
    </PageHeightWrapper>
  );
};

export default AboutUs;
