import { Box, Flex } from '@radix-ui/themes';
import { PlusCircle, LayoutDashboard, CreditCard } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useAuth } from '@/providers/AuthContext';

import FooterNavLink from '../ui/links/nav-link';

const FooterForRestauratorsInfo = () => {
  const { user } = useAuth();
  const t = useTranslations();
  return (
    <div>
      <Box>
        <Flex gap="2" align="center">
          <PlusCircle size={16} className="text-primary" />
          <FooterNavLink href="/owner/dashboard/restaurants/">
            {t('footer.for_restaurators.add_restaurant')}
          </FooterNavLink>
        </Flex>
      </Box>
      {user ? (
        <Box>
          <Flex gap="2" align="center">
            <LayoutDashboard size={16} className="text-primary" />
            <FooterNavLink href="/owner/dashboard">
              {t('footer.for_restaurators.panel')}
            </FooterNavLink>
          </Flex>
        </Box>
      ) : (
        <Box>
          <Flex gap="2" align="center">
            <LayoutDashboard size={16} className="text-primary" />
            <FooterNavLink href="/login">{t('footer.for_restaurators.panel')}</FooterNavLink>
          </Flex>
        </Box>
      )}

      <Box>
        <Flex gap="2" align="center">
          <CreditCard size={16} className="text-primary" />
          <FooterNavLink href="/owner/dashboard/subscription">
            {t('footer.for_restaurators.pricing')}
          </FooterNavLink>
        </Flex>
      </Box>
    </div>
  );
};

export default FooterForRestauratorsInfo;
