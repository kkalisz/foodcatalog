import { NextRequest, NextResponse } from 'next/server'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase/client'

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  // ⬇️ KLUCZOWE: await params
  const { id } = await context.params

  const ref = doc(db, 'public_restaurants', id)
  const snap = await getDoc(ref)

  if (!snap.exists()) {
    return NextResponse.json({ error: 'Restaurant not found' }, { status: 404 })
  }

  return NextResponse.json({
    id: snap.id,
    ...snap.data(),
  })
}
