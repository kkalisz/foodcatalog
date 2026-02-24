import '@radix-ui/themes/styles.css';
import type React from 'react';

import { Theme } from '@radix-ui/themes';

import './globals.css';
import { Analytics } from '@vercel/analytics/next';

import { I18nProvider } from '@/lib/i18n/i18nProvider';
import { AuthProvider } from '@/providers/AuthContext';
import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/header/navigation';
import { Toast } from 'radix-ui';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 font-sans antialiased">
        <Theme appearance="light" accentColor="orange" radius="large">
          <AuthProvider>
            <I18nProvider>
              <Toast.Provider>
                <div className="flex flex-col min-h-screen bg-background">
                  <Navigation />
                  {children}
                  <Toast.Viewport className="fixed top-20 right-[40vw] z-[2147483647] flex" />
                  <Footer />
                </div>
              </Toast.Provider>
            </I18nProvider>
          </AuthProvider>
        </Theme>
        <Analytics />
      </body>
    </html>
  );
}
