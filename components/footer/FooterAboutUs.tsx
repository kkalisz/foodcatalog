import { Box, Flex, Link } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FooterAboutUs = () => {
  const { t } = useTranslation();

  return (
    <Flex direction="column" gap="2">
      <div className="min-h-[20vh] min-w-[10vw] pl-7">
        <Heading size="5">{t('footer.about_us.heading')}</Heading>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.about_us.about')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.about_us.how_it_works')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.about_us.faq')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <DotIcon size={30} className="text-primary" />
            <Link href="#" color="gray">
              {t('footer.about_us.blog')}
            </Link>
          </Flex>
        </Box>
      </div>
    </Flex>
  );
};

export default FooterAboutUs;
