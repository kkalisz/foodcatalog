import { getTranslations } from 'next-intl/server';

export default async function SubscriptionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const t = await getTranslations('subscription_plans');

  // We can loosely map 'basic' and 'pro' to the translation keys if it matches exactly
  const planInfo: Record<string, { name: string; price: string }> = {
    basic: { name: t('basic_plan'), price: `29 ${t('currency_pln', { fallback: 'PLN' })}` },
    pro: { name: t('pro_plan'), price: `59 ${t('currency_pln', { fallback: 'PLN' })}` },
  };

  const selectedPlan = planInfo[id];

  return (
    <div>
      <h1>{t('selected_plan', { id })}</h1>
      {selectedPlan ? (
        <p>{t('price_for', { name: selectedPlan.name, price: selectedPlan.price })}</p>
      ) : (
        <p>{t('plan_not_found')}</p>
      )}
    </div>
  );
}
