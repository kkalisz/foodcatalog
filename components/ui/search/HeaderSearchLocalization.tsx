'use client';
import useLocalization from '@/data/hooks/useLocalization';
import { Box, Flex, TextField, Popover, Button } from '@radix-ui/themes';
import { LocateIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
type HeaderSearchProps = {
  icon: React.ReactNode;
  placeholder: string;
};
const HeaderSearchLocalization = ({ icon, placeholder }: HeaderSearchProps) => {
  const [value, setValue] = useState('');
  const [city, setCity] = useState('');
  const router = useRouter();
  const { city: myCity, position, myLocalizatio } = useLocalization();

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Flex direction="column" py="2" px="2" className="cursor-pointer">
          <Box>
            <TextField.Root
              variant="soft"
              radius="full"
              size="3"
              placeholder={myCity || placeholder}
              onChange={e => setValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  router.push(`/discover/`);
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
              myLocalizatio();
              setCity(myCity);
              setValue('');
            }}
          >
            Use current location
          </Button>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
};
export default HeaderSearchLocalization;
