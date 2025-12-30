import { RestaurantForm } from "@/components/restaurants/RestaurantForm"

export default async function EditRestaurantPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (<div className="flex flex-col items-center justify-center h-full w-full pt-20">
        <RestaurantForm restaurantId={id} />
    </div>
    )
}
