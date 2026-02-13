import { Card, Flex, Heading } from '@radix-ui/themes';

type FooterElementProps = {
  heading: string;
  children: React.ReactNode;
};
const FooterElement = ({ heading, children }: FooterElementProps) => {
  return (
    <Flex direction="column" gap="2" style={{ flex: 1 }}>
      <Card style={{ height: '100%' }}>
        <Heading size="5">{heading}</Heading>
        {children}
      </Card>
    </Flex>
  );
};

export default FooterElement;
