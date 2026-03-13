import { PropsWithChildren } from 'react';

export const PageWidthWrapper = ({ children }: PropsWithChildren) => {
  return <div className={'w-full max-w-7xl mx-auto'}>{children}</div>;
};
