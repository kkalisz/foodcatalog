import { Box, Flex, Link } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FooterAboutUs = () => {
  const t = useTranslations();

  return (
    <div>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/about/aboutUs" color="gray">
            {t('footer.about_us.about')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/about/howitworks" color="gray">
            {t('footer.about_us.how_it_works')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/about/faq" color="gray">
            {t('footer.about_us.faq')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <DotIcon size={30} className="text-primary" />
          <Link href="/about/blog" color="gray">
            {t('footer.about_us.blog')}
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterAboutUs;
