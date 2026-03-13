'use client';

import { useState, useEffect, type ReactNode } from 'react';

import { I18nextProvider } from 'react-i18next';

import i18n from './i18n.client';

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // During SSR and initial hydration, render null to avoid mismatch
  // This ensures translations only render after client-side i18n is ready
  // NOTE: This should be re-evaluated as guidelines suggest it hurts SEO.
  // Now that we have NextIntlClientProvider wrapping it, this might be less critical
  // if we migrate client components to use useTranslations from next-intl.
  if (!isClient) {
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
