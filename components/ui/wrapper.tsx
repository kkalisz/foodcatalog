type WrapperProps = {
  children: React.ReactNode;
};
export const PageSizeWrapper = ({ children }: WrapperProps) => {
  return <div className={'flex-1 w-full max-w-7xl mx-auto'}>{children}</div>;
};
