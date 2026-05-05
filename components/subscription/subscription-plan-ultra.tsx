import { Check } from 'lucide-react';
import { Flex, Text } from '@radix-ui/themes';

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <Check className="text-green-500 shrink-0" size={16} />
    <Text size="2">{text}</Text>
  </div>
);

const SubscriptionPlanUltra = () => {
  return (
    <Flex direction="column" gap="3">
      <Text size="1" weight="medium" className="text-gray-400 uppercase tracking-wide">
        Wszystko co w PREMIUM, oraz:
      </Text>
      <FeatureItem text="Osobisty opiekun marketingowy VIP" />
      <FeatureItem text="Integracja z social mediami" />
      <FeatureItem text="Promowanie na stronie głównej Szamanie.pl" />
    </Flex>
  );
};

export default SubscriptionPlanUltra;
