import { Container, Grid } from '@radix-ui/themes';

import HeaderTextContainer from '@/components/ui/containers/header-text-container';
import ScrollAreaFaq from '@/components/ui/containers/scroll-area-faq';

const FaqPage = () => {
  return (
    <HeaderTextContainer title={'Frequently Asked Questions'}>
      <Container className="flex flex-column justify-center bg-white">
        <Grid columns={'1'} gap={'4'}>
          <ScrollAreaFaq
            question={'What is the return policy?'}
            answer={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            }
          />
          <ScrollAreaFaq
            question={'What is the ?'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
          />
          <ScrollAreaFaq
            question={'Is return policy?'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
          />
          <ScrollAreaFaq
            question={'What is the return policy?'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
          />
          <ScrollAreaFaq
            question={'What is the return policy?'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
          />
          <ScrollAreaFaq
            question={'What is the return policy?'}
            answer={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
          />
        </Grid>
      </Container>
    </HeaderTextContainer>
  );
};

export default FaqPage;
