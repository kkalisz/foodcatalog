import { Card, Heading } from '@radix-ui/themes';

type EmptySearchContainerProps = {
  tittle: string;
  description: string;
};

const EmptySearchContainer = ({ tittle, description }: EmptySearchContainerProps) => {
  return (
    <Card className="p-8 sm:p-12 text-center">
      <Heading>{tittle}</Heading>
      <p>{description}</p>
    </Card>
  );
};

export default EmptySearchContainer;
