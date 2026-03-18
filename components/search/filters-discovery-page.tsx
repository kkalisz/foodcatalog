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
    <Flex gap="1" direction="row" className="w-full">
      <Flex flexGrow="1" flexBasis="50%">
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
            <SearchIcon></SearchIcon>
          </TextField.Slot>
        </TextField.Root>
      </Flex>
      <Flex gap="2" flexGrow="1" flexBasis="50%">
        <TextField.Root size="3" placeholder="Find my place" className="w-full">
          <TextField.Slot>
            <LocateIcon></LocateIcon>
          </TextField.Slot>
        </TextField.Root>
        <Button
          onClick={() => {
            onSearchChange?.(searchCategory);
          }}
          size="3"
        >
          Search
        </Button>
      </Flex>
    </Flex>
  );
};

export default FiltersDiscoveryPage;
