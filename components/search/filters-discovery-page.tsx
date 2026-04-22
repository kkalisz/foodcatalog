'use client';
import { useState } from 'react';

import { Button, Flex, TextField } from '@radix-ui/themes';
import { LocateIcon, SearchIcon } from 'lucide-react';

type FiltersProps = {
  onSearchChange?: (sendSearchCategory: string) => void;
  curentySearch: string;
};

const FiltersDiscoveryPage = ({ onSearchChange, curentySearch }: FiltersProps) => {
  const [searchCategory, setSearchCategory] = useState(curentySearch);
  return (
    <Flex gap="2" direction="column" className="w-full">
      {/* Main search — full width on all screens */}
      <TextField.Root
        size="3"
        placeholder="Search restaurant, dish, cuisine..."
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
        <TextField.Root size="3" placeholder="Find my place" className="flex-1 min-w-0">
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
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default FiltersDiscoveryPage;
