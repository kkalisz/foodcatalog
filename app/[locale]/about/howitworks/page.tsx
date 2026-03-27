import { Flex } from '@radix-ui/themes';

import CardWithHeader from '@/components/ui/containers/card-with-header';
import HeightWrapper from '@/components/ui/wrappers/HeightWrapper';

const HowItWorksPage = () => {
  return (
    <HeightWrapper>
      <CardWithHeader title="How it works">
        <Flex>Zasady dzialania</Flex>
      </CardWithHeader>
    </HeightWrapper>
  );
};

export default HowItWorksPage;
