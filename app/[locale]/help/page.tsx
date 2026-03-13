'use client';

import { useTranslations } from 'next-intl';

import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import HelpContainer from '@/components/ui/containers/HelpContainer';

const Help = () => {
  const t = useTranslations();

  return (
    <PageSizeWrapper>
      <HelpContainer tittle={t('help_page.title')} description={t('help_page.welcome')} />
    </PageSizeWrapper>
  );
};
export default Help;
