'use client';
import { useState } from 'react';

import { Button, Flex, TextField } from '@radix-ui/themes';
import { LocateIcon, SearchIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

type FiltersProps = {
  onSearchChange?: (sendSearchCategory: string) => void;
  curentySearch: string;
};

const FiltersDiscoveryPage = ({ onSearchChange, curentySearch }: FiltersProps) => {
  const [searchCategory, setSearchCategory] = useState(curentySearch);
  const t = useTranslations();
  return (
    <Flex gap="2" direction="column" className="w-full">
      {/* Main search — full width on all screens */}
      <TextField.Root
        size="3"
        placeholder={t('discover_page.search_placeholder')}
        className="w-full"
        defaultValue={curentySearch}
        onChange={e => {
          setSearchCategory(e.target.value);
        }}
      >
        <TextField.Slot>
          <SearchIcon />
        </TextField.Slot>
      </TextField.Root>

      {/* Location + Button — row on all screens */}
      <Flex gap="2" className="w-full">
        <TextField.Root
          size="3"
          placeholder={t('discover_page.find_my_place')}
          className="flex-1 min-w-0"
        >
          <TextField.Slot>
            <LocateIcon />
          </TextField.Slot>
        </TextField.Root>
        <Button
          onClick={() => {
            onSearchChange?.(searchCategory);
          }}
          size="3"
          className="shrink-0"
        >
          {t('nav.search_cta')}
        </Button>
      </Flex>
    </Flex>
  );
};

export default FiltersDiscoveryPage;
