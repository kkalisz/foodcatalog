import { z } from 'zod';

import { CUISINES } from '@/data/constans/cusines';
export const createPublickRestaurantSchema = z.object({
  name: z.string().min(3, 'Min. 3 znaki'),
  city: z.string().min(2, 'Min. 2 znaki'),
  street: z.string().min(2, 'Min. 2 znaki'),
  postalCode: z.string().min(2, 'Min. 2 znaki'),
  phone: z.string().min(2, 'minimum 8 cyfr'),
  category: z.array(z.enum(CUISINES)).min(1, 'Wybierz przynajmniej jedną kuchnię'),
  shortDescription: z.string().min(20, 'Minimalna ilość znaków to 20'),
  coverImage: z.string().url('podaj poprawny URL').optional().or(z.literal('')),
  delivery: z.boolean(),
});
