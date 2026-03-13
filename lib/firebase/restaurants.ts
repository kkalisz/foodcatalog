import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { CreatePublicRestaurantForm } from '@/data/types/createPublicRestaurantForm';
import { generateSlug } from '@/lib/utils/slug';

import { db } from './client';

export const createPublicRestaurant = async (data: CreatePublicRestaurantForm, firmId: string) => {
  return await addDoc(collection(db, 'public_restaurants'), {
    name: data.name,
    city: data.city,
    street: data.street,
    postalCode: data.postalCode,
    phone: data.phone,
    category: data.category,
    shortDescription: data.shortDescription,
    coverImage: data.coverImage,
    delivery: data.delivery,
    lat: data.lat ?? 0,
    lng: data.lng ?? 0,
    firmId,
    slug: generateSlug(data.name),
    status: 'draft',
    rating: 0,
    reviewsCount: 0,
    createdAt: serverTimestamp(),
  });
};
