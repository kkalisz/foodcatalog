import { PropsWithChildren } from 'react';

export const PageWidthWrapper = ({ children }: PropsWithChildren) => {
  return <div className={'mt-2 w-full max-w-7xl mx-auto flex flex-col flex-1'}>{children}</div>;
};
