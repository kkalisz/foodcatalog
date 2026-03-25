import { Button, Flex, Heading } from '@radix-ui/themes';
import HeaderTextContainer from '@/components/ui/containers/header-text-container';

const HowItWorksPage = () => {
  return (
    <HeaderTextContainer tittle="How it works">
      <Flex
        className="w-full flex-[2] min-h-full bg-white bg-center bg-contain bg-no-repeat"
        align="center"
        justify="center"
      >
        <Heading size="3">Jak działamy</Heading>
      </Flex>
      <Flex
        direction="column"
        className="bg-orange-200 flex-[1] p-4"
        align="center"
        justify="center"
      >
        <Heading>Szybkoi i jasno</Heading>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
        <Button color="orange">Zobacz więcej</Button>
      </Flex>
    </HeaderTextContainer>
  );
};

export default HowItWorksPage;
