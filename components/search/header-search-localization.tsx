'use client';
import { useEffect, useState } from 'react';

import { Box, Flex, TextField, Popover, Button } from '@radix-ui/themes';
import { LocateIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Toast } from 'radix-ui';
import { useTranslations } from 'next-intl';

import useLocalization from '@/data/hooks/useLocalization';

type HeaderSearchProps = {
  icon: React.ReactNode;
  placeholder: string;
};

const handleSearchCityParams = (value: string, router: any) => {
  const params = new URLSearchParams();
  params.set('city', value);
  router.push(`/discover/?${params.toString()}`);
};
const HeaderSearchLocalization = ({ icon, placeholder }: HeaderSearchProps) => {
  const t = useTranslations();
  const [value, setValue] = useState('');
  const [city, setCity] = useState('');
  const [isDeniedLocationShown, setDeniedLocationShown] = useState(false);
  const [isUseCurrentLocationShown, setUseCurrentLocationShown] = useState(false);
  const [isInfoLocalizationDenided, setInfoLocalizationDenided] = useState(false);
  const router = useRouter();
  const { city: myCity, getCurentLocalization, geolocationAllowed } = useLocalization();
  const [info, setInfo] = useState('');
  useEffect(() => {
    if (!geolocationAllowed) {
      setInfo('Zezwolenie na lokalizację jest wyłączone');
      setDeniedLocationShown(true);
    }
  }, [geolocationAllowed]);
  return (
    <div>
      <Popover.Root open={isUseCurrentLocationShown} onOpenChange={setUseCurrentLocationShown}>
        <Popover.Trigger>
          <Flex direction="column" py="2" px="2" className="cursor-pointer">
            <Box>
              <TextField.Root
                variant="soft"
                radius="full"
                size="3"
                value={value}
                placeholder={value || placeholder}
                onChange={e => {
                  setValue(e.target.value);
                }}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleSearchCityParams(value, router);
                    setCity(value);
                    setValue('');
                    setUseCurrentLocationShown(false);
                  }
                }}
                className="cursor-pointer [&_input]:!cursor-pointer border border-orange-400"
              >
                <TextField.Slot>{icon}</TextField.Slot>
              </TextField.Root>
            </Box>
          </Flex>
        </Popover.Trigger>
        <Popover.Content onOpenAutoFocus={e => e.preventDefault()}>
          <Flex align="center">
            <LocateIcon className="w-5 h-5 pr-2 text-primary" />
            <Button
              variant="ghost"
              onClick={() => {
                setUseCurrentLocationShown(false);
                getCurentLocalization();
                setCity(value);
                setValue(myCity);
                setInfoLocalizationDenided(true);
              }}
            >
              {t('nav.use_current_location')}
            </Button>
          </Flex>
        </Popover.Content>
      </Popover.Root>
      {!geolocationAllowed ? (
        <Toast.Root
          className="w-[20vw] h-[10pvh] flex flex-row justify-center items-center rounded-lg border border-orange-400 gap-4 bg-white shadow-md p-[15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
          open={isInfoLocalizationDenided}
          onOpenChange={setInfoLocalizationDenided}
        >
          <Toast.Title className="mb-[5px] text-center text-[15px] font-medium text-slate12 [grid-area:_title]">
            {info}
          </Toast.Title>
          <Toast.Description asChild></Toast.Description>
          <Toast.Action className=" [grid-area:_action]" asChild altText="Goto schedule to undo">
            <div className="m-2">
              <Button size="4" variant="ghost" onClick={() => setInfoLocalizationDenided(false)}>
                x
              </Button>
            </div>
          </Toast.Action>
        </Toast.Root>
      ) : null}
    </div>
  );
};
export default HeaderSearchLocalization;
