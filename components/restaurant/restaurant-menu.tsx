import { Heading } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

import { Category } from '@/data/types/dishMenu';

interface RestaurantMenuProps {
  menu: Category[];
}

export const RestaurantMenu = async ({ menu }: RestaurantMenuProps) => {
  const t = await getTranslations('restaurant_detail');
  const tMenu = await getTranslations('restaurant_components');

  return (
    <div className="mb-8 p-5 pb-8 sm:pb-10 rounded-lg bg-white shadow-sm border border-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
        {t('our_menu')}
      </h2>
      {menu.length === 0 ? (
        <p className="text-sm sm:text-base text-muted-foreground">{t('menu_not_available')}</p>
      ) : (
        menu.map(category => (
          <div key={category.id} className="mb-8 last:mb-0">
            <Heading size="7" className="mb-4">
              {category.name}
            </Heading>
            <div className="grid gap-6">
              {category.dishes.map(dish => (
                <div key={dish.id} className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-foreground">{dish.name}</h4>
                    {dish.description && (
                      <p className="text-sm sm:text-base text-muted-foreground mt-1">
                        {dish.description}
                      </p>
                    )}
                  </div>
                  <span className="text-sm sm:text-base font-medium text-foreground whitespace-nowrap">
                    {Number(dish.price).toFixed(2)} {tMenu('currency_pln')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
