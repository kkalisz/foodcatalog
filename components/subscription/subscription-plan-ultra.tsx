import { Flex, Text } from '@radix-ui/themes';
import { DotIcon } from 'lucide-react';

const SubscriptionPlanUltra = () => {
  return (
    <Flex className="p-2 " direction="column" gap="3">
      <Text size="3">
        "Plan Premium to kompletne narzędzie wzrostu dla restauracji, które nie uznają kompromisów.
        Przejmij pełną kontrolę nad doświadczeniem gościa dzięki priorytetowej widoczności i
        autorskim systemom lojalnościowym. To nie tylko obecność w sieci – to Twoja restauracja w
        wersji VIP, zintegrowana z najnowszymi narzędziami marketingu, które pracują na Twój zysk
        24/7."
      </Text>
      <Flex direction="column" gap="3" align="center">
        <Text size="4" weight="bold">
          Co zyskasz:
        </Text>
        <Flex>
          <DotIcon />{' '}
          <Text size="3" weight="bold">
            Pełna prezentacja menu i galerii zdjęć
          </Text>{' '}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SubscriptionPlanUltra;
