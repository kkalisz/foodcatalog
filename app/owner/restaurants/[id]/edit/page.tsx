import { RestaurantForm } from '@/components/restaurants/RestaurantForm'
import { PageSizeWrapper } from '@/components/ui/wrapper'

export default async function EditRestaurantPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <PageSizeWrapper>
    <RestaurantForm restaurantId={id} />
    </PageSizeWrapper>
  )
}
