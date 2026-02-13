'use client';

import { Card, Flex } from '@radix-ui/themes';

import { PageSizeWrapper } from '@/components/ui/wrapper';

export default function TestPage() {
  return (
    <PageSizeWrapper className="mt-2  max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 sm:py-8">
      <Flex gap="2" align="center" justify="center" direction="column">
        <Flex>Twój obecny plan to:</Flex>
        <Flex>BASIC</Flex>
        <Flex>Wybierz nowy plan</Flex>
        <Flex direction="row" gap="5">
          <Card className="border">
            <div style={{ height: '400px', width: '400px' }}>PRO</div>
          </Card>
          <Card className="border">
            <div style={{ height: '400px', width: '400px' }}>PREMIUM</div>
          </Card>
          <Card className="border">
            <div style={{ height: '400px', width: '400px' }}>ULTRA</div>
          </Card>
        </Flex>
      </Flex>
    </PageSizeWrapper>
  );
}
