'use client';

import { useEffect, useState } from 'react';

import { Button, Flex, Spinner, DropdownMenu } from '@radix-ui/themes';
import { useParams, useRouter } from 'next/navigation';

import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import CardWithHeader from '@/components/ui/containers/card-with-header';
import { Category } from '@/data/types/dishMenu';
import { getRestaurantMenu, getRestaurantMenuIds } from '@/lib/firebase/getRestaurantMenu';
import { useFirmId } from '@/lib/firebase/useFirmId';

export const Menus = () => {
  const params = useParams<{ id: string }>();
  const restaurantId = params?.id;
  const { firmId } = useFirmId();

  const [menu, setMenu] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [menuIds, setMenuIds] = useState<{ id: string; name: string }[]>([]);

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
  useEffect(() => {
    const fetchMenuIds = async () => {
      if (!restaurantId || !firmId) {
        return;
      }

      try {
        const ids = await getRestaurantMenuIds(firmId, restaurantId);
        setMenuIds(ids);
      } catch (error) {
        console.error('Błąd pobierania ID:', error);
      }
    };

    fetchMenuIds();
  }, [restaurantId, firmId]);

  const router = useRouter();

  if (loading) {
    return <Spinner />;
  }
  return (
    <PageSizeWrapper>
      <CardWithHeader title="Menu">
        <Flex direction="row" gap="2" justify="between" align="center">
          <Flex direction="column" gap="4" className="w-full">
            {menuIds.map((menuObj, index) => (
              <Flex
                key={menuObj.id}
                align="center"
                justify="between"
                className="border border-gray-200 rounded-lg p-2 w-2/3"
              >
                <Flex direction="column">
                  <p className="font-bold">{menuObj.name}</p>
                </Flex>
                <DropdownMenu.Root modal={false}>
                  <DropdownMenu.Trigger>
                    <Button variant="soft">Opcje</Button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content color="orange" align="end" side="bottom">
                    <DropdownMenu.Item
                      onClick={() => router.push(`/owner/restaurants/${restaurantId}/edit`)}
                    >
                      Edytuj
                    </DropdownMenu.Item>
                    <DropdownMenu.Item>Duplikuj</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Sub>
                      <DropdownMenu.SubTrigger>Wiadomo</DropdownMenu.SubTrigger>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator />
                    <DropdownMenu.Item>Udostępnij</DropdownMenu.Item>
                    <DropdownMenu.Item>Ulubione</DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item color="red">Usuń</DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
              </Flex>
            ))}
          </Flex>

          <Button
            size="3"
            onClick={() => router.push(`/owner/restaurants/${restaurantId}/menu-create`)}
          >
            Dodaj menu
          </Button>
        </Flex>
      </CardWithHeader>
    </PageSizeWrapper>
  );
};

export default Menus;
