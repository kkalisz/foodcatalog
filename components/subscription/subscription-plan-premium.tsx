import { Check } from 'lucide-react';
import { Flex, Text } from '@radix-ui/themes';

const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <Check className="text-green-500 shrink-0" size={16} />
    <Text size="2">{text}</Text>
  </div>
);

const SubscriptionPlanPremium = () => {
  return (
    <Flex direction="column" gap="3">
      <Text size="1" weight="medium" className="text-gray-400 uppercase tracking-wide">
        Wszystko co w PRO, oraz:
      </Text>
      <FeatureItem text="Autorski system lojalnościowy" />
      <FeatureItem text="Priorytetowa widoczność w wyszukiwarce" />
      <FeatureItem text="Nielimitowana galeria zdjęć" />
    </Flex>
  );
};

export default SubscriptionPlanPremium;
