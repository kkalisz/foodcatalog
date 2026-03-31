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
      <h1>Wybrany plan: {id}</h1>
      {selectedPlan ? (
        <p>
          Cena za {selectedPlan.name} to {selectedPlan.price}.
        </p>
      ) : (
        <p>Nie znaleziono takiego planu.</p>
      )}
    </div>
  );
}
