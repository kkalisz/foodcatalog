# LokalGastro API Documentation

## Overview

This document describes the API endpoints for the LokalGastro application.

## Base URL

\`\`\`
/api
\`\`\`

## Endpoints

### Restaurants

#### GET /api/restaurants

Fetch all restaurants with optional filters.

**Query Parameters:**

- `q` (string, optional): Search query for restaurant name, cuisine, or address
- `category` (string, optional): Filter by category (Italian, Japanese, etc.)
- `priceRange` (string, optional): Filter by price range ($, $$, $$$)

**Response:**
\`\`\`json
[
{
"id": 1,
"name": "La Familia Trattoria",
"category": "Italian",
"rating": 4.8,
"reviewCount": 245,
"address": "ul. Główna 12, Kraków",
"cuisine": ["Italian", "Pasta", "Pizza"],
"priceRange": "$$",
"description": "...",
"lat": 50.0647,
"lng": 19.9449
}
]
\`\`\`

#### POST /api/restaurants

Create a new restaurant listing (owner authentication required).

**Request Body:**
\`\`\`json
{
"name": "Restaurant Name",
"address": "Address",
"phone": "+48 123 456 789",
"website": "website.pl",
"hours": "11:00 - 23:00",
"description": "Description",
"cuisine": ["Cuisine1", "Cuisine2"],
"priceRange": "$$"
}
\`\`\`

#### GET /api/restaurants/[id]

Fetch a specific restaurant by ID.

#### PUT /api/restaurants/[id]

Update restaurant details (owner authentication required).

#### DELETE /api/restaurants/[id]

Delete a restaurant listing (owner authentication required).

### Reviews

#### GET /api/reviews

Fetch reviews for a specific restaurant.

**Query Parameters:**

- `restaurantId` (number, required): Restaurant ID

#### POST /api/reviews

Create a new review for a restaurant.

**Request Body:**
\`\`\`json
{
"restaurantId": 1,
"author": "Name",
"rating": 5,
"text": "Review text"
}
\`\`\`

### Authentication

#### POST /api/auth?action=login

User login endpoint.

**Request Body:**
\`\`\`json
{
"email": "user@example.com",
"password": "password"
}
\`\`\`

#### POST /api/auth?action=register

User registration endpoint.

**Request Body:**
\`\`\`json
{
"email": "user@example.com",
"password": "password",
"name": "Full Name",
"type": "owner" // or "user"
}
\`\`\`

## Next Steps for Production

1. **Database Integration**: Replace mock data with real database queries
   - Use Supabase, Neon, or similar PostgreSQL provider
   - Define proper database schemas

2. **Authentication**: Implement proper auth system
   - Hash passwords with bcrypt
   - Generate and validate JWT tokens
   - Set secure HTTP-only cookies

3. **Validation**: Add input validation and sanitization
   - Validate email formats
   - Sanitize text inputs
   - Validate geographic coordinates

4. **Error Handling**: Improve error responses
   - Add proper error codes
   - Provide meaningful error messages
   - Log errors for debugging

5. **Rate Limiting**: Implement rate limiting
   - Prevent API abuse
   - Limit requests per IP/user
