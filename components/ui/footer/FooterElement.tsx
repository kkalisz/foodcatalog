import { Flex, Heading } from '@radix-ui/themes';

type FooterElementProps = {
  heading: string;
  children: React.ReactNode;
};
const FooterElement = ({ heading, children }: FooterElementProps) => {
  return (
    <Flex direction="column" gap="2" className="min-w-[160px] flex-1 basis-40">
      <Flex direction="column" gap="2">
        <Heading size="5">{heading}</Heading>
        {children}
      </Flex>
    </Flex>
  );
};

export default FooterElement;
