import { Box } from '@radix-ui/themes';

const HeightWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Box display={'contents'}>{children}</Box>;
};

export default HeightWrapper;
