"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Star, MapPin, Phone, Clock, Globe, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { ReviewList } from "@/components/review-list"
import { RestaurantMap } from "@/components/restaurant-map"
import { RestaurantMenu } from "@/components/restaurant-menu"



// Mock data
const RESTAURANT_DATA: Record<string, any> = {
    "1": {
        id: 1,
        name: "La Familia Trattoria",
        category: "Italian",
        rating: 4.8,
        reviewCount: 245,
        image: "/italian-restaurant-interior.jpg",
        address: "ul. Główna 12, Kraków",
        phone: "+48 12 345 67 89",
        website: "lafamilia.pl",
        hours: "11:00 - 23:00",
        cuisine: ["Italian", "Pasta", "Pizza"],
        priceRange: "$$",
        description:
            "Authentic Italian trattoria with homemade pasta and traditional recipes passed down through generations. Our family has been serving the finest Italian cuisine for over 20 years.",
        lat: 50.0647,
        lng: 19.9449,
        menu: [
            {
                name: "Appetizers",
                items: [
                    {
                        id: "app1",
                        name: "Bruschetta al Pomodoro",
                        description: "Crispy bread topped with fresh tomatoes, garlic, and basil",
                        price: 18.99,
                        category: "Appetizers",
                    },
                    {
                        id: "app2",
                        name: "Calamari Fritti",
                        description: "Tender fried squid with lemon aioli",
                        price: 24.99,
                        category: "Appetizers",
                    },
                    {
                        id: "app3",
                        name: "Caprese Salad",
                        description: "Fresh mozzarella, tomato, basil, and balsamic reduction",
                        price: 19.99,
                        category: "Appetizers",
                    },
                ],
            },
            {
                name: "Pasta",
                items: [
                    {
                        id: "pasta1",
                        name: "Spaghetti Carbonara",
                        description: "Traditional carbonara with guanciale, egg, and Pecorino Romano",
                        price: 32.99,
                        category: "Pasta",
                    },
                    {
                        id: "pasta2",
                        name: "Pappardelle al Cinghiale",
                        description: "Wide ribbon pasta with wild boar ragù and Parmesan",
                        price: 34.99,
                        category: "Pasta",
                    },
                    {
                        id: "pasta3",
                        name: "Ravioli di Ricotta",
                        description: "Homemade ravioli filled with ricotta and spinach, brown butter sauce",
                        price: 28.99,
                        category: "Pasta",
                    },
                ],
            },
            {
                name: "Pizza",
                items: [
                    {
                        id: "pizza1",
                        name: "Margherita",
                        description: "Classic pizza with San Marzano tomatoes, mozzarella, and basil",
                        price: 26.99,
                        category: "Pizza",
                    },
                    {
                        id: "pizza2",
                        name: "Prosciutto e Rucola",
                        description: "Pizza topped with prosciutto, fresh arugula, and shaved Parmesan",
                        price: 29.99,
                        category: "Pizza",
                    },
                    {
                        id: "pizza3",
                        name: "Quattro Formaggi",
                        description: "Four cheese blend: mozzarella, gorgonzola, pecorino, and ricotta",
                        price: 31.99,
                        category: "Pizza",
                    },
                ],
            },
            {
                name: "Desserts",
                items: [
                    {
                        id: "des1",
                        name: "Tiramisu",
                        description: "Classic Italian dessert with mascarpone, coffee, and cocoa",
                        price: 12.99,
                        category: "Desserts",
                    },
                    {
                        id: "des2",
                        name: "Panna Cotta",
                        description: "Silky cream dessert with berry compote",
                        price: 11.99,
                        category: "Desserts",
                    },
                ],
            },
        ],
    },
    "2": {
        id: 2,
        name: "Sushi & More",
        category: "Japanese",
        rating: 4.6,
        reviewCount: 189,
        image: "/japanese-sushi-restaurant.png",
        address: "Rynek 5, Kraków",
        phone: "+48 12 987 65 43",
        website: "sushi-more.pl",
        hours: "12:00 - 22:00",
        cuisine: ["Japanese", "Sushi", "Asian"],
        priceRange: "$$$",
        description:
            "Premium sushi restaurant featuring fresh, high-quality ingredients sourced directly from specialized suppliers. Experience authentic Japanese cuisine prepared by master sushi chefs.",
        lat: 50.0649,
        lng: 19.9354,
        menu: [
            {
                name: "Rolls",
                items: [
                    {
                        id: "roll1",
                        name: "California Roll",
                        description: "Crab, avocado, cucumber with sesame seeds",
                        price: 22.99,
                        category: "Rolls",
                    },
                    {
                        id: "roll2",
                        name: "Spicy Tuna Roll",
                        description: "Tuna mixed with spicy mayo and wasabi",
                        price: 24.99,
                        category: "Rolls",
                    },
                    {
                        id: "roll3",
                        name: "Dragon Roll",
                        description: "Shrimp tempura, cucumber topped with avocado and eel",
                        price: 28.99,
                        category: "Rolls",
                    },
                ],
            },
            {
                name: "Nigiri",
                items: [
                    {
                        id: "nig1",
                        name: "Salmon Nigiri (2 pieces)",
                        description: "Fresh Atlantic salmon on seasoned rice",
                        price: 18.99,
                        category: "Nigiri",
                    },
                    {
                        id: "nig2",
                        name: "Tuna Nigiri (2 pieces)",
                        description: "Premium bluefin tuna on seasoned rice",
                        price: 21.99,
                        category: "Nigiri",
                    },
                    {
                        id: "nig3",
                        name: "Sea Urchin Nigiri (2 pieces)",
                        description: "Fresh uni on seasoned rice",
                        price: 26.99,
                        category: "Nigiri",
                    },
                ],
            },
            {
                name: "Appetizers",
                items: [
                    {
                        id: "sushi_app1",
                        name: "Edamame",
                        description: "Steamed soybeans with sea salt",
                        price: 8.99,
                        category: "Appetizers",
                    },
                    {
                        id: "sushi_app2",
                        name: "Gyoza",
                        description: "Pan-fried dumplings with ponzu sauce",
                        price: 11.99,
                        category: "Appetizers",
                    },
                ],
            },
        ],
    },
    "3": {
        id: 3,
        name: "Grill House",
        category: "Steakhouse",
        rating: 4.7,
        reviewCount: 312,
        image: "/steakhouse-interior.jpg",
        address: "ul. Szeroka 8, Kraków",
        phone: "+48 12 555 44 33",
        website: "grillhouse.pl",
        hours: "17:00 - 23:00",
        cuisine: ["Grill", "Steak", "Meat"],
        priceRange: "$$$",
        description:
            "Award-winning steakhouse specializing in premium cuts of beef, grilled to perfection. Our expert chefs combine traditional grilling techniques with modern culinary innovation.",
        lat: 50.061,
        lng: 19.9385,
        menu: [
            {
                name: "Steaks",
                items: [
                    {
                        id: "steak1",
                        name: "Ribeye 350g",
                        description: "Prime ribeye grilled to your preference with herb butter",
                        price: 89.99,
                        category: "Steaks",
                    },
                    {
                        id: "steak2",
                        name: "Filet Mignon 280g",
                        description: "Tender filet mignon with truffle sauce",
                        price: 94.99,
                        category: "Steaks",
                    },
                    {
                        id: "steak3",
                        name: "T-Bone 500g",
                        description: "Classic T-bone combining strip and tenderloin",
                        price: 79.99,
                        category: "Steaks",
                    },
                ],
            },
            {
                name: "Sides",
                items: [
                    {
                        id: "side1",
                        name: "Loaded Baked Potato",
                        description: "Baked potato with bacon, sour cream, and cheddar",
                        price: 14.99,
                        category: "Sides",
                    },
                    {
                        id: "side2",
                        name: "Grilled Vegetables",
                        description: "Seasonal vegetables grilled with olive oil and herbs",
                        price: 12.99,
                        category: "Sides",
                    },
                ],
            },
            {
                name: "Appetizers",
                items: [
                    {
                        id: "steak_app1",
                        name: "Oysters Rockefeller",
                        description: "Fresh oysters with spinach, butter, and breadcrumbs",
                        price: 19.99,
                        category: "Appetizers",
                    },
                    {
                        id: "steak_app2",
                        name: "Beef Carpaccio",
                        description: "Thin sliced raw beef with olive oil and parmesan",
                        price: 17.99,
                        category: "Appetizers",
                    },
                ],
            },
        ],
    },
}

const MOCK_REVIEWS = [
    {
        id: 1,
        author: "Anna Kowalski",
        rating: 5,
        date: "2 days ago",
        text: "Fantastic experience! The pasta was incredible and the atmosphere was so welcoming. Definitely coming back.",
    },
    {
        id: 2,
        author: "Piotr Nowak",
        rating: 4,
        date: "1 week ago",
        text: "Great food and excellent service. The only downside was the wait time during peak hours.",
    },
    {
        id: 3,
        author: "Maria Lewandowska",
        rating: 5,
        date: "2 weeks ago",
        text: "Best Italian restaurant in Kraków! The homemade ravioli was absolutely delicious.",
    },
]

export default function RestaurantPage({ params }: { params: { id: string } }) {
    const [reviewText, setReviewText] = useState("")
    const [userRating, setUserRating] = useState(0)

    const { id } = useParams()
    const restaurant = RESTAURANT_DATA[params.id] || RESTAURANT_DATA["1"]

    const handleSubmitReview = () => {
        // TODO: Submit review to backend
        setReviewText("")
        setUserRating(0)
    }

    return (
        <main className="min-h-screen bg-background">
            {/* Header Image - Mobile optimized */}
            <div className="relative h-64 sm:h-80 md:h-96 bg-muted overflow-hidden">
                <img
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                />
                <Link
                    href="/discover"
                    className="absolute top-4 left-4 bg-background/80 hover:bg-background rounded-full p-2 transition"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
                {/* Restaurant Info - Mobile: stacked, Tablet+: grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
                    {/* Main Info */}
                    <div className="md:col-span-2">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                            {restaurant.name}
                        </h1>
                        <h2></h2>
                        {/* Rating */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
                            <div className="flex items-center gap-1">
                                <Star className="w-5 h-5 fill-primary text-primary" />
                                <span className="text-lg sm:text-xl font-bold text-foreground">{restaurant.rating}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">({restaurant.reviewCount} reviews)</span>
                            <span className="text-xs sm:text-sm bg-muted text-muted-foreground px-2.5 py-1 rounded">
                                {restaurant.category}
                            </span>
                        </div>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-muted-foreground mb-6">{restaurant.description}</p>

                        {/* Cuisine Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {restaurant.cuisine.map((c: string) => (
                                <span
                                    key={c}
                                    className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                                >
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Card - Mobile: full width at top, Tablet+: sidebar */}
                    <Card className="p-4 sm:p-6 h-fit md:col-span-1 order-first md:order-last">
                        <h3 className="font-bold text-base sm:text-lg mb-4">Contact</h3>
                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground">Address</p>
                                    <p className="text-sm sm:text-base font-medium text-foreground">{restaurant.address}</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground">Phone</p>
                                    <a
                                        href={`tel:${restaurant.phone}`}
                                        className="text-sm sm:text-base font-medium text-primary hover:underline"
                                    >
                                        {restaurant.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-xs sm:text-sm text-muted-foreground">Hours</p>
                                    <p className="text-sm sm:text-base font-medium text-foreground">{restaurant.hours}</p>
                                </div>
                            </div>

                            {/* Website */}
                            {restaurant.website && (
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs sm:text-sm text-muted-foreground">Website</p>
                                        <a
                                            href={`https://${restaurant.website}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm sm:text-base font-medium text-primary hover:underline truncate"
                                        >
                                            {restaurant.website}
                                        </a>
                                    </div>
                                </div>
                            )}

                            <Button className="w-full mt-6 text-sm sm:text-base h-10 sm:h-11">Reserve a Table</Button>
                        </div>
                    </Card>
                </div>

                {/* Menu Section */}
                <div className="mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Menu</h2>
                    <RestaurantMenu categories={restaurant.menu} />
                </div>

                {/* Map and Reviews - Mobile: stacked, Desktop: grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Map - Mobile: below reviews, Desktop: sidebar */}
                    <Card className="md:col-span-1 p-3 sm:p-4 order-last md:order-first">
                        <h3 className="font-bold text-base sm:text-lg mb-4">Location</h3>
                        <RestaurantMap lat={restaurant.lat} lng={restaurant.lng} name={restaurant.name} />
                    </Card>

                    {/* Reviews Section */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Write Review */}
                        <Card className="p-4 sm:p-6">
                            <h3 className="font-bold text-base sm:text-lg mb-4">Share Your Experience</h3>

                            {/* Rating */}
                            <div className="mb-4">
                                <label className="text-xs sm:text-sm font-medium text-foreground block mb-3">Rating</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            onClick={() => setUserRating(star)}
                                            className="transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-7 h-7 sm:w-8 sm:h-8 ${star <= userRating ? "fill-primary text-primary" : "text-muted-foreground"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Review Text */}
                            <div className="mb-4">
                                <label className="text-xs sm:text-sm font-medium text-foreground block mb-2">Your Review</label>
                                <Textarea
                                    placeholder="Share your dining experience..."
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                    className="min-h-20 sm:min-h-24 text-sm"
                                />
                            </div>

                            <Button
                                onClick={handleSubmitReview}
                                disabled={!reviewText || userRating === 0}
                                className="w-full text-sm sm:text-base h-10 sm:h-11"
                            >
                                Post Review
                            </Button>
                        </Card>

                        {/* Reviews List */}
                        <Card className="p-4 sm:p-6">
                            <h3 className="font-bold text-base sm:text-lg mb-6">Recent Reviews</h3>
                            <ReviewList reviews={MOCK_REVIEWS} />
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}
