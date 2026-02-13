type LoginFormWrapperProps = {
  children: React.ReactNode;
};
type RegisterFormWrapperProps = {
  children: React.ReactNode;
};
const LoginFormWrapper = ({ children }: LoginFormWrapperProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
};
export default LoginFormWrapper;

export const RegisterWrapper = ({ children }: RegisterFormWrapperProps) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">{children}</div>
    </main>
  );
};
