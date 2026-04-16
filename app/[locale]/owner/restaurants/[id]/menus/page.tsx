'use client';

import { useEffect, useState } from 'react';

import { Button, Flex, Spinner, DropdownMenu } from '@radix-ui/themes';
import { useParams, useRouter } from 'next/navigation';

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

  const router = useRouter();

  if (loading) {
    return <Spinner />;
  }
  return (
    <PageSizeWrapper>
      <CardWithHeader title="Menu">
        <Flex direction="row" gap="2" justify="between" align="center">
          <Flex
            align="center"
            justify="between"
            className="border border-gray-200 rounded-lg p-2 w-2/3"
          >
            <Flex>
              <p>Menu 1</p>
            </Flex>
            <DropdownMenu.Root modal={false}>
              <DropdownMenu.Trigger>
                <Button>...</Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content color="orange" align="end" side="bottom">
                <DropdownMenu.Item
                  onClick={() => router.push(`/owner/restaurants/${restaurantId}/edit`)}
                >
                  Edit
                </DropdownMenu.Item>
                <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                </DropdownMenu.Sub>

                <DropdownMenu.Separator />
                <DropdownMenu.Item>Share</DropdownMenu.Item>
                <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Delete</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
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
