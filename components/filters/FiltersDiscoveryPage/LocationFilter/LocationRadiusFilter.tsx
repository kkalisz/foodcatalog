import { useState } from 'react';

import { Flex, Heading, Slider } from '@radix-ui/themes';

const LocationRadiusFilter = () => {
  const [value, setValue] = useState([10]);
  return (
    <Flex gap="2" direction="row" align="center" justify="center">
      <Heading size="4">Radius: </Heading>
      <Slider defaultValue={value} max={10} onValueChange={setValue} />
      <p>{value}km</p>
    </Flex>
  );
};

export default LocationRadiusFilter;
