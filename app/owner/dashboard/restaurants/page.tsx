'use client'
import { RestaurantForm } from '@/components/restaurants/RestaurantForm'
import { PageSizeWrapper } from '@/components/ui/wrapper'

export const NewResteurant = () => {
  return (
    <PageSizeWrapper>
      <RestaurantForm />
    </PageSizeWrapper>
  )
}

export default NewResteurant
