import * as React from 'react';

import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  max?: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export function RatingStars({
  rating,
  max = 5,
  onRatingChange,
  interactive = false,
  size = 'md',
  className,
  ...props
}: RatingStarsProps) {
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className={cn('flex items-center gap-1', className)} {...props}>
      {stars.map(star => {
        const isFilled = star <= rating;
        const Component = interactive ? 'button' : 'div';

        return (
          <Component
            key={star}
            type={interactive ? 'button' : undefined}
            onClick={interactive ? () => onRatingChange?.(star) : undefined}
            className={cn(
              interactive &&
                'transition-transform hover:scale-110 cursor-pointer focus:outline-none'
            )}
          >
            <Star
              className={cn(
                sizeMap[size],
                isFilled ? 'fill-primary text-primary' : 'text-muted-foreground'
              )}
            />
          </Component>
        );
      })}
    </div>
  );
}
