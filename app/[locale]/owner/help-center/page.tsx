'use client';

import type React from 'react';
import { useEffect, useState } from 'react';

import { Button } from '@radix-ui/themes';
import { ChevronDown, LogOut, Menu, Send, Mail, Phone, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { getOwnerSession, clearOwnerSession } from '@/lib/auth';

export default function HelpCenterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const t = useTranslations();

  const FAQ_ITEMS = [
    {
      id: 1,
      question: t('help_center_page.faq.q1'),
      answer: t('help_center_page.faq.a1'),
    },
    {
      id: 2,
      question: t('help_center_page.faq.q2'),
      answer: t('help_center_page.faq.a2'),
    },
    {
      id: 3,
      question: t('help_center_page.faq.q3'),
      answer: t('help_center_page.faq.a3'),
    },
    {
      id: 4,
      question: t('help_center_page.faq.q4'),
      answer: t('help_center_page.faq.a4'),
    },
    {
      id: 5,
      question: t('help_center_page.faq.q5'),
      answer: t('help_center_page.faq.a5'),
    },
    {
      id: 6,
      question: t('help_center_page.faq.q6'),
      answer: t('help_center_page.faq.a6'),
    },
    {
      id: 7,
      question: t('help_center_page.faq.q7'),
      answer: t('help_center_page.faq.a7'),
    },
    {
      id: 8,
      question: t('help_center_page.faq.q8'),
      answer: t('help_center_page.faq.a8'),
    },
  ];

  useEffect(() => {
    const session = getOwnerSession();
    if (!session) {
      router.push('/owner/login');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  const handleLogout = () => {
    clearOwnerSession();
    router.push('/owner/login');
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const filteredFAQ = FAQ_ITEMS.filter(
    item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">{t('help_center_page.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-muted/30">
      {/* Mobile Header */}
      <div className="md:hidden border-b bg-card sticky top-0 z-40">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-bold">{t('help_center_page.title')}</h1>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/dashboard">{t('help_center_page.dashboard')}</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/subscription">{t('help_center_page.subscription')}</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start" asChild>
              <Link href="/owner/help-center">{t('help_center_page.help_center')}</Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-destructive"
              color="red"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              {t('help_center_page.logout')}
            </Button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {t('help_center_page.title')}
            </h1>
            <p className="text-muted-foreground">{t('help_center_page.subtitle')}</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="bg-transparent h-11">
            <LogOut className="w-4 h-4 mr-2" />
            {t('help_center_page.logout')}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                {t('help_center_page.faq_title')}
              </h2>

              {/* Search */}
              <div className="relative mb-6">
                <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t('help_center_page.search_faq')}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>

              {/* FAQ Items */}
              <div className="space-y-2">
                {filteredFAQ.length > 0 ? (
                  filteredFAQ.map(item => (
                    <div key={item.id} className="border rounded-lg">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-semibold text-foreground text-left">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                            expandedFAQ === item.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {expandedFAQ === item.id && (
                        <div className="border-t px-4 py-3 bg-muted/30">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      {t('help_center_page.no_results')} "{searchQuery}"
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Support Card */}
          <div className="space-y-4 sm:space-y-6">
            <Card className="p-4 sm:p-6 bg-primary/5 border-primary/20">
              <h3 className="font-bold text-foreground mb-4 text-lg">
                {t('help_center_page.quick_support')}
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:support@lokalgastro.com"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t('help_center_page.email_support')}
                    </p>
                    <p className="text-xs text-muted-foreground">support@lokalgastro.com</p>
                  </div>
                </a>

                <a
                  href="tel:+48123456789"
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t('help_center_page.phone_support')}
                    </p>
                    <p className="text-xs text-muted-foreground">+48 123 456 789</p>
                  </div>
                </a>
              </div>
            </Card>

            <Card className="p-4 sm:p-6">
              <h3 className="font-bold text-foreground mb-4">{t('help_center_page.resources')}</h3>
              <ul className="space-y-2">
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-primary h-auto p-0"
                    asChild
                  >
                    <Link href="#">{t('help_center_page.getting_started')}</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-primary h-auto p-0"
                    asChild
                  >
                    <Link href="#">{t('help_center_page.video_tutorials')}</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-primary h-auto p-0"
                    asChild
                  >
                    <Link href="#">{t('help_center_page.api_documentation')}</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-primary h-auto p-0"
                    asChild
                  >
                    <Link href="#">{t('help_center_page.community_forum')}</Link>
                  </Button>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            {t('help_center_page.still_need_help')}
          </h2>

          {formSubmitted && (
            <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg text-sm">
              {t('help_center_page.form_success')}
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  {t('help_center_page.full_name')}
                </label>
                <Input
                  type="text"
                  name="name"
                  placeholder={t('help_center_page.your_name')}
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="h-11"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  {t('help_center_page.email')}
                </label>
                <Input
                  type="email"
                  name="email"
                  placeholder={t('help_center_page.your_email')}
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="h-11"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t('help_center_page.subject')}
              </label>
              <Input
                type="text"
                name="subject"
                placeholder={t('help_center_page.what_about')}
                value={formData.subject}
                onChange={handleFormChange}
                required
                className="h-11"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                {t('help_center_page.message')}
              </label>
              <textarea
                name="message"
                placeholder={t('help_center_page.describe_issue')}
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-input rounded-md text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button type="submit" className="w-full sm:w-auto h-11">
              <Send className="w-4 h-4 mr-2" />
              {t('help_center_page.send_message')}
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
