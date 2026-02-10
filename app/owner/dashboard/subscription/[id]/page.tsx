export default async function SubscriptionPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const planInfo = {
    basic: { name: 'Plan Podstawowy', price: '29 zł' },
    pro: { name: 'Plan Pro', price: '59 zł' },
  }[id]

  return (
    <div>
      <h1>Wybrany plan: {id}</h1>
      {planInfo ? (
        <p>
          Cena za {planInfo.name} to {planInfo.price}.
        </p>
      ) : (
        <p>Nie znaleziono takiego planu.</p>
      )}
    </div>
  )
}
