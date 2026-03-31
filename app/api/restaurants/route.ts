import { type NextRequest, NextResponse } from 'next/server';

// Mock data - replace with actual database queries
const RESTAURANTS_DB = [
  {
    id: 1,
    name: 'La Familia Trattoria',
    category: 'Italian',
    rating: 4.8,
    reviewCount: 245,
    address: 'ul. Główna 12, Kraków',
    cuisine: ['Italian', 'Pasta', 'Pizza'],
    priceRange: '$$',
    description:
      'Authentic Italian trattoria with homemade pasta and traditional recipes passed down through generations.',
    lat: 50.0647,
    lng: 19.9449,
  },
  {
    id: 2,
    name: 'Sushi & More',
    category: 'Japanese',
    rating: 4.6,
    reviewCount: 189,
    address: 'Rynek 5, Kraków',
    cuisine: ['Japanese', 'Sushi', 'Asian'],
    priceRange: '$$$',
    description:
      'Premium sushi restaurant featuring fresh, high-quality ingredients sourced directly.',
    lat: 50.0649,
    lng: 19.9354,
  },
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');
    const category = searchParams.get('category');
    const priceRange = searchParams.get('priceRange');

    let results = RESTAURANTS_DB;

    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(
        r =>
          r.name.toLowerCase().includes(lowerQuery) ||
          r.address.toLowerCase().includes(lowerQuery) ||
          r.cuisine.some(c => c.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by category
    if (category && category !== 'All') {
      results = results.filter(r => r.category === category);
    }

    // Filter by price range
    if (priceRange && priceRange !== 'All') {
      results = results.filter(r => r.priceRange === priceRange);
    }

    return NextResponse.json(results);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch restaurants' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.address) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // TODO: Save to database
    // TODO: Validate owner authentication

    return NextResponse.json(
      {
        id: Math.random(),
        ...body,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: 'Failed to create restaurant' }, { status: 500 });
  }
}
