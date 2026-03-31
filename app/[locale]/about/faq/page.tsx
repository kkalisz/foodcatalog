import { Container, Grid, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import CollapsibleContainer from '@/components/ui/containers/card-collapsible';
import CardWithHeader from '@/components/ui/containers/card-with-header';

const FaqPage = () => {
  const tFaq = useTranslations('help_center_page.faq');
  const tTitle = useTranslations('footer.about_us');
  const itemsCount = 8;

  return (
    <CardWithHeader title={tTitle('faq')}>
      <Container className="flex flex-column justify-start">
        <Grid columns={'1'} gap={'4'}>
          {Array.from({ length: itemsCount }, (_, i) => i + 1).map(idx => (
            <CollapsibleContainer key={idx} title={tFaq(`q${idx}`)}>
              <Text as="p" size="3" className="text-gray-600 leading-relaxed font-medium">
                {tFaq(`a${idx}`)}
              </Text>
            </CollapsibleContainer>
          ))}
        </Grid>
      </Container>
    </CardWithHeader>
  );
};

export default FaqPage;
