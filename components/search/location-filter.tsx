import { useState } from 'react';

import { Button, Flex, Heading, Slider, TextField } from '@radix-ui/themes';

import { Card } from '@/components/ui/card';

const LocationFilter = () => {
  const [value, setValue] = useState([10]);
  return (
    <Flex gap="5" direction="column" align="center" justify="center">
      <Card className="p-6">
        <Flex gap="5" direction="row" align="center" justify="center">
          <Heading size="4">City: </Heading>
          <TextField.Root placeholder="City name"></TextField.Root>
          <Button>Find</Button>
        </Flex>
        <Flex gap="2" pt="5" direction="row" align="center" justify="center">
          <Heading size="4">Radius: </Heading>
          <Slider defaultValue={value} max={10} onValueChange={setValue} />
          <p>{value}km</p>
        </Flex>
      </Card>
    </Flex>
  );
};

export default LocationFilter;
