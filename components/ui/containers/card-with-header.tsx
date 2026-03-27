import React from 'react';

import { Card } from '@radix-ui/themes';

type Props = {
  children: React.ReactNode;
  title: React.ReactNode;
  rightSide?: React.ReactNode;
};

const CardWithHeader = ({ children, title, rightSide }: Props) => {
  return (
    <Card
      size="5"
      className="m-2 flex-1 w-full h-full"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {title && (
        <div className="flex justify-between items-center mb-4 pb-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          {rightSide}
        </div>
      )}
      <div className="flex-1 flex flex-col w-full h-full min-h-0">{children}</div>
    </Card>
  );
};

export default CardWithHeader;
