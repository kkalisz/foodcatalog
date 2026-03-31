import { Card, Section } from '@radix-ui/themes';

const TestContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section>
      <Card>{children}</Card>
    </Section>
  );
};

export default TestContainer;
