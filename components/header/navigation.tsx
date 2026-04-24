'use client';

import { useState } from 'react';

import { Avatar } from '@radix-ui/themes';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import { useAuth } from '@/providers/AuthContext';

export function Navigation() {
  const { user } = useAuth();
  const t = useTranslations('nav');
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { href: '/discover', label: t('restaurants') },
    { href: '/discover', label: t('cuisines') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-border p-4">
      <PageWidthWrapper>
        <div className="relative flex flex-row items-center justify-between w-full py-3 md:py-4">
          <div className="flex items-center gap-4 z-10">
            <div className="hidden md:flex gap-4">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground font-bold hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              className="md:hidden p-1 -ml-1 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileOpen(prev => !prev)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
            <Link href="/" className="flex flex-col items-center">
              <span className="block text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-medium whitespace-nowrap">
                — EST. 2025 —
              </span>
              <span className="text-2xl md:text-4xl font-bold tracking-tighter text-[#1A1A1A] leading-none flex items-baseline">
                szamanie<span className="text-[#FF6B35] italic font-serif ml-0.5">.pl</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-medium whitespace-nowrap">
                {t('catalog_subtitle')}
              </span>
            </Link>
          </div>
          <div className="flex items-center justify-end z-10">
            {user ? (
              <button className="hidden md:flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:border-border hover:bg-white transition-all">
                <Avatar
                  size="2"
                  radius="full"
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=96&h=96&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="M"
                />
                <span className="inline text-sm font-bold text-foreground whitespace-nowrap max-w-[150px] truncate">
                  {user.email}
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden md:inline text-sm font-bold text-foreground hover:text-primary whitespace-nowrap"
              >
                {t('login')}
              </Link>
            )}

            <button className="md:hidden ...">...</button>
          </div>
        </div>
      </PageWidthWrapper>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white shadow-md">
          <PageWidthWrapper>
            <div className="py-3 flex flex-col gap-1">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-3 rounded-md text-sm font-bold text-foreground hover:bg-secondary/30 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border mt-2 pt-2 flex flex-col gap-1">
                {user ? (
                  <div className="flex items-center gap-2 px-3 py-2">
                    <Avatar
                      size="1"
                      radius="full"
                      src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=96&h=96&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                      fallback="M"
                    />
                    <span className="text-sm font-bold text-foreground">{user.email}</span>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 rounded-md text-sm font-bold text-foreground hover:bg-secondary/30 transition-colors"
                  >
                    {t('login')}
                  </Link>
                )}
                <div className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:text-foreground">
                  <Globe className="h-3 w-3" />
                  <span className="text-sm font-medium">{locale.toUpperCase()}</span>
                </div>
              </div>
            </div>
          </PageWidthWrapper>
        </div>
      )}
    </nav>
  );
}
