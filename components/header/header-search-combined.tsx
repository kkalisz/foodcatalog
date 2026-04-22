'use client';

import { useEffect, useState } from 'react';

import { Button, Popover } from '@radix-ui/themes';
import { ChevronDown, LocateIcon, MapPin, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Toast } from 'radix-ui';

import useLocalization from '@/data/hooks/useLocalization';

type Props = {
  className?: string;

  variant?: 'light' | 'dark';
};

export default function HeaderSearchCombined({ className = '', variant = 'light' }: Props) {
  const t = useTranslations();
  const tMisc = useTranslations('components_misc');
  const router = useRouter();

  const [value, setValue] = useState('');
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [info, setInfo] = useState('');

  const { city: myCity, getCurentLocalization, geolocationAllowed } = useLocalization();

  useEffect(() => {
    if (!geolocationAllowed) {
      setInfo(tMisc('location_disabled'));
    }
  }, [geolocationAllowed, tMisc]);

  const submit = () => {
    const q = value.trim();
    if (!q) {
      return;
    }
    const params = new URLSearchParams();
    params.set('city', q);
    router.push(`/discover/?${params.toString()}`);
  };

  const isDark = variant === 'dark';
  const wrapperClass = isDark
    ? 'bg-white/5 border border-white/10 text-white'
    : 'bg-card border-2 border-foreground/90 shadow-[3px_3px_0_rgba(0,0,0,0.08)]';
  const inputClass = isDark
    ? 'text-white placeholder:text-white/40'
    : 'text-foreground placeholder:text-muted-foreground';
  const dividerClass = isDark ? 'bg-white/10' : 'bg-border';
  const mutedText = isDark ? 'text-white/55' : 'text-muted-foreground';

  return (
    <>
      <div
        className={`flex items-stretch rounded-full overflow-hidden w-full ${wrapperClass} ${className}`}
      >
        {/* Location trigger */}
        <Popover.Root open={popoverOpen} onOpenChange={setPopoverOpen}>
          <Popover.Trigger>
            <button
              type="button"
              className={`flex items-center gap-2 px-4 text-sm font-medium hover:bg-black/5 ${isDark ? 'hover:bg-white/10' : ''}`}
            >
              <MapPin className="h-4 w-4 text-primary fill-primary" />
              <span>{myCity || 'Warszawa'}</span>
              <ChevronDown className={`h-3 w-3 ${mutedText}`} />
            </button>
          </Popover.Trigger>
          <Popover.Content onOpenAutoFocus={e => e.preventDefault()}>
            <div className="flex items-center gap-2">
              <LocateIcon className="w-5 h-5 text-primary" />
              <Button
                variant="ghost"
                onClick={() => {
                  setPopoverOpen(false);
                  getCurentLocalization();
                  if (myCity) {
                    setValue(myCity);
                  }
                  if (!geolocationAllowed) {
                    setToastOpen(true);
                  }
                }}
              >
                {t('nav.use_current_location')}
              </Button>
            </div>
          </Popover.Content>
        </Popover.Root>

        <span className={`w-px my-2 ${dividerClass}`} />

        {/* Search input */}
        <label className="flex-1 flex items-center gap-2 px-4 min-w-0">
          <Search className={`h-4 w-4 shrink-0 ${mutedText}`} />
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder={t('nav.search_location_placeholder')}
            className={`flex-1 bg-transparent outline-none border-none py-3 text-sm min-w-0 ${inputClass}`}
          />
        </label>

        {/* CTA */}
        <button
          type="button"
          onClick={submit}
          className="bg-primary text-primary-foreground px-6 font-semibold text-sm hover:bg-primary/90 whitespace-nowrap"
        >
          {t('nav.search_cta')}
        </button>
      </div>

      {/* Toast gdy geolokalizacja zablokowana */}
      {!geolocationAllowed ? (
        <Toast.Root
          className="w-[20vw] flex flex-row justify-center items-center rounded-lg border border-orange-400 gap-4 bg-white shadow-md p-[15px] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn"
          open={toastOpen}
          onOpenChange={setToastOpen}
        >
          <Toast.Title className="mb-[5px] text-center text-[15px] font-medium text-slate12">
            {info}
          </Toast.Title>
          <Toast.Action asChild altText="Zamknij">
            <Button size="2" variant="ghost" onClick={() => setToastOpen(false)}>
              ×
            </Button>
          </Toast.Action>
        </Toast.Root>
      ) : null}
    </>
  );
}
