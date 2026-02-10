import { Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes'
import {
  DotIcon,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FooterAboutUs = () => {
  const { t } = useTranslation()

  return (
   
      <div style={{ minHeight: '20vh', minWidth: "400px", paddingLeft: '30px' }}>
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

  )
}

export default FooterAboutUs
