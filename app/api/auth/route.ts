import { type NextRequest, NextResponse } from 'next/server';

// Mock owner database - replace with actual database
const OWNERS_DB: Record<string, any> = {
  'owner@example.com': {
    id: '1',
    email: 'owner@example.com',
    name: 'John Doe',
    role: 'owner',
    restaurants: ['1', '2'],
  },
};

// Mock restaurants database
const RESTAURANTS_DB: Record<string, any> = {
  '1': {
    id: '1',
    ownerId: '1',
    name: 'La Familia Trattoria',
    description: 'Authentic Italian cuisine',
    address: '123 Main St',
    phone: '+48123456789',
    website: 'www.lafamilia.pl',
    cuisine: 'Italian',
    priceRange: '$$',
    image: '/italian-restaurant-interior.jpg',
    menu: [
      {
        id: 'm1',
        category: 'Appetizers',
        items: [
          {
            id: 'i1',
            name: 'Bruschetta al Pomodoro',
            description: 'Fresh tomato and basil on toasted bread',
            price: 24,
          },
          {
            id: 'i2',
            name: 'Calamari Fritti',
            description: 'Crispy fried squid',
            price: 34,
          },
        ],
      },
      {
        id: 'm2',
        category: 'Main Courses',
        items: [
          {
            id: 'i3',
            name: 'Pasta Carbonara',
            description: 'Classic Roman pasta with eggs and bacon',
            price: 42,
          },
          {
            id: 'i4',
            name: 'Risotto ai Funghi',
            description: 'Creamy mushroom risotto',
            price: 45,
          },
        ],
      },
    ],
  },
  '2': {
    id: '2',
    ownerId: '1',
    name: "Mama's Kitchen",
    description: 'Homestyle cooking',
    address: '456 Oak Ave',
    phone: '+48987654321',
    website: 'www.mamaskitchen.pl',
    cuisine: 'Polish',
    priceRange: '$',
    image: '/cozy-kitchen.jpg',
    menu: [
      {
        id: 'm3',
        category: 'Soups',
        items: [
          {
            id: 'i5',
            name: 'Barszcz',
            description: 'Traditional beet soup',
            price: 18,
          },
        ],
      },
    ],
  },
};

export async function POST(request: NextRequest) {
  try {
    const action = request.nextUrl.searchParams.get('action');

    if (action === 'login') {
      const { email, password } = await request.json();

      const owner = OWNERS_DB[email];

      if (!owner) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }

      // TODO: In production, use bcrypt to verify password hash
      // For now, accept any password for demo purposes
      // const passwordMatch = await bcrypt.compare(password, owner.passwordHash)

      return NextResponse.json({
        user: owner,
        token: `jwt-token-${owner.id}`,
      });
    } else if (action === 'register') {
      const { email, password, name, type } = await request.json();

      if (OWNERS_DB[email]) {
        return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
      }

      const newOwner = {
        id: Math.random().toString(),
        email,
        name,
        role: type || 'user',
        restaurants: [],
      };

      // TODO: In production, hash password with bcrypt before storing
      // const passwordHash = await bcrypt.hash(password, 10)
      OWNERS_DB[email] = newOwner;

      return NextResponse.json(newOwner, { status: 201 });
    } else if (action === 'get-restaurants') {
      const authHeader = request.headers.get('authorization');
      const token = authHeader?.split(' ')[1];

      // TODO: Verify JWT token in production
      const owner = Object.values(OWNERS_DB).find(o => `jwt-token-${o.id}` === token);

      if (!owner) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const restaurants = owner.restaurants.map((id: string) => RESTAURANTS_DB[id]).filter(Boolean);

      return NextResponse.json({ restaurants });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}
