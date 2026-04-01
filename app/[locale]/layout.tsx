import '@radix-ui/themes/styles.css';
import type React from 'react';

import { Flex, Theme } from '@radix-ui/themes';
import './../globals.css';
import { Space_Grotesk } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Toast } from 'radix-ui';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';
import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/header/navigation';
import { GoogleMapsProvider } from '@/components/maps/GoogleMapsProvider';
import { AuthProvider } from '@/providers/AuthContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

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
    <html lang={locale} className={spaceGrotesk.variable}>
      <body className="font-sans antialiased overflow-x-hidden">
        <Theme appearance="light" accentColor="orange" radius="large">
          <AuthProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <Toast.Provider>
                <GoogleMapsProvider>
                  <Flex className="flex flex-col min-h-screen bg-background">
                    <Navigation />
                    <PageWidthWrapper>{children}</PageWidthWrapper>
                    <Footer />
                    <Toast.Viewport className="fixed top-20 right-[40vw] z-[2147483647] flex" />
                  </Flex>
                </GoogleMapsProvider>
              </Toast.Provider>
            </NextIntlClientProvider>
          </AuthProvider>
        </Theme>
      </body>
    </html>
  );
}
