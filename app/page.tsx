'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="flex-1 flex items-center border justify-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('main_page.header')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            {t('main_page.subheader')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/discover">{t('main_page.browse_restaurants')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
