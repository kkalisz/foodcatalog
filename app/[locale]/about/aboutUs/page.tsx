'use client';

import { Button, Flex, Heading } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import HeaderTextContainer from '@/components/ui/containers/header-text-container';

export const AboutUs = () => {
  const t = useTranslations();

  return (
    <HeaderTextContainer tittle={'About us'}>
      <Flex
        className="w-full flex-[2] min-h-full bg-white bg-center bg-contain bg-no-repeat"
        align="center"
        justify="center"
      >
        <Heading size="3">O nas i naszych planach</Heading>
      </Flex>
      <Flex
        direction="column"
        className="bg-orange-500 flex-[1] p-4"
        align="center"
        justify="center"
      >
        <Heading>Nasze złożenia</Heading>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </p>
        <Button color="orange">Zobacz więcej</Button>
      </Flex>
    </HeaderTextContainer>
  );
};

export default AboutUs;
