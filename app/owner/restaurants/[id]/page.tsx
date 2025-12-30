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
import { ArrowLeft, Save, AlertCircle } from "lucide-react"

// Mock restaurant data
const RESTAURANTS: Record<string, any> = {
  "1": {
    id: "1",
    name: "La Familia Trattoria",
    description: "Authentic Italian cuisine",
    address: "123 Main St",
    phone: "+48123456789",
    website: "www.lafamilia.pl",
    cuisine: "Italian",
    priceRange: "$$",
    image: "/italian-restaurant-interior.jpg",
  },
  "2": {
    id: "2",
    name: "Mama's Kitchen",
    description: "Homestyle cooking",
    address: "456 Oak Ave",
    phone: "+48987654321",
    website: "www.mamaskitchen.pl",
    cuisine: "Polish",
    priceRange: "$",
    image: "/cozy-kitchen.jpg",
  },
}

export default function RestaurantEditor({ params }: { params: { id: string } }) {
  const router = useRouter()
  const restaurant = RESTAURANTS[params.id]
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState(restaurant || {})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSuccess(false)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    // TODO: Send to API endpoint
    console.log("Saving restaurant:", formData)

    setSaving(false)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
        <Card className="p-6 text-center">
          <p className="text-muted-foreground mb-4">Restaurant not found</p>
          <Button asChild>
            <Link href="/owner/dashboard">Back to Dashboard</Link>
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/owner/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Edit Restaurant</h1>
        </div>

        {/* Success Alert */}
        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200 text-green-800">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Restaurant details saved successfully!</AlertDescription>
          </Alert>
        )}

        {/* Form Card */}
        <Card className="p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Restaurant Name */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Restaurant Name *</label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter restaurant name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Description *</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell customers about your restaurant, cuisine style, atmosphere, etc."
                className="min-h-32"
                required
              />
            </div>

            {/* Two Column Layout for Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Address *</label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street address"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+48 XXX XXX XXX"
                  required
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">Website</label>
              <Input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://www.yourrestaurant.com"
              />
            </div>

            {/* Two Column Layout for Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Cuisine */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Cuisine Type *</label>
                <Input
                  type="text"
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleChange}
                  placeholder="e.g., Italian, Polish, Asian"
                  required
                />
              </div>

              {/* Price Range */}
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Price Range *</label>
                <select
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={(e) => setFormData((prev: any) => ({ ...prev, priceRange: e.target.value }))}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  required
                >
                  <option value="">Select price range</option>
                  <option value="$">$ (Budget-friendly)</option>
                  <option value="$$">$$ (Moderate)</option>
                  <option value="$$$">$$$ (Upscale)</option>
                  <option value="$$$$">$$$$ (Fine dining)</option>
                </select>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 border-t">
              <Button type="submit" className="w-full sm:w-auto h-11 text-base" disabled={saving}>
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto h-11 text-base bg-transparent"
                asChild
              >
                <Link href={`/owner/restaurant/${params.id}/menu`}>Manage Menu</Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto h-11 text-base bg-transparent"
                asChild
              >
                <Link href="/owner/dashboard">Cancel</Link>
              </Button>
            </div>
          </form>
        </Card>

        {/* Preview Card */}
        <Card className="mt-6 sm:mt-8 p-4 sm:p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Preview</h2>
          <div className="border rounded-lg overflow-hidden">
            <img
              src={formData.image || "/placeholder.svg"}
              alt={formData.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-foreground mb-2">{formData.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{formData.description}</p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium text-foreground">Address:</span> {formData.address}
                </p>
                <p>
                  <span className="font-medium text-foreground">Phone:</span> {formData.phone}
                </p>
                <p>
                  <span className="font-medium text-foreground">Cuisine:</span> {formData.cuisine}
                </p>
                <p>
                  <span className="font-medium text-foreground">Price Range:</span> {formData.priceRange}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
