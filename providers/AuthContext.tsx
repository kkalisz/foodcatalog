'use client';

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

import { auth, db } from '@/lib/firebase/client';

type UserProfile = {
  email: string;
  name: string;
  companyName: string;
  role: string;
  plan: 'free' | 'pro' | 'premium' | 'ultra';
};

type AuthContextType = {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const logout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  useEffect(() => {
    let unsubProfile: (() => void) | null = null;

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const unsubAuth = onAuthStateChanged(auth, user => {
      setUser(user);

      if (unsubProfile) {
        unsubProfile();
        unsubProfile = null;
      }

      if (user) {
        unsubProfile = onSnapshot(doc(db, 'users', user.uid), snap => {
          setUserProfile(snap.exists() ? (snap.data() as UserProfile) : null);
          setLoading(false);
        });
      } else {
        setUserProfile(null);
        setLoading(false);
      }
    });

    return () => {
      unsubAuth();
      if (unsubProfile) {
        unsubProfile();
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
