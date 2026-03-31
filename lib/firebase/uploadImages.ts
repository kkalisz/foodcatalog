import { getStorage } from 'firebase/storage';

import { app } from '../firebase/client';
const _storage = getStorage(app);

export const uploadRestaurantImage = (_file: File, _firmId: string) => {};
