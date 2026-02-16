'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { PageSizeWrapper } from '@/components/ui/wrapper';
import { Flex } from '@radix-ui/themes';

export default function Home() {
  const { t } = useTranslation();
  return (
      <PageSizeWrapper>   
        <Flex align="center" justify="center">
          <Flex direction="column" align="center" justify="center" gap="4">
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
          </Flex>
        </Flex>
    </PageSizeWrapper>
  );
}
