import { Box, Flex, Link } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FooterLawInfo = () => {
  const t = useTranslations();

  return (
    <div>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/lawinfo/termsandconditions" color="gray">
            {t('footer.law_info.terms')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/lawinfo/privacypolicy" color="gray">
            {t('footer.law_info.privacy_policy')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/lawinfo/cookiepolicy" color="gray">
            {t('footer.law_info.cookies_policy')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/lawinfo/rodo" color="gray">
            {t('footer.law_info.gdpr')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/lawinfo/contact" color="gray">
            {t('footer.law_info.contact')}
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterLawInfo;
