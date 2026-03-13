import { PageWidthWrapper as PageSizeWrapper } from '@/components/common/page-width-wrapper';
import { RestaurantForm } from '@/components/restaurant/restaurant-form';

export default async function EditRestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <PageSizeWrapper>
      <RestaurantForm restaurantId={id} />
    </PageSizeWrapper>
  );
}
