"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import { RestaurantCard } from "@/components/restaurant-card"
import { collection, getDocs, query, where } from "firebase/firestore"

//Types
import { PublicRestaurant } from "../../data/types/publicRestaurant"
import { db } from "@/lib/firebase/client"

// Mock data for MVP
const MOCK_RESTAURANTS = [
    {
        id: 1,
        name: "La Familia Trattoria",
        category: "Italian",
        rating: 4.8,
        reviewCount: 245,
        image: "/italian-restaurant-interior.jpg",
        address: "ul. Główna 12, Kraków",
        cuisine: ["Italian", "Pasta", "Pizza"],
        priceRange: "$$",
    },

]

const CATEGORIES = ["All", "Italian", "Japanese", "Steakhouse", "Cafe", "Mexican", "Greek"]
const PRICE_RANGES = ["All", "$", "$$", "$$$"]

export default function DiscoverPage() {

    const [loading, setLoading] = useState(false)
    const [resteurants, setResteurants] = useState<PublicRestaurant[]>([])

    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedPrice, setSelectedPrice] = useState("All")
    const [showFilters, setShowFilters] = useState(false)

    const fetchRestaurants = async () => {
        try {
            const q = query(
                collection(db, "public_restaurants"),
                where("status", "==", "active")
            )

            const snapshot = await getDocs(q)
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<PublicRestaurant, "id">),
            }))

            setResteurants(data)
        }

        catch (error) {
            console.error("Error fetching restaurants:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRestaurants()
    }, [])
    // Close filters on window resize if desktop

    // Filter restaurants based on search and filters
    const filteredRestaurants = MOCK_RESTAURANTS.filter((restaurant) => {
        const matchesSearch =
            restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
            restaurant.cuisine.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))

        const matchesCategory = selectedCategory === "All" || restaurant.category === selectedCategory
        const matchesPrice = selectedPrice === "All" || restaurant.priceRange === selectedPrice

        return matchesSearch && matchesCategory && matchesPrice
    })
    if (loading) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-background">
                <p className="text-foreground text-sm sm:text-base">Loading restaurants...</p>
            </main>
        )
    }
    return (
        <main className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Discover Restaurants</h1>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        Find and explore amazing dining experiences near you
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-6 sm:mb-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search restaurants, cuisine..."
                            className="pl-10 h-12 text-base"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filters - Mobile Toggle and Desktop Always Visible */}
                <div className="mb-6">
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className="md:hidden w-full mb-4 px-4 py-3 bg-muted text-foreground font-medium rounded-lg flex items-center justify-between"
                    >
                        <span>Filters</span>
                        <span className={`transition-transform ${showFilters ? "rotate-180" : ""}`}>▼</span>
                    </button>

                    <div className={`grid gap-4 mb-6 ${showFilters ? "block" : "hidden"} md:block`}>
                        {/* Category Filter */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-3">Category</h3>
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map((category) => (
                                    <Button
                                        key={category}
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => {
                                            setSelectedCategory(category)
                                            setShowFilters(false)
                                        }}
                                        className="text-xs sm:text-sm"
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <h3 className="text-sm font-semibold text-foreground mb-3">Price Range</h3>
                            <div className="flex flex-wrap gap-2">
                                {PRICE_RANGES.map((price) => (
                                    <Button
                                        key={price}
                                        variant={selectedPrice === price ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => {
                                            setSelectedPrice(price)
                                            setShowFilters(false)
                                        }}
                                        className="text-xs sm:text-sm"
                                    >
                                        {price === "All" ? "All" : price}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Info */}
                <div className="mb-6">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                        Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {/* Restaurant Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
                {filteredRestaurants.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {filteredRestaurants.map((restaurant) => (
                            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                        ))}
                    </div>
                ) : (
                    <Card className="p-8 sm:p-12 text-center">
                        <p className="text-sm sm:text-base text-muted-foreground mb-2">No restaurants found</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Try adjusting your search or filters</p>
                    </Card>
                )}
            </div>
        </main>
    )
}
