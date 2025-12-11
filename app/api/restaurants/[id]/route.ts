import { type NextRequest, NextResponse } from "next/server"

const RESTAURANT_DB: Record<string, any> = {
  "1": {
    id: 1,
    name: "La Familia Trattoria",
    category: "Italian",
    rating: 4.8,
    reviewCount: 245,
    address: "ul. Główna 12, Kraków",
    phone: "+48 12 345 67 89",
    website: "lafamilia.pl",
    hours: "11:00 - 23:00",
    cuisine: ["Italian", "Pasta", "Pizza"],
    priceRange: "$$",
    description:
      "Authentic Italian trattoria with homemade pasta and traditional recipes passed down through generations.",
    lat: 50.0647,
    lng: 19.9449,
  },
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const restaurant = RESTAURANT_DB[params.id]

    if (!restaurant) {
      return NextResponse.json({ error: "Restaurant not found" }, { status: 404 })
    }

    return NextResponse.json(restaurant)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch restaurant" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()

    // TODO: Verify owner authentication
    // TODO: Update in database

    return NextResponse.json({
      id: params.id,
      ...body,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update restaurant" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // TODO: Verify owner authentication
    // TODO: Delete from database

    return NextResponse.json({ message: "Restaurant deleted successfully" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete restaurant" }, { status: 500 })
  }
}
