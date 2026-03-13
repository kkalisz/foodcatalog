import { useEffect, useState } from 'react';

import { doc, getDoc } from 'firebase/firestore';

import { Firm } from '@/data/types/firm';
import { db } from '@/lib/firebase/client';
import { useFirmId } from '@/lib/firebase/useFirmId';

export const useFirm = () => {
  const { firmId } = useFirmId();
  const [firm, setFirm] = useState<Firm | null>(null);
  useEffect(() => {
    const loadFirm = async () => {
      if (!firmId) {
        return;
      }
      const firmRef = doc(db, 'firms', firmId);
      const snap = await getDoc(firmRef);
      if (snap.exists()) {
        setFirm(snap.data() as Firm);
      }
    };
    loadFirm();
  }, [firmId]);
  return { firm };
};
