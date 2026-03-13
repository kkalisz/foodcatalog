import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';

import { db } from '@/lib/firebase/client';
import { useAuth } from '@/providers/AuthContext';

export const useFirmId = (uid?: string | undefined) => {
  const { user } = useAuth();
  const [firmId, setFirmId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFirmId = async () => {
      if (!user) {
        return;
      }

      if (!user?.uid) {
        return;
      }
      const userRef = doc(db, 'users', user.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        setFirmId(snap.data().firmId);
      }

      setLoading(false);
    };

    loadFirmId();
  }, [user]);

  return { firmId, loading };
};
