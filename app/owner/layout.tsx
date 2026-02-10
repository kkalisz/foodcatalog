'use client'
import { useAuth } from '@/providers/AuthContext'
import type React from 'react'
import { useFirm, useFirmId } from '@/lib/firebase/restaurants'
import { UserContext } from '@/providers/UserContext'
import PageLoader from '@/components/ui/loader/PageLoader'

export default function OwnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()
  const { firmId, loading } = useFirmId(user?.uid)
  const { firm } = useFirm()
  console.log(firm)
  if (loading) return <PageLoader loadingText={'Ładowanie'} />
  return (
    <>
      <UserContext.Provider value={{ firmId, user, firm }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
