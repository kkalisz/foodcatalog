import { Box, Flex } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import FooterNavLink from '../ui/links/nav-link';

const FooterAboutUs = () => {
  const t = useTranslations();

  return (
    <div>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/about/aboutUs">{t('footer.about_us.about')}</FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/about/howitworks">
            {t('footer.about_us.how_it_works')}
          </FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/about/faq">{t('footer.about_us.faq')}</FooterNavLink>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <FooterNavLink href="/about/blog">{t('footer.about_us.blog')}</FooterNavLink>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterAboutUs;
