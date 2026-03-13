'use client';
import { Button, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useAuth } from '@/providers/AuthContext';

import FooterAboutUs from '../footer/FooterAboutUs';
import FooterForRestauratorsInfo from '../footer/FooterForRestauratorsInfo';
import FooterLawInfo from '../footer/FooterLawInfo';
import FooterElement from '../ui/footer/FooterElement';

export const Footer = () => {
  const { user } = useAuth();
  const router = useRouter();
  const t = useTranslations();
  return (
    <div>
      <Flex
        py="5"
        direction={{ initial: 'column', md: 'row' }}
        width="100%"
        justify="between"
        gap="4"
        align="stretch"
      >
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
        <span className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {t('app_name')}. {t('all_rights_reserved')}
        </span>
        <div className="flex gap-4 mt-4 sm:mt-0">
          {user ? (
            <Button onClick={() => router.push('/owner/dashboard')}>{user.email}</Button>
          ) : (
            <Button variant="solid" onClick={() => router.push('/login')}>
              {t('footer.login_as_owner')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
