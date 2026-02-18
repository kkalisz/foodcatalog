'use client';

import { useState } from 'react';
import { Flex, Heading } from '@radix-ui/themes';
import { LocateIcon, MapPin, Menu, Search } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { PageSizeWrapper } from '../ui/wrapper';
import HeaderSearchLocalization from '../ui/search/HeaderSearchLocalization';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <nav className="border-b bg-card sticky top-0 z-50">
      <PageSizeWrapper>
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
          <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-sm flex justify-center">
            <HeaderSearchLocalization icon={<LocateIcon />} placeholder={'szukaj po lokalizacji'} />
          </div>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
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
      </PageSizeWrapper>
    </nav>
  );
}
