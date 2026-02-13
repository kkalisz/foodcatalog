import { Flex, Spinner } from '@radix-ui/themes';

import { PageSizeWrapper } from '../wrapper';

type PageLoaderProps = {
  loadingText: string;
};
const PageLoader = ({ loadingText }: PageLoaderProps) => {
  return (
    <PageSizeWrapper>
      <Flex direction="column" align="center" justify="center" className="min-h-screen">
        <Spinner size="3"></Spinner>
        <p>{loadingText}</p>
      </Flex>
    </PageSizeWrapper>
  );
};

export default PageLoader;
