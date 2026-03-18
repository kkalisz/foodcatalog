import { Card } from '@/components/ui/card';

const HelpContainer = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="p-6">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default HelpContainer;
