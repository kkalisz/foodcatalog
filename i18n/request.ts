import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Normally we would get the locale from the requestLocale parameter
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  try {
    const messages = (await import(`../lib/i18n/locales/${locale}/common.json`)).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`[i18n/request.ts] failed to load messages for: ${locale}`, error);
    return {
      locale,
      messages: {},
    };
  }
});
