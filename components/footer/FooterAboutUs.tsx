import { Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes'
import {
  DotIcon,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FooterAboutUs = () => {
  const { t } = useTranslation()

  return (
    <Flex direction="column" gap="2">
      <Card style={{ minHeight: '20vh', minWidth: '10vw', paddingLeft: '30px' }}>
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
      </Card>
    </Flex>
  )
}

export default FooterAboutUs
