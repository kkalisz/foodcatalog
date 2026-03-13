'use client';

import { useState } from 'react';

import { Flex, Heading, Button } from '@radix-ui/themes';
import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export const RestaurantReviews = () => {
  const t = useTranslations();
  const [reviewText, setReviewText] = useState('');
  const [userRating, setUserRating] = useState(0);

  const handleSubmitReview = () => {
    // In a real app, this would call an API or Server Action
    console.log('Submitting review:', { reviewText, userRating });
    setReviewText('');
    setUserRating(0);
  };

  return (
    <div className="md:col-span-2 space-y-6">
      <Card className="p-4 sm:p-6">
        <Heading size="5" className="mb-4">
          {t('restaurant_detail.rate_us')}
        </Heading>
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">{t('restaurant_detail.rating')}</div>
          <Flex gap="3">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                onClick={() => setUserRating(star)}
                className="transition-transform hover:scale-110 cursor-pointer"
              >
                <Star
                  className={`w-7 h-7 sm:w-8 sm:h-8 ${
                    star <= userRating ? 'fill-primary text-primary' : 'text-muted-foreground'
                  }`}
                />
              </button>
            ))}
          </Flex>
        </div>
        <div className="mb-4">
          <label className="text-xs sm:text-sm font-medium text-foreground block mb-2">
            {t('restaurant_detail.your_review')}
          </label>
          <Textarea
            placeholder={t('restaurant_detail.describe_experience')}
            value={reviewText}
            onChange={e => setReviewText(e.target.value)}
            className="min-h-20 sm:min-h-24 text-sm"
          />
        </div>
        <Button
          onClick={handleSubmitReview}
          disabled={!reviewText || userRating === 0}
          className="w-full text-sm sm:text-base h-10 sm:h-11 cursor-pointer"
        >
          {t('restaurant_detail.add_review')}
        </Button>
      </Card>
      <Card className="p-4 sm:p-6">
        <Heading size="5">{t('restaurant_detail.recent_reviews')}</Heading>
        <p className="text-muted-foreground text-sm mt-4">
          {/* Recent reviews would go here */}
          No reviews yet.
        </p>
      </Card>
    </div>
  );
};
