import { type NextRequest, NextResponse } from "next/server"

const REVIEWS_DB: any[] = [
  {
    id: 1,
    restaurantId: 1,
    author: "Anna Kowalski",
    rating: 5,
    date: "2024-01-15",
    text: "Fantastic experience! The pasta was incredible.",
  },
]

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const restaurantId = searchParams.get("restaurantId")

    if (!restaurantId) {
      return NextResponse.json({ error: "restaurantId is required" }, { status: 400 })
    }

    const reviews = REVIEWS_DB.filter((r) => r.restaurantId === Number.parseInt(restaurantId))

    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.restaurantId || !body.rating || !body.text) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // TODO: Save to database
    // TODO: Validate user authentication (optional for MVP)

    const review = {
      id: Math.random(),
      ...body,
      date: new Date().toISOString().split("T")[0],
    }

    return NextResponse.json(review, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
  }
}
