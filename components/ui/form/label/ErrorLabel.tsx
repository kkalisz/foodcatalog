type ErrorLabelProps = {
  id: string;
  error?: string | null;
  role?: string;
};
const ErrorLabel = ({ error }: ErrorLabelProps) => {
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
