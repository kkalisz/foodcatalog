import { Card, Heading } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

type EmptySearchContainerProps = {
  tittle: string;
  description: string;
};

const EmptySearchContainer = ({ tittle, description }: EmptySearchContainerProps) => {
  const t = useTranslations();
  return (
    <Card className="p-8 sm:p-12 text-center">
      <Heading>{tittle}</Heading>
      <p>{description}</p>
    </Card>
  );
};

export default EmptySearchContainer;
