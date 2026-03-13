import { Box, Flex, Link } from '@radix-ui/themes';
import { PlusCircle, LayoutDashboard, User, CreditCard } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FooterForRestauratorsInfo = () => {
  const t = useTranslations();
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
