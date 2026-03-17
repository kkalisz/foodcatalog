import { Card, Flex, Heading } from '@radix-ui/themes';

type FooterElementProps = {
  heading: string;
  children: React.ReactNode;
};
const FooterElement = ({ heading, children }: FooterElementProps) => {
  return (
    <Flex direction="column" gap="2" className="flex-1">
      <Card className="h-full">
        <Heading size="5">{heading}</Heading>
        {children}
      </Card>
    </Flex>
  );
};

export default FooterElement;
