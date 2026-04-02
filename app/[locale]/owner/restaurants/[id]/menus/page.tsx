'use client';

import { useEffect, useState } from 'react';

import { Button, DropdownMenu, Flex, Spinner } from '@radix-ui/themes';
import { useParams } from 'next/navigation';

import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import CardWithHeader from '@/components/ui/containers/card-with-header';
import { Category } from '@/data/types/dishMenu';
import { getRestaurantMenu } from '@/lib/firebase/getRestaurantMenu';

export const Menus = () => {
  const params = useParams<{ id: string }>();
  const restaurantId = params?.id;

  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      if (!restaurantId) {
        return;
      }

      try {
        setLoading(true);
        const data = await getRestaurantMenu(restaurantId);
        setMenu(data);
      } catch (error) {
        console.error('Błąd pobierania menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  if (loading) {
    return <Spinner />;
  }
  console.log(menu);
  return (
    <PageSizeWrapper>
      <CardWithHeader title="Menu">
        <Flex direction="row" gap="2">
          <Flex
            align="center"
            justify="center"
            className="border border-gray-200 rounded-lg p-2 w-2/3"
          >
            <div className="text-center">
              {menu.length > 0 ? (
                menu.map(cat => <p key={cat.id}>{cat.name}</p>)
              ) : (
                <p>Brak kategorii w menu</p>
              )}
            </div>
          </Flex>

          <Flex align="center" justify="center" className="p-2 flex-1">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button size="3">Wybór menu </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size="2">
                <DropdownMenu.Item>Menu 1</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Flex>
        </Flex>
      </CardWithHeader>
    </PageSizeWrapper>
  );
};

export default Menus;
