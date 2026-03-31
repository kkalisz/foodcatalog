import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import CardWithHeader from '@/components/ui/containers/card-with-header';

const PrivacyPolicyPage = () => {
  const t = useTranslations('privacy_policy');
  const sectionsCount = 9;

  return (
    <CardWithHeader title={t('title')}>
      <Flex direction="column" className="max-w-4xl mx-auto py-8" gap="6">
        <Heading as="h2" size="5" mb="4" className="text-primary">
          {t('title')}
        </Heading>

        <Text as="p" size="3" mb="6" className="text-gray-600 leading-relaxed font-medium">
          {t('introduction')}
        </Text>

        <Flex direction="column" gap="6">
          {Array.from({ length: sectionsCount }, (_, i) => i + 1).map(num => (
            <Box
              key={num}
              className="border-l-4 border-primary pl-4 py-1 bg-gray-50/50 rounded-r-md"
            >
              <Heading as="h3" size="4" mb="3" className="text-gray-800">
                {t(`sections.${num}.title`)}
              </Heading>
              <Flex direction="column" gap="3">
                {t(`sections.${num}.content`)
                  .split('\n')
                  .map((line, idx) => (
                    <Text as="p" key={idx} size="2" className="text-gray-700 leading-relaxed">
                      {line}
                    </Text>
                  ))}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
    </CardWithHeader>
  );
};

export default PrivacyPolicyPage;
