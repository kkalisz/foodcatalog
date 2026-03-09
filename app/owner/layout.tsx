'use client';
import type React from 'react';

import PageLoader from '@/components/ui/loader/PageLoader';
import { useFirm, useFirmId } from '@/lib/firebase/restaurants';
import { useAuth } from '@/providers/AuthContext';
import { UserContext } from '@/providers/UserContext';

export default function OwnerLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { firmId, loading } = useFirmId(user?.uid);
  const { firm } = useFirm();
  if (loading) {
    return <PageLoader loadingText={'Ładowanie'} />;
  }
  return (
    <>
      <UserContext.Provider value={{ firmId, user, firm }}>{children}</UserContext.Provider>
    </>
  );
}
