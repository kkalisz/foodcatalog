import { Container, Grid } from '@radix-ui/themes';

import CollapsibleContainer from '@/components/ui/containers/card-collapsible';
import CardWithHeader from '@/components/ui/containers/card-with-header';

const FaqPage = () => {
  return (
    <CardWithHeader title={'FAQ'}>
      <Container className="flex flex-column justify-start">
        <Grid columns={'1'} gap={'4'}>
          <CollapsibleContainer title={'What is the return policy?'}>
            <p>aa</p>
          </CollapsibleContainer>
          <CollapsibleContainer title={'What is this?'}>
            <p>bb</p>
          </CollapsibleContainer>
        </Grid>
      </Container>
    </CardWithHeader>
  );
};

export default FaqPage;
