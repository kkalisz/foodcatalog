import { Box, Flex, Heading } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import { Dish } from '@/data/types/dishMenu';

const FiltersDiscoveryDishPage = ({ filteredDishes }: { filteredDishes: Dish[] }) => {
  const t = useTranslations('restaurant_components');
  return (
    <Box className="p-2">
      {filteredDishes.map(dish => (
        <Flex key={dish.name} direction="column" p="3">
          <Flex justify="between" mb="2">
            <Flex align="center" gap="2">
              <img
                src={
                  dish.imageUrl ||
                  'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=1630&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={dish.name}
                className="w-12 h-12 rounded-full"
              />
              <Heading size="3">{dish.name.toLocaleUpperCase()}</Heading>
            </Flex>
            <Flex align="center">
              <p>
                {dish.price} {t('currency_pln')}
              </p>
            </Flex>
          </Flex>
          <p>{dish.description}</p>
        </Flex>
      ))}
    </Box>
  );
};
export default FiltersDiscoveryDishPage;
