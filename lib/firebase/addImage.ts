import { addDoc, collection } from 'firebase/firestore';

import type { Image, ImageBucket } from '@/data/types/image';

import { db } from './client';

export const addImage = async (
  firmId: string,
  restaurantId: string,
  bucket: ImageBucket,
  image: Image
) => {
  const imageRef = collection(
    db,
    'firms',
    firmId,
    'restaurants',
    restaurantId,
    'images',
    bucket,
    'photos'
  );
  const docRef = await addDoc(imageRef, image);
  return docRef.id;
};
