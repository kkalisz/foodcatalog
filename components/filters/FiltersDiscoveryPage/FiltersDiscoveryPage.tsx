import { Button, Flex, TextField } from '@radix-ui/themes';
import { LocateIcon, SearchIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
const FiltersDiscoveryPage = () => {
  const params = useSearchParams();
  const cityParams = params.get('city');
  return (
    <Flex gap="1" direction="row" className="w-full">
      <Flex flexGrow="1" flexBasis="50%">
        <TextField.Root
          size="3"
          placeholder="Search restaurant, dish, cuisine..."
          className="w-full"
        >
          <TextField.Slot>
            <SearchIcon></SearchIcon>
          </TextField.Slot>
        </TextField.Root>
      </Flex>
      <Flex gap="2" flexGrow="1" flexBasis="50%">
        <TextField.Root
          size="3"
          placeholder={cityParams ? cityParams?.toLocaleUpperCase() : 'Find my place'}
          className="w-full"
        >
          <TextField.Slot>
            <LocateIcon></LocateIcon>
          </TextField.Slot>
        </TextField.Root>
        <Button size="3">Search</Button>
      </Flex>
    </Flex>
  );
};

export default FiltersDiscoveryPage;
