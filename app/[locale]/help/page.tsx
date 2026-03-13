'use client';

import { useTranslation } from 'react-i18next';

import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import HelpContainer from '@/components/ui/containers/HelpContainer';

const Help = () => {
  const { t } = useTranslation();

  return (
    <PageSizeWrapper>
      <HelpContainer tittle={t('help_page.title')} description={t('help_page.welcome')} />
    </PageSizeWrapper>
  );
};
export default Help;
