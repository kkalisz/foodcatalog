type ErrorLabelProps = {
    id: string,
    error?: string | null
    role?: string
    className?: string
}
const ErrorLabel = ({ className, error }: ErrorLabelProps) => {
    if (!error) return null
    return <div className="p-1"><p className="text-red-500 text-xs">{error}</p></div>
}

export default ErrorLabel
