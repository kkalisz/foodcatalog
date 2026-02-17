import { Box, Card, Flex, Heading, Link } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FooterLawInfo = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap="2">
      <div className="min-h-[20vh] min-w-[10vw] pl-7">
        <Heading size="5">{t('footer.law_info.heading')}</Heading>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.law_info.terms')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.law_info.privacy_policy')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.law_info.cookies_policy')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.law_info.gdpr')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.law_info.contact')}
            </Link>
          </Flex>
        </Box>
      </div>
    </Flex>
  );
};

export default FooterLawInfo;
