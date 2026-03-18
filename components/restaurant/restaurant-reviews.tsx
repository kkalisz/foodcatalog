'use client';

import { useState } from 'react';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Grid } from '@/components/ui/grid';
import { RatingStars } from '@/components/ui/rating-stars';
import { Section } from '@/components/ui/section';
import { Stack } from '@/components/ui/stack';
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
    <Grid cols={3} className="md:col-span-3">
      <Card className="p-4 sm:p-6 md:col-span-2">
        <Section title={t('restaurant_detail.rate_us')}>
          <Stack gap={4}>
            <Stack gap={2}>
              <div className="text-sm font-medium">{t('restaurant_detail.rating')}</div>
              <RatingStars
                rating={userRating}
                interactive
                onRatingChange={setUserRating}
                size="lg"
              />
            </Stack>

            <Stack gap={2}>
              <label className="text-xs sm:text-sm font-medium text-foreground block">
                {t('restaurant_detail.your_review')}
              </label>
              <Textarea
                placeholder={t('restaurant_detail.describe_experience')}
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                className="min-h-20 sm:min-h-24 text-sm"
              />
            </Stack>

            <Button
              onClick={handleSubmitReview}
              disabled={!reviewText || userRating === 0}
              className="w-full cursor-pointer"
              size="lg"
            >
              {t('restaurant_detail.add_review')}
            </Button>
          </Stack>
        </Section>
      </Card>

      <Card className="p-4 sm:p-6 md:col-span-1 h-fit">
        <Section title={t('restaurant_detail.recent_reviews')}>
          <p className="text-muted-foreground text-sm">No reviews yet.</p>
        </Section>
      </Card>
    </Grid>
  );
};
