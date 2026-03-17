import '@radix-ui/themes/styles.css';
import type React from 'react';

import { Theme } from '@radix-ui/themes';
import './../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Toast } from 'radix-ui';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/header/navigation';
import { GoogleMapsProvider } from '@/components/maps/GoogleMapsProvider';
import { AuthProvider } from '@/providers/AuthContext';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">
        <Theme appearance="light" accentColor="orange" radius="large">
          <AuthProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Toast.Provider>
                <GoogleMapsProvider>
                  <div className="flex flex-col min-h-screen bg-background">
                    <Navigation />
                    <PageWidthWrapper>
                      {children}
                      <Footer />
                    </PageWidthWrapper>
                    <Toast.Viewport className="fixed top-20 right-[40vw] z-[2147483647] flex" />
                  </div>
                </GoogleMapsProvider>
              </Toast.Provider>
            </NextIntlClientProvider>
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
