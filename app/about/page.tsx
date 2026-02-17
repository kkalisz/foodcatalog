'use client';

import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-full w-full pt-20">
      <h1 className="">{t('about_page.header')}</h1>
    </div>
  );
};

export default AboutUs;
