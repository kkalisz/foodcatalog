import * as React from 'react';

import { Heading } from '@radix-ui/themes';

import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  titleSize?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  children: React.ReactNode;
}

export function Section({ title, titleSize = '5', children, className, ...props }: SectionProps) {
  return (
    <section className={cn('space-y-4', className)} {...props}>
      {title && (
        <Heading size={titleSize} className="tracking-tight">
          {title}
        </Heading>
      )}
      <div>{children}</div>
    </section>
  );
}
