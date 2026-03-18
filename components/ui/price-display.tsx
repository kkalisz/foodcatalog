import * as React from 'react';

import { cn } from '@/lib/utils';

export interface PriceDisplayProps extends React.HTMLAttributes<HTMLSpanElement> {
  price: number;
  currency?: string;
  size?: 'sm' | 'md' | 'lg';
  bold?: boolean;
}

const sizeMap = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg sm:text-xl',
};

export function PriceDisplay({
  price,
  currency = 'zł',
  size = 'md',
  bold = true,
  className,
  ...props
}: PriceDisplayProps) {
  return (
    <span
      className={cn(
        sizeMap[size],
        bold && 'font-medium',
        'text-foreground whitespace-nowrap',
        className
      )}
      {...props}
    >
      {price.toFixed(2)} {currency}
    </span>
  );
}
