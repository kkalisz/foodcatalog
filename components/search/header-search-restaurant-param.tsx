'use client';
import { useState } from 'react';

import { Box, Flex, TextField } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
type HeaderSearchProps = {
  icon: React.ReactNode;
  placeholder: string;
};
const HeaderSearchRestaurantParams = ({ icon, placeholder }: HeaderSearchProps) => {
  const [value, setValue] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const handleSearchParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', value);
    router.push(`discover?${params.toString()}`);
  };
  return (
    <Flex direction="column" py="2" px="2" className="cursor-pointer" width={'32%'}>
      <Box>
        <TextField.Root
          radius="full"
          placeholder={placeholder}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSearchParams();
              setValue('');
            }
          }}
          className="cursor-pointer [&_input]:!cursor-pointer"
        >
          <TextField.Slot>{icon}</TextField.Slot>
        </TextField.Root>
      </Box>
    </Flex>
  );
};
export default HeaderSearchRestaurantParams;
