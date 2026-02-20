'use client';
import useLocalization from '@/data/hooks/useLocalization';
import { Box, Flex, TextField, Popover, Button } from '@radix-ui/themes';
import { LocateIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const [city, setCity] = useState('');
  const [isDeniedLocationShown, setDeniedLocationShown] = useState(false);
  const [isUseCurrentLocationShown, setUseCurrentLocationShown] = useState(false);
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
      <Popover.Root open={isUseCurrentLocationShown}>
        <Popover.Trigger>
          <Flex direction="column" py="2" px="2" className="cursor-pointer">
            <Box>
              <TextField.Root
                variant="soft"
                radius="full"
                size="3"
                onClick={() => setUseCurrentLocationShown(true)}
                placeholder={myCity || placeholder}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleSearchCityParams(value, router);
                    setCity(value);
                  }
                }}
                className="cursor-pointer [&_input]:!cursor-pointer border border-orange-400"
              >
                <TextField.Slot>{icon}</TextField.Slot>
              </TextField.Root>
            </Box>
          </Flex>
        </Popover.Trigger>
        <Popover.Content>
          <Flex align="center">
            <LocateIcon className="w-5 h-5 pr-2 text-primary" />
            <Button
              variant="ghost"
              onClick={() => {
                setUseCurrentLocationShown(false);
                getCurentLocalization();
                setCity(myCity);
                setValue(myCity);
              }}
            >
              {t('nav.use_current_location')}
            </Button>
          </Flex>
        </Popover.Content>
      </Popover.Root>
      {isDeniedLocationShown ? (
        <Flex>
          <p>{info}</p>
        </Flex>
      ) : null}
    </div>
  );
};
export default HeaderSearchLocalization;
