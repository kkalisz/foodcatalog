import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('main_page');
  return (
    <main className="flex-1 flex items-center border justify-center bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-12 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t('header')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
            {t('subheader')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="4" asChild>
              <Link href="/discover">{t('browse_restaurants')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
