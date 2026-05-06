'use client';

import { Button } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

type SubscriptionCardProps = {
  header: string;
  tagline: string;
  price: number;
  children: React.ReactNode;
  isPopular?: boolean;
};

const SubscriptionCard = ({
  header,
  tagline,
  price,
  children,
  isPopular = false,
}: SubscriptionCardProps) => {
  const t = useTranslations('owner_dashboard.subscription_page');

  return (
    <div
      className={[
        'relative flex flex-col rounded-2xl border-2 bg-white p-6 w-full h-full',
        isPopular
          ? 'border-orange-500 shadow-xl shadow-orange-100 scale-[1.04] z-10'
          : 'border-gray-200 shadow-sm',
      ].join(' ')}
    >
      {isPopular && (
        <div className="absolute -top-4 inset-x-0 flex justify-center">
          <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
            {t('most_popular')}
          </span>
        </div>
      )}

      <div className={isPopular ? 'mt-3' : ''}>
        <h3 className="text-xl font-bold text-gray-900">{header}</h3>
        <p className="text-sm text-gray-500 mt-1">{tagline}</p>
      </div>

      <div className="flex items-baseline gap-1 mt-5 mb-6">
        <span className="text-5xl font-extrabold text-gray-900">{price}</span>
        <span className="text-sm text-gray-400 ml-1">{t('price_unit')}</span>
      </div>

      <div className="flex-1 mb-6">{children}</div>

      <Button
        size="3"
        color="orange"
        variant={isPopular ? 'solid' : 'outline'}
        style={{ width: '100%', cursor: 'pointer' }}
      >
        {t('choose_plan')}
      </Button>
    </div>
  );
};

export default SubscriptionCard;
