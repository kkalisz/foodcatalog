import { Flex, Spinner } from '@radix-ui/themes';

import { PageWidthWrapper } from '@/components/common/page-width-wrapper';

type PageLoaderProps = {
  loadingText: string;
};
const PageLoader = ({ loadingText }: PageLoaderProps) => {
  return (
    <PageWidthWrapper>
      <Flex direction="column" align="center" justify="center" className="min-h-screen">
        <Spinner size="3"></Spinner>
        <p>{loadingText}</p>
      </Flex>
    </PageWidthWrapper>
  );
};

export default PageLoader;
