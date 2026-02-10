import { RestaurantForm } from '@/components/restaurants/RestaurantForm'

export default async function EditRestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <RestaurantForm restaurantId={id} />
  )
}
