"use client"

import { useState, useMemo } from "react"
import { ChevronDown, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
}

interface MenuCategory {
  name: string
  items: MenuItem[]
}

interface RestaurantMenuProps {
  categories: MenuCategory[]
}

export function RestaurantMenu({ categories }: RestaurantMenuProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(categories.map((cat) => cat.name)))
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      }))
      .filter((category) => category.items.length > 0)
  }, [categories, searchQuery])

  const toggleCategory = (categoryName: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryName)) {
      newExpanded.delete(categoryName)
    } else {
      newExpanded.add(categoryName)
    }
    setExpandedCategories(newExpanded)
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 h-10 sm:h-11 text-sm sm:text-base"
        />
      </div>

      {/* Menu Categories */}
      <div className="space-y-3 sm:space-y-4">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              {/* Category Header - Expandable */}
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-muted transition"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground text-left">{category.name}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    expandedCategories.has(category.name) ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Category Items */}
              {expandedCategories.has(category.name) && (
                <div className="border-t px-4 sm:px-6 py-3 sm:py-4 space-y-4 sm:space-y-5 bg-muted/30">
                  {category.items.map((item) => (
                    <div key={item.id} className="pb-4 sm:pb-5 last:pb-0 border-b last:border-b-0">
                      {/* Item Header */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.name}</h4>
                        </div>
                        <span className="text-base sm:text-lg font-bold text-primary flex-shrink-0 ml-2">
                          {item.price.toFixed(2)} zł
                        </span>
                      </div>

                      {/* Item Description */}
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))
        ) : (
          <Card className="p-6 sm:p-8 text-center">
            <p className="text-muted-foreground text-sm sm:text-base">No menu items found matching "{searchQuery}"</p>
          </Card>
        )}
      </div>
    </div>
  )
}
