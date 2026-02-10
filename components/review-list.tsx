import { Star } from 'lucide-react'

interface Review {
  id: number
  author: string
  rating: number
  date: string
  text: string
}

interface ReviewListProps {
  reviews: Review[]
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="pb-4 border-b last:border-b-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div>
              <p className="font-semibold text-foreground">{review.author}</p>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
          </div>
          <p className="text-foreground text-sm leading-relaxed">
            {review.text}
          </p>
        </div>
      ))}
    </div>
  )
}
