'use client';

import { useState } from 'react';

import { Avatar, Box, Flex, Heading } from '@radix-ui/themes';
import { LocateIcon, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import HeaderSearchLocalization from '@/components/search/header-search-localization';
import { useAuth } from '@/providers/AuthContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const { user } = useAuth();
  const router = useRouter();
  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <PageWidthWrapper>
        <Flex align="center" justify="between" className="relative w-full py-4">
          <Flex align="center" gap="2">
            <Link
              href={'/'}
              className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
            >
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </Link>
            <Link href={'/'}>
              <Heading size="4">{t('app_name')}</Heading>
            </Link>
          </Flex>
          <Flex className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm flex justify-center">
            <HeaderSearchLocalization
              icon={<LocateIcon />}
              placeholder={t('nav.search_location_placeholder')}
            />
          </Flex>
          {user ? (
            <Box>
              <Flex align="center" gap="4">
                <Avatar
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback={''}
                />
                {user.email}
              </Flex>
            </Box>
          ) : null}
        </Flex>
        {isOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <Link href="/" className="block px-4 py-2 hover:bg-muted rounded">
              {t('nav.discover')}
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-muted rounded">
              {t('nav.about')}
            </Link>
            <Link href="/login" className="block px-4 py-2 hover:bg-muted rounded">
              {t('nav.sign_in')}
            </Link>
          </div>
        )}
      </PageWidthWrapper>
    </nav>
  );
}
