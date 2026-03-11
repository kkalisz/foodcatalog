import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';

import { db } from '@/lib/firebase/client';
const UseFilters = () => {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'public_restaurants'));

        const allCategories = snapshot.docs
          .map(doc => doc.data().category)
          .filter(Boolean)
          .flat();
        setCategories(allCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  });
};
export default UseFilters;
