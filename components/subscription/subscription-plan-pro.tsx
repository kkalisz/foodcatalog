import { Check } from 'lucide-react';
import { Flex, Text } from '@radix-ui/themes';

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <Check className="text-green-500 shrink-0" size={16} />
    <Text size="2">{text}</Text>
  </div>
);

const SubscriptionPlanPro = () => {
  return (
    <Flex direction="column" gap="3">
      <FeatureItem text="Pełna prezentacja menu" />
      <FeatureItem text="Galeria zdjęć (do 10 zdjęć)" />
      <FeatureItem text="Podstawowe statystyki" />
    </Flex>
  );
};

export default SubscriptionPlanPro;
