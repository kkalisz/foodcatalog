import { Button, Card, Flex, Heading } from '@radix-ui/themes';

type SubscriptionCardProps = {
  header: string;
  price: number;
  children: React.ReactNode;
};
const SubscriptionCard = ({ header, price, children }: SubscriptionCardProps) => {
  return (
    <Flex direction="column" gap="5" width="100" align="stretch">
      <Card style={{ flexGrow: 1 }}>{children}</Card>
    </Flex>
  );
};

export default SubscriptionCard;
