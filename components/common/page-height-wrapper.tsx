import { PropsWithChildren } from 'react';

export const PageHeightWrapper = ({ children }: PropsWithChildren) => {
  return <div className="flex-1 flex flex-col items-center justify-center w-full">{children}</div>;
};
