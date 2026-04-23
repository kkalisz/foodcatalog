'use client';

import { useTranslations } from 'next-intl';

const OwnerPage = () => {
  const t = useTranslations('owner_page');
  return <div>{t('title')}</div>;
};
export default OwnerPage;
