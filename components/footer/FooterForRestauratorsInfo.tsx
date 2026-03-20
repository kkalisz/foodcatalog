import { Box, Flex, Link } from '@radix-ui/themes';
import { PlusCircle, LayoutDashboard, CreditCard } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useAuth } from '@/providers/AuthContext';

const FooterForRestauratorsInfo = () => {
  const { user } = useAuth();
  const t = useTranslations();
  const router = useRouter();
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
      {user ? (
        <Box>
          <Flex gap="2" align="center">
            <LayoutDashboard size={16} className="text-primary" />
            <Link href="/owner/dashboard" color="gray" highContrast>
              {t('footer.for_restaurators.panel')}
            </Link>
          </Flex>
        </Box>
      ) : (
        <Box>
          <Flex gap="2" align="center">
            <LayoutDashboard size={16} className="text-primary" />
            <Link href="/login" color="gray" highContrast>
              {t('footer.for_restaurators.panel')}
            </Link>
          </Flex>
        </Box>
      )}

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
