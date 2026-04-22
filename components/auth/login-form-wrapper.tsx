type LoginFormWrapperProps = {
  children: React.ReactNode;
};
type RegisterFormWrapperProps = {
  children: React.ReactNode;
};
const LoginFormWrapper = ({ children }: LoginFormWrapperProps) => {
  return (
    <div className="from-primary/5 to-secondary/5 flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
};
export default LoginFormWrapper;

export const RegisterWrapper = ({ children }: RegisterFormWrapperProps) => {
  return (
    <main className="from-primary/5 to-secondary/5 flex items-center justify-center p-4 w-full">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
};
