'use client';
import type React from 'react';
import { useTranslations } from 'next-intl';

import PageLoader from '@/components/common/page-loader';
import { useFirm } from '@/lib/firebase/useFirm';
import { useFirmId } from '@/lib/firebase/useFirmId';
import { useAuth } from '@/providers/AuthContext';
import { UserContext } from '@/providers/UserContext';

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { firmId, loading } = useFirmId(user?.uid);
  const { firm } = useFirm();
  const t = useTranslations('components_misc');

  if (loading) {
    return <PageLoader loadingText={t('loading')} />;
  }
  return (
    <>
      <UserContext.Provider value={{ firmId, user, firm }}>{children}</UserContext.Provider>
    </>
  );
}
