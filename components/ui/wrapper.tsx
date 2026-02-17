type WrapperProps = {
  children: React.ReactNode;
};
export const PageSizeWrapper = ({ children }: WrapperProps) => {
  return <div className={`w-full max-w-7xl mx-auto flex-1 flex flex-col`}>{children}</div>;
};
