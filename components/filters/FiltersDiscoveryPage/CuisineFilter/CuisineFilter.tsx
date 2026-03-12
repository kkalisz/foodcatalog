import { Box, Button, Card, CheckboxCards, Flex, Heading, TextField } from '@radix-ui/themes';

import { CUISINES } from '@/data/constans/cusines';

const CuisineFilter = () => {
  return (
    <Card className="w-full">
      <Flex gap="5" direction="column">
        <Flex gap="2" align="center">
          <Heading size="4">Cuisine: </Heading>
          <TextField.Root placeholder="Find cuisine:"></TextField.Root> <Button>Find</Button>
        </Flex>

        <Flex gap="2" wrap="wrap" align="center" justify="center">
          {CUISINES.map(cuisine => (
            <CheckboxCards.Root key={cuisine}>
              <CheckboxCards.Item key={cuisine} value={cuisine}>
                <Flex>
                  <Box>{cuisine}</Box>
                </Flex>
              </CheckboxCards.Item>
            </CheckboxCards.Root>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
};

export default CuisineFilter;
