import { getTranslations } from 'next-intl/server';

import { Grid } from '@/components/ui/grid';
import { PriceDisplay } from '@/components/ui/price-display';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
import { Category } from '@/data/types/dishMenu';

interface RestaurantMenuProps {
  menu: Category[];
}

export const RestaurantMenu = async ({ menu }: RestaurantMenuProps) => {
  const t = await getTranslations('restaurant_detail');

  return (
    <div className="mb-8 sm:mb-10 border p-5 pb-8 sm:pb-10 rounded-lg bg-card text-card-foreground">
      <Section title={t('our_menu')} titleSize="7" className="space-y-6 sm:space-y-8">
        {menu.length === 0 ? (
          <p className="text-sm sm:text-base text-muted-foreground">{t('menu_not_available')}</p>
        ) : (
          <Stack gap={8}>
            {menu.map(category => (
              <Section key={category.id} title={category.name} titleSize="6">
                <Grid cols={1} gap={6} className="md:grid-cols-2">
                  {category.dishes.map(dish => (
                    <div key={dish.id} className="flex justify-between items-start gap-4">
                      <Stack gap={1}>
                        <h4 className="text-lg font-medium text-foreground">{dish.name}</h4>
                        {dish.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {dish.description}
                          </p>
                        )}
                      </Stack>
                      <PriceDisplay price={Number(dish.price)} size="md" />
                    </div>
                  ))}
                </Grid>
              </Section>
            ))}
          </Stack>
        )}
      </Section>
    </div>
  );
};
