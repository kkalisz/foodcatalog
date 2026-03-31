import { Box, Flex } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import FooterNavLink from '../ui/links/nav-link';

const FooterLawInfo = () => {
  const t = useTranslations();

  return (
    <div>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/lawinfo/termsandconditions">
            {t('footer.law_info.terms')}
          </FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/lawinfo/privacypolicy">
            {t('footer.law_info.privacy_policy')}
          </FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/lawinfo/cookiepolicy">
            {t('footer.law_info.cookies_policy')}
          </FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/lawinfo/rodo">{t('footer.law_info.gdpr')}</FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/lawinfo/contact">{t('footer.law_info.contact')}</FooterNavLink>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterLawInfo;
