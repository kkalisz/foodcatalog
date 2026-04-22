'use client';

import { Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import { useAuth } from '@/providers/AuthContext';

import FooterColumns from '../ui/footer/footer-column';

type ColumnLink = { href: string; label: string; external?: boolean };

export const Footer = () => {
  const t = useTranslations();
  const { user } = useAuth();

  const aboutLinks: ColumnLink[] = [
    { href: '/about/aboutUs', label: t('footer.about_us.about') },
    { href: '/about/howitworks', label: t('footer.about_us.how_it_works') },
    { href: '/about/faq', label: t('footer.about_us.faq') },
    { href: '/about/blog', label: t('footer.about_us.blog') },
  ];

  const lawLinks: ColumnLink[] = [
    { href: '/lawinfo/termsandconditions', label: t('footer.law_info.terms') },
    { href: '/lawinfo/privacypolicy', label: t('footer.law_info.privacy_policy') },
    { href: '/lawinfo/cookiepolicy', label: t('footer.law_info.cookies_policy') },
    { href: '/lawinfo/rodo', label: t('footer.law_info.gdpr') },
    { href: '/lawinfo/contact', label: t('footer.law_info.contact') },
  ];

  const restaurantLinks: ColumnLink[] = [
    { href: '/owner/dashboard/restaurants/', label: t('footer.for_restaurators.add_restaurant') },
    { href: user ? '/owner/dashboard' : '/login', label: t('footer.for_restaurators.panel') },
    { href: '/owner/dashboard/subscription', label: t('footer.for_restaurators.pricing') },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-card border-t border-border mt-4">
      <PageWidthWrapper>
        {/* Brand block — wyśrodkowany, jak w V2 header */}
        <Flex
          direction="column"
          align="center"
          gap="4"
          className="text-center border-b border-border pt-3 pb-4"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            — est. 2019 —
          </span>
          <Link
            href="/"
            className="text-3xl font-semibold tracking-tight text-foreground leading-none"
          >
            {t('app_name')}
          </Link>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            katalog lokalnej gastronomii
          </span>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Odkrywaj, zapisuj i dziel się lokalami, które warto znać. Wspieramy niezależną
            gastronomię w Polsce.
          </p>
        </Flex>

        {/* Kolumny linków */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-8 md:py-12">
          <FooterColumns label={t('footer.about_us.heading')} links={aboutLinks} />
          <FooterColumns label={t('footer.law_info.heading')} links={lawLinks} />
          <FooterColumns label={t('footer.for_restaurators.heading')} links={restaurantLinks} />
        </div>

        {/* Meta + socials */}
        <div className="border-t border-border py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {t('app_name')}.pl · {t('all_rights_reserved')}
          </p>
        </div>
      </PageWidthWrapper>
    </footer>
  );
};
