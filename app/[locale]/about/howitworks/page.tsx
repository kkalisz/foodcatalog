import { Flex } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import CardWithHeader from '@/components/ui/containers/card-with-header';
import HeightWrapper from '@/components/ui/wrappers/HeightWrapper';

const HowItWorksPage = () => {
  const t = useTranslations('footer.about_us');

  return (
    <HeightWrapper>
      <CardWithHeader title={t('how_it_works')}>
        <Flex
          p="6"
          justify="center"
          align="center"
          className="min-h-[200px] bg-white rounded-md shadow-sm border border-gray-100"
        >
          <p className="text-gray-600 font-medium">{t('how_it_works')}</p>
        </Flex>
      </CardWithHeader>
    </HeightWrapper>
  );
};

export default HowItWorksPage;
