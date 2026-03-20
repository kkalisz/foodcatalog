import { Flex, Heading, Text } from '@radix-ui/themes';

const DiscoverEmptyRestaurants = () => {
  return (
    <Flex className="h-full w-full mt-4 align-center justify-center flex flex-col items-center justify-center">
      <Heading>Brak restauracji</Heading>
      <Text>Spróbuj dostosować filtry</Text>
    </Flex>
  );
};

export default DiscoverEmptyRestaurants;
