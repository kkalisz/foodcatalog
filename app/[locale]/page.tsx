import { Flex, Heading, Text } from '@radix-ui/themes';
import { getTranslations } from 'next-intl/server';

import MainSearchRestaurantPlace from '@/components/search/main-search-restaurant-place';
import HeightWrapper from '@/components/ui/wrappers/HeightWrapper';

export default async function Home() {
  const t = await getTranslations('main_page');
  return (
    <HeightWrapper>
      <Flex className="h-full w-full flex-1 sm:flex-row flex-col">
        <Flex className="w-full bg-orange-500 flex-1 " align="center" justify="center">
          <Flex direction="column" gap="5" justify="center" className="w-full px-2">
            <Flex direction="column" align="center" justify="center" className="w-full h-full">
              <Heading className="text-white" size="7">
                {t('header')}
              </Heading>
              <Text className="text-white" align="center">
                {t('subheader')}
              </Text>
            </Flex>
            <MainSearchRestaurantPlace />
          </Flex>
        </Flex>
        <Flex
          className="w-full flex-[1] min-h-full bg-white bg-center bg-contain bg-no-repeat"
          style={{ backgroundImage: "url('/img/local_gastro.png')" }}
        ></Flex>
      </Flex>
      <Flex height="10vh" className="bg-gray-600"></Flex>
    </HeightWrapper>
  );
}
