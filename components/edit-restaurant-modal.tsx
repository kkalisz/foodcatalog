'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Restaurant {
  id: number
  name: string
  status: string
  views: number
  reviews: number
  rating: number
  image: string
}

interface EditRestaurantModalProps {
  restaurant: Restaurant | null
  onClose: () => void
}

export function EditRestaurantModal({
  restaurant,
  onClose,
}: EditRestaurantModalProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: restaurant?.name || '',
    description: '',
    phone: '',
    address: '',
    website: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Save restaurant changes to backend
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold text-foreground">
            {t('edit_restaurant_modal.title')}
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-muted rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              {t('edit_restaurant_modal.name_label')}
            </label>
            <Input name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              {t('edit_restaurant_modal.description_label')}
            </label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={t('edit_restaurant_modal.description_placeholder')}
              className="min-h-24"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              {t('edit_restaurant_modal.phone_label')}
            </label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              {t('edit_restaurant_modal.address_label')}
            </label>
            <Input
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground block mb-2">
              {t('edit_restaurant_modal.website_label')}
            </label>
            <Input
              name="website"
              type="url"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1">
              {t('edit_restaurant_modal.save_changes')}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={onClose}
            >
              {t('edit_restaurant_modal.cancel')}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
