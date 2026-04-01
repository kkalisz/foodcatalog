'use client';
import { Flex } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import FooterAboutUs from '../footer/FooterAboutUs';
import FooterForRestauratorsInfo from '../footer/FooterForRestauratorsInfo';
import FooterLawInfo from '../footer/FooterLawInfo';
import FooterElement from '../ui/footer/FooterElement';

export const Footer = () => {
  const t = useTranslations();
  return (
    <div>
      <Flex p="2" className="max-w-7xl mx-auto bg-orange-50 dark:bg-gray-800">
        <FooterElement heading={t('footer.about_us.heading')}>
          <FooterAboutUs />
        </FooterElement>
        <FooterElement heading={t('footer.law_info.heading')}>
          <FooterLawInfo />
        </FooterElement>
        <FooterElement heading={t('footer.for_restaurators.heading')}>
          <FooterForRestauratorsInfo />
        </FooterElement>
      </Flex>

      <p className="text-sm text-muted-foreground text-center p-4">
        &copy; {new Date().getFullYear()} {t('app_name')}. {t('all_rights_reserved')}
      </p>
    </div>
  );
};
