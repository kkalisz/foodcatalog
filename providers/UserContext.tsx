import { createContext } from 'react';

import { User } from 'firebase/auth';

import { Firm } from '@/data/types/firm';

type UserContextType = {
  firmId: string | null;
  user: User | null;
  firm: Firm | null;
};

export const UserContext = createContext<UserContextType | null>(null);
