import { Flex, Heading } from '@radix-ui/themes';

import { Card } from '@/components/ui/card';

type FooterElementProps = {
  heading: string;
  children: React.ReactNode;
};
const FooterElement = ({ heading, children }: FooterElementProps) => {
  return (
    <Flex direction="column" gap="2" className="flex-1">
      <Card className="h-full p-4">
        <Heading size="5" className="mb-2">
          {heading}
        </Heading>
        {children}
      </Card>
    </Flex>
  );
};

export default FooterElement;
