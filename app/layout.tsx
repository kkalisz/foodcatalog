import "@radix-ui/themes/styles.css"
import type React from "react"
import { Theme } from "@radix-ui/themes"
import "./globals.css"
import { AuthProvider } from "@/providers/AuthContext"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { I18nProvider } from "@/lib/i18n/i18nProvider"
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 font-sans antialiased">
        <Theme appearance="light" accentColor="orange" radius="large">
          <AuthProvider>
            <I18nProvider>
              <Navigation />
              {children}
              <Footer />
            </I18nProvider>
          </AuthProvider>
        </Theme>
        <Analytics />
      </body>
    </html>
  )
}
