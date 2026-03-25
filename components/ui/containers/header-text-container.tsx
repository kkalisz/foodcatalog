import { Flex, Heading } from '@radix-ui/themes';

type HeaderTextContainerProps = {
  tittle: string;
  children: React.ReactNode;
};
const HeaderTextContainer = ({ tittle, children }: HeaderTextContainerProps) => {
  return (
    <Flex
      direction="column"
      className="h-full w-full flex-1 sm:flex-row flex-col bg-white"
      align="center"
    >
      <Heading className="p-2" size="7">
        {tittle}
      </Heading>

      <Flex direction="row" className="h-full w-full flex-1 sm:flex-row flex-col" align="stretch">
        {children}
      </Flex>
    </Flex>
  );
};

export default HeaderTextContainer;
