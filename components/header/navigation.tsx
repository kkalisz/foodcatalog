'use client';

import { useState } from 'react';

import { Avatar } from '@radix-ui/themes';
import { Bookmark, ChevronDown, Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import { useAuth } from '@/providers/AuthContext';

const NAV_LINKS = [
  { href: '/discover', label: 'Restauracje' },
  { href: '/discover', label: 'Kuchnie' },
  { href: '/discover', label: 'Polecane' },
];

export function Navigation() {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <PageWidthWrapper>
        <div className="flex flex-row items-center justify-between py-3 md:py-4">
          <div className="flex items-center w-[40px] md:w-auto">
            <div className="hidden md:flex gap-4">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground font-bold hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              className="md:hidden p-1 rounded-md hover:bg-secondary/50 transition-colors"
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <Link href="/" className="flex flex-col items-center px-4 md:px-8">
            <span className="hidden md:block text-[9px] uppercase tracking-[0.3em] text-muted-foreground font-medium">
              — EST. 2025 —
            </span>
            <span className="text-2xl md:text-4xl font-bold tracking-tighter text-[#1A1A1A] leading-none flex items-baseline">
              szamenie<span className="text-[#FF6B35] italic font-serif ml-0.5">.pl</span>
            </span>
            <span className="hidden md:block text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-medium">
              KATALOG LOKALNEJ GASTRONOMII
            </span>
          </Link>

          <div className="flex items-center gap-2 w-[40px] md:w-auto justify-end">
            <button className="inline-flex items-center gap-1.5 px-2 md:px-3 py-2 rounded-md text-sm font-semibold text-foreground hover:bg-secondary/50 transition-colors">
              <Bookmark className="h-4 w-4 shrink-0" />
              <span className="hidden xl:inline">Ulubione</span>
              <span className="text-[11px] font-bold bg-[#FF6B35]/10 text-[#FF6B35] rounded-full px-2 py-0.5">
                12
              </span>
            </button>
            {user ? (
              <button className="hidden md:flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-transparent hover:border-border hover:bg-white transition-all">
                <Avatar
                  size="1"
                  radius="full"
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=96&h=96&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback="M"
                />
                <span className="hidden lg:inline text-sm font-bold text-foreground">
                  {user.email}
                </span>
                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            ) : (
              <Link
                href="/login"
                className="hidden md:inline text-sm font-bold text-foreground hover:text-primary whitespace-nowrap"
              >
                Zaloguj się
              </Link>
            )}
            <span className="hidden md:inline-flex items-center gap-1 cursor-pointer hover:text-foreground">
              <Globe className="h-3 w-3" />
              <span className="text-sm font-medium">PL</span>
            </span>
          </div>
        </div>
      </PageWidthWrapper>

      {/* Mobile dropdown */}
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
                    Zaloguj się
                  </Link>
                )}
                <div className="flex items-center gap-1 px-3 py-2 cursor-pointer hover:text-foreground">
                  <Globe className="h-3 w-3" />
                  <span className="text-sm font-medium">PL</span>
                </div>
              </div>
            </div>
          </PageWidthWrapper>
        </div>
      )}
    </nav>
  );
}
