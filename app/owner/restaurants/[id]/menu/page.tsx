'use client'

import MenuForm from '@/components/MenuForm/MenuForm'
import { PageSizeWrapper } from '@/components/ui/wrapper'
import { useParams } from 'next/navigation'

const Menu = () => {
  const params = useParams<{ id: string }>()
  const restaurantId = params?.id
  return (
      <MenuForm restaurantId={restaurantId} />
  )
}

export default Menu
