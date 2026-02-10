type ErrorLabelProps = {
  id: string
  error?: string | null
  role?: string
}
const ErrorLabel = ({ id, error, role }: ErrorLabelProps) => {
  if (!error) return null
  return (
    <div>
      <p>{error}</p>
    </div>
  )
}

export default ErrorLabel
