"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Save, Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, Edit2, Check, X } from "lucide-react"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
}

interface MenuCategory {
  id: string
  category: string
  items: MenuItem[]
  expanded: boolean
}

// Mock menu data
const RESTAURANT_MENUS: Record<string, MenuCategory[]> = {
  "1": [
    {
      id: "m1",
      category: "Appetizers",
      expanded: true,
      items: [
        {
          id: "i1",
          name: "Bruschetta al Pomodoro",
          description: "Fresh tomato and basil on toasted bread",
          price: 24,
        },
        {
          id: "i2",
          name: "Calamari Fritti",
          description: "Crispy fried squid",
          price: 34,
        },
      ],
    },
    {
      id: "m2",
      category: "Main Courses",
      expanded: true,
      items: [
        {
          id: "i3",
          name: "Pasta Carbonara",
          description: "Classic Roman pasta with eggs and bacon",
          price: 42,
        },
        {
          id: "i4",
          name: "Risotto ai Funghi",
          description: "Creamy mushroom risotto",
          price: 45,
        },
      ],
    },
  ],
  "2": [
    {
      id: "m3",
      category: "Soups",
      expanded: true,
      items: [
        {
          id: "i5",
          name: "Barszcz",
          description: "Traditional beet soup",
          price: 18,
        },
      ],
    },
  ],
}

import { useParams } from "next/navigation"

export default function MenuEditor() {
  const params = useParams()
  const restaurantId = params.id as string
  const router = useRouter()
  const [menu, setMenu] = useState<MenuCategory[]>(RESTAURANT_MENUS[restaurantId] || [])
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [editingItem, setEditingItem] = useState<string | null>(null)
  const [editedItem, setEditedItem] = useState<MenuItem | null>(null)

  const handleAddCategory = () => {
    const newCategory: MenuCategory = {
      id: `m${Date.now()}`,
      category: "New Category",
      expanded: true,
      items: [],
    }
    setMenu([...menu, newCategory])
  }

  const handleAddItem = (categoryId: string) => {
    setMenu(
      menu.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: [
                ...cat.items,
                {
                  id: `i${Date.now()}`,
                  name: "New Item",
                  description: "Item description",
                  price: 0,
                },
              ],
            }
          : cat,
      ),
    )
  }

  const handleToggleCategory = (categoryId: string) => {
    setMenu(menu.map((cat) => (cat.id === categoryId ? { ...cat, expanded: !cat.expanded } : cat)))
  }

  const handleDeleteItem = (categoryId: string, itemId: string) => {
    setMenu(
      menu.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.filter((item) => item.id !== itemId),
            }
          : cat,
      ),
    )
  }

  const handleDeleteCategory = (categoryId: string) => {
    setMenu(menu.filter((cat) => cat.id !== categoryId))
  }

  const handleEditItem = (categoryId: string, item: MenuItem) => {
    setEditingItem(`${categoryId}-${item.id}`)
    setEditedItem({ ...item })
  }

  const handleSaveItem = (categoryId: string, itemId: string) => {
    if (!editedItem) return

    setMenu(
      menu.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.map((item) => (item.id === itemId ? editedItem : item)),
            }
          : cat,
      ),
    )
    setEditingItem(null)
    setEditedItem(null)
  }

  const handleUpdateCategory = (categoryId: string, newName: string) => {
    setMenu(menu.map((cat) => (cat.id === categoryId ? { ...cat, category: newName } : cat)))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // TODO: Send to API endpoint
    console.log("Saving menu:", menu)

    setSaving(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/owner/restaurant/${restaurantId}`}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Menu Editor</h1>
        </div>

        {/* Success Alert */}
        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200 text-green-800">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Menu saved successfully!</AlertDescription>
          </Alert>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Categories */}
          {menu.length === 0 ? (
            <Card className="p-6 text-center">
              <p className="text-muted-foreground mb-4">No menu categories yet. Add your first category below.</p>
            </Card>
          ) : (
            menu.map((category) => (
              <Card key={category.id} className="p-4 sm:p-6">
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => handleToggleCategory(category.id)}
                    className="flex items-center gap-2 flex-1 hover:opacity-70 transition-opacity"
                  >
                    {category.expanded ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                    <input
                      type="text"
                      value={category.category}
                      onChange={(e) => handleUpdateCategory(category.id, e.target.value)}
                      className="text-lg font-bold text-foreground bg-transparent border-0 p-0 focus:outline-none focus:ring-2 focus:ring-primary rounded px-2"
                    />
                  </button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>

                {/* Items */}
                {category.expanded && (
                  <>
                    <div className="space-y-3 mb-4">
                      {category.items.map((item) => {
                        const isEditing = editingItem === `${category.id}-${item.id}`

                        return (
                          <div key={item.id} className="border rounded-lg p-3 sm:p-4 bg-muted/50">
                            {isEditing && editedItem ? (
                              // Edit Mode
                              <>
                                <div className="space-y-3 mb-3">
                                  <div>
                                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                                      Item Name
                                    </label>
                                    <Input
                                      type="text"
                                      value={editedItem.name}
                                      onChange={(e) => setEditedItem({ ...editedItem, name: e.target.value })}
                                      className="h-9"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                                      Description
                                    </label>
                                    <Textarea
                                      value={editedItem.description}
                                      onChange={(e) => setEditedItem({ ...editedItem, description: e.target.value })}
                                      className="min-h-20 resize-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="text-xs font-medium text-muted-foreground block mb-1">
                                      Price (PLN)
                                    </label>
                                    <Input
                                      type="number"
                                      step="0.01"
                                      value={editedItem.price}
                                      onChange={(e) =>
                                        setEditedItem({ ...editedItem, price: Number.parseFloat(e.target.value) })
                                      }
                                      className="h-9"
                                    />
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    type="button"
                                    size="sm"
                                    onClick={() => handleSaveItem(category.id, item.id)}
                                    className="h-8 text-xs"
                                  >
                                    <Check className="w-3 h-3 mr-1" />
                                    Save
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      setEditingItem(null)
                                      setEditedItem(null)
                                    }}
                                    className="h-8 text-xs bg-transparent"
                                  >
                                    <X className="w-3 h-3 mr-1" />
                                    Cancel
                                  </Button>
                                </div>
                              </>
                            ) : (
                              // View Mode
                              <>
                                <div className="flex justify-between items-start gap-2 mb-2">
                                  <h4 className="font-bold text-foreground text-sm sm:text-base">{item.name}</h4>
                                  <span className="text-primary font-bold text-sm sm:text-base whitespace-nowrap">
                                    {item.price} PLN
                                  </span>
                                </div>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-3">{item.description}</p>
                                <div className="flex gap-2">
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleEditItem(category.id, item)}
                                    className="flex-1 h-8 text-xs bg-transparent"
                                  >
                                    <Edit2 className="w-3 h-3 mr-1" />
                                    Edit
                                  </Button>
                                  <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handleDeleteItem(category.id, item.id)}
                                    className="h-8 text-xs text-destructive hover:text-destructive bg-transparent"
                                  >
                                    <Trash2 className="w-3 h-3" />
                                  </Button>
                                </div>
                              </>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Add Item Button */}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddItem(category.id)}
                      className="w-full bg-transparent text-sm h-9"
                    >
                      <Plus className="w-3 h-3 mr-2" />
                      Add Item
                    </Button>
                  </>
                )}
              </Card>
            ))
          )}

          {/* Add Category Button */}
          <Button type="button" variant="outline" onClick={handleAddCategory} className="w-full bg-transparent h-11">
            <Plus className="w-4 h-4 mr-2" />
            Add Category
          </Button>

          {/* Submit Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t">
            <Button type="submit" className="w-full sm:w-auto h-11 text-base" disabled={saving}>
              <Save className="w-4 h-4 mr-2" />
              {saving ? "Saving..." : "Save Menu"}
            </Button>
            <Button type="button" variant="outline" className="w-full sm:w-auto h-11 text-base bg-transparent" asChild>
              <Link href="/owner/dashboard">Done</Link>
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
