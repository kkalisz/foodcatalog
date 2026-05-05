import { Building2, ExternalLink, Handshake, Headphones, Mail, MessageCircle, Phone, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import ContactForm from './contact-form';

const ContactPage = () => {
  const t = useTranslations('contact_policy');

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4 pb-12">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 px-8 py-10 text-center text-white">
        <h1 className="text-3xl font-bold">{t('page_title')}</h1>
        <p className="mx-auto mt-3 max-w-xl text-orange-100">{t('introduction')}</p>
      </div>

      {/* Primary cards: Support + Business */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Customer Support */}
        <div className="rounded-2xl border-2 border-orange-100 bg-orange-50 p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-3">
              <Headphones className="h-7 w-7 text-orange-600" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">{t('sections.1.title')}</h2>
          </div>
          <p className="mb-4 text-sm text-gray-600">{t('cards.support.description')}</p>
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <Mail className="h-4 w-4 shrink-0 text-orange-500" />
              <a href={`mailto:${t('cards.support.email')}`} className="hover:underline">
                {t('cards.support.email')}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <Phone className="h-4 w-4 shrink-0 text-orange-500" />
              <span>
                {t('cards.support.phone')} &middot; {t('cards.support.hours')}
              </span>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-700">
              <MessageCircle className="h-4 w-4 shrink-0 text-orange-500" />
              <span>{t('cards.support.chat_label')}</span>
            </li>
          </ul>
        </div>

        {/* Business Partnerships */}
        <div className="rounded-2xl bg-gray-900 p-6 text-white">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-white/10 p-3">
              <Handshake className="h-7 w-7 text-orange-400" />
            </div>
            <h2 className="text-lg font-bold">{t('sections.2.title')}</h2>
          </div>
          <p className="mb-4 text-sm text-gray-300">{t('cards.business.description')}</p>
          <ul className="mb-5 space-y-2.5">
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <Mail className="h-4 w-4 shrink-0 text-orange-400" />
              <a href={`mailto:${t('cards.business.email')}`} className="hover:text-white hover:underline">
                {t('cards.business.email')}
              </a>
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-300">
              <Phone className="h-4 w-4 shrink-0 text-orange-400" />
              <span>{t('cards.business.phone')}</span>
            </li>
          </ul>
          <Link
            href="/owner/register"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <ExternalLink className="h-4 w-4" />
            {t('partner_cta')}
          </Link>
        </div>
      </div>

      {/* Secondary cards: GDPR + Legal */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Data Protection (GDPR) */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-2.5">
              <Shield className="h-5 w-5 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900">{t('sections.5.title')}</h3>
          </div>
          <p className="mb-3 text-sm text-gray-500">{t('cards.gdpr.description')}</p>
          <a
            href={`mailto:${t('cards.gdpr.email')}`}
            className="flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:underline"
          >
            <Mail className="h-3.5 w-3.5" />
            {t('cards.gdpr.email')}
          </a>
        </div>

        {/* Company Registration */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="rounded-xl bg-gray-100 p-2.5">
              <Building2 className="h-5 w-5 text-gray-600" />
            </div>
            <h3 className="font-semibold text-gray-900">{t('sections.3.title')}</h3>
          </div>
          <p className="mb-3 text-sm text-gray-500">{t('cards.legal.description')}</p>
          <dl className="space-y-1 text-xs text-gray-500">
            <dd className="font-medium text-gray-700">{t('cards.legal.company_name')}</dd>
            <dd>{t('cards.legal.address')}</dd>
            <dd>{t('cards.legal.city')}</dd>
            <div className="pt-1">
              <dt className="inline font-medium text-gray-600">NIP: </dt>
              <dd className="inline">{t('cards.legal.nip')}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-600">REGON: </dt>
              <dd className="inline">{t('cards.legal.regon')}</dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-600">KRS: </dt>
              <dd className="inline">{t('cards.legal.krs')}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <ContactForm
          labels={{
            title: t('form.title'),
            subtitle: t('form.subtitle'),
            name_label: t('form.name_label'),
            name_placeholder: t('form.name_placeholder'),
            email_label: t('form.email_label'),
            email_placeholder: t('form.email_placeholder'),
            subject_label: t('form.subject_label'),
            subject_placeholder: t('form.subject_placeholder'),
            message_label: t('form.message_label'),
            message_placeholder: t('form.message_placeholder'),
            submit: t('form.submit'),
          }}
        />
      </div>
    </div>
  );
};

export default ContactPage;
