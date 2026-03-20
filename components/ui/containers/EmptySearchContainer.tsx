import { Card } from '@/components/ui/card';

type EmptySearchContainerProps = {
  title: string;
  description: string;
};

const EmptySearchContainer = ({ title, description }: EmptySearchContainerProps) => {
  return (
    <Card className="p-8 sm:p-12 text-center">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default EmptySearchContainer;
