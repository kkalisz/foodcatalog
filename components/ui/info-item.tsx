import * as React from 'react';

import { cn } from '@/lib/utils';

import { Stack } from './stack';

export interface InfoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label: string;
  value: React.ReactNode;
}

export function InfoItem({ icon, label, value, className, ...props }: InfoItemProps) {
  return (
    <div className={cn('flex items-start gap-3', className)} {...props}>
      {icon && <div className="text-primary flex-shrink-0 mt-0.5">{icon}</div>}
      <Stack gap={0}>
        <div className="text-sm text-muted-foreground leading-tight">{label}</div>
        <div className="font-medium text-foreground">{value}</div>
      </Stack>
    </div>
  );
}
