type ErrorLabelProps = {
  id: string;
  error?: string | null;
  role?: string;
};
const ErrorLabel = ({ id, error, role }: ErrorLabelProps) => {
  if (!error) {
    return null;
  }
  return (
    <div>
      <p className="text-red-500 p-2">*{error}</p>
    </div>
  );
};

export default ErrorLabel;
