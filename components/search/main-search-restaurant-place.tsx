'use client';
import { useState } from 'react';

import { Button, Flex, TextField } from '@radix-ui/themes';
import { SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSearchCityParams = (value: string, router: any) => {
  const params = new URLSearchParams();
  params.set('serched', value);
  router.push(`/discover/?${params.toString()}`);
};

const MainSearchRestaurantPlace = () => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const t = useTranslations('main_page');
  const tNav = useTranslations('nav');
  return (
    <Flex align="center" justify="center" className="w-full">
      <style>{`
        .main-search-root {
          height: 70px
        }
        .main-search-root .rt-TextFieldInput {
          height: 100%
        }
      `}</style>
      <TextField.Root
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSearchCityParams(value, router);
          }
        }}
        variant="surface"
        size="3"
        placeholder={t('search_placeholder')}
        className="w-full main-search-root px-4 rounded-xl"
      >
        <TextField.Slot className="pr-2">
          <SearchIcon size={28} />
        </TextField.Slot>
        <TextField.Slot className="pr-2">
          <Button
            type="button"
            variant="solid"
            onClick={() => handleSearchCityParams(value, router)}
            size="4"
          >
            {tNav('search_cta')}
          </Button>
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};
export default MainSearchRestaurantPlace;
