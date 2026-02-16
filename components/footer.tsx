'use client';
import { Flex } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { useAuth } from '@/providers/AuthContext';

import FooterAboutUs from './footer/FooterAboutUs';
import FooterForRestauratorsInfo from './footer/FooterForRestauratorsInfo';
import FooterLawInfo from './footer/FooterLawInfo';
import { Button } from './ui/button';
import FooterElement from './ui/footer/FooterElement';
import { PageSizeWrapper } from './ui/wrapper';

export const Footer = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div>    
      <PageSizeWrapper>
          <Flex
            py="5"
            direction={{ initial: 'column', md: 'row' }}
            width="100%"
            justify="between"
            gap="4"
            align="stretch"
          >
            <FooterElement heading={t('footer.about_us.heading')} children={<FooterAboutUs />} />
            <FooterElement heading={t('footer.law_info.heading')} children={<FooterLawInfo />} />
            <FooterElement
              heading={t('footer.for_restaurators.heading')}
              children={<FooterForRestauratorsInfo />}
            />
          </Flex>
      </PageSizeWrapper>
        <div className="bg-white">
          <PageSizeWrapper>
            <Flex justify="between" align="center" gap="4" py="5" >
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {t('app_name')}. {t('all_rights_reserved')}
          </span>
          <Flex className="flex gap-4 mt-4 sm:mt-0">
            {user ? (
              <Button onClick={() => router.push('/owner/dashboard')}>{user.email}</Button>
            ) : (
              <Button onClick={() => router.push('/login')}>{t('footer.login_as_owner')}</Button>
            )}
          </Flex>
          </Flex>
          </PageSizeWrapper>
        </div>
    </div>
  );
};
