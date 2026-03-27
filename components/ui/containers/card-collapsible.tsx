'use client';
import React from 'react';

import { Button, Card, Flex, Heading } from '@radix-ui/themes';
import { Collapsible } from 'radix-ui';

type Props = {
  children: React.ReactNode;
  title: React.ReactNode;
};

const CollapsibleContainer = ({ children, title }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Card>
      <Collapsible.Root className="w-[100%] mx-auto" open={open} onOpenChange={setOpen}>
        <Flex justify={'between'} align={'center'} className="p-2">
          <Heading size="4">{title}</Heading>
          <Collapsible.Trigger asChild>
            <Button>{open ? 'Close' : 'Open'}</Button>
          </Collapsible.Trigger>
        </Flex>
        <Collapsible.Content className="p-2">{children}</Collapsible.Content>
      </Collapsible.Root>
    </Card>
  );
};

export default CollapsibleContainer;
