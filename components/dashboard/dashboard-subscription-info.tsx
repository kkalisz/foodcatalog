'use client';
import { Button, Flex, Heading } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useAuth } from '@/providers/AuthContext';

export const DashboardSubscriptionInfo = () => {
  const { userProfile } = useAuth();
  const router = useRouter();
  const t = useTranslations('owner_dashboard');
  return (
    <>
      {userProfile && userProfile.plan === 'free' ? (
        <Flex
          width="100%"
          justify="center"
          direction="row"
          align="center"
          gap="2"
          className="mb-2 mt-2 py-2 bg-orange-500 "
        >
          <Heading className="text-white" size="5">
            {t('free_plan_banner')}
          </Heading>
          <Button
            onClick={() => router.push('/owner/dashboard/subscription')}
            type="button"
            color="orange"
            variant="surface"
          >
            {t('upgrade')}
          </Button>
        </Flex>
      ) : null}
    </>
  );
};
