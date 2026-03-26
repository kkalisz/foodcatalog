'use client';
import React from 'react';

import { Button, Flex } from '@radix-ui/themes';
import { Collapsible } from 'radix-ui';

type Props = {
  question: string;
  answer: string;
};
const ScrollAreaFaq = ({ question, answer }: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible.Root className="w-[80%] mx-auto" open={open} onOpenChange={setOpen}>
      <Flex
        align={'center'}
        justify={'between'}
        className="my-2.5 bg-white rounded p-2.5 shadow-[0_1px_2px] shadow-blackA4"
      >
        <span className="">{question}</span>
        <Collapsible.Trigger asChild>
          <Button className="inline-flex size-[25px] items-center justify-center rounded-full text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=closed]:bg-white data-[state=open]:bg-violet3">
            {open ? 'Close' : 'Open'}
          </Button>
        </Collapsible.Trigger>
      </Flex>

      <Collapsible.Content>
        <div>
          <p>{answer}</p>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
export default ScrollAreaFaq;
