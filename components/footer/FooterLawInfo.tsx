import { Box, Card, Flex, Heading, Link } from '@radix-ui/themes'
import { DotIcon } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FooterLawInfo = () => {
  const { t } = useTranslation()

  return (
      <div style={{ minHeight: '20vh', minWidth: "400px", paddingLeft: '30px' }}>
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
  )
}

export default FooterLawInfo
