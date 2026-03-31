import { Flex, Heading } from '@radix-ui/themes';

type HeaderTextContainerProps = {
  title?: string;
  children: React.ReactNode;
};
const HeaderTextContainer = ({ title, children }: HeaderTextContainerProps) => {
  return (
    <Flex direction="column" className="h-full w-full flex-1 sm:flex-row flex-col " align="center">
      <Heading className="p-4" size="7">
        {title}
      </Heading>

      <Flex
        direction="row"
        className=" h-full w-full flex-1 sm:flex-row flex-col"
        align="stretch"
        justify="center"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default HeaderTextContainer;
