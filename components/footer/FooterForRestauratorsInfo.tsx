import { Box, Flex, Link } from '@radix-ui/themes';
import { PlusCircle, LayoutDashboard, User, CreditCard, TrendingUp, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/providers/AuthContext';
const FooterForRestauratorsInfo = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  return (
    <div>
      <Box>
        <Flex gap="2" align="center">
          <PlusCircle size={16} className="text-primary" />
          <Link href="/owner/dashboard/restaurants/" color="gray" highContrast>
            {t('footer.for_restaurators.add_restaurant')}
          </Link>
        </Flex>
      </Box>
      <Box>
        <Flex gap="2" align="center">
          <LayoutDashboard size={16} className="text-primary" />
          <Link href="/owner/dashboard" color="gray" highContrast>
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
          <Link href="/owner/dashboard/subscription" color="gray" highContrast>
            {t('footer.for_restaurators.pricing')}
          </Link>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterForRestauratorsInfo;
