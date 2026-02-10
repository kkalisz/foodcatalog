import { Box, Card, Flex, Heading, Link, Text } from '@radix-ui/themes'
import {
  PlusCircle,
  LayoutDashboard,
  User,
  CreditCard,
  TrendingUp,
  PhoneCall,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const FooterForRestauratorsInfo = () => {
  const { t } = useTranslation()

  return (
    <Flex direction="column" gap="2">
      <Card style={{ height: '20vh', width: '10vw', paddingLeft: '30px' }}>
        <Heading size="5">{t('footer.for_restaurators.heading')}</Heading>
        <Box>
          <Flex gap="2" align="center">
            <PlusCircle size={16} className="text-primary" />
            <Link href="#" color="gray" highContrast>
              {t('footer.for_restaurators.add_restaurant')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <LayoutDashboard size={16} className="text-primary" />
            <Link href="#" color="gray" highContrast>
              {t('footer.for_restaurators.panel')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <User size={16} className="text-primary" />
            <Link href="#" color="gray" highContrast>
              {t('footer.for_restaurators.login')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <CreditCard size={16} className="text-primary" />
            <Link href="#" color="gray" highContrast>
              {t('footer.for_restaurators.pricing')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <TrendingUp size={16} className="text-primary" />
            <Link href="#" color="gray" highContrast>
              {t('footer.for_restaurators.benefits')}
            </Link>
          </Flex>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <PhoneCall size={16} className="text-primary" />
            <Link href="#" color="gray" highContrast>
              {t('footer.for_restaurators.business_contact')}
            </Link>
          </Flex>
        </Box>
      </Card>
    </Flex>
  )
}

export default FooterForRestauratorsInfo
