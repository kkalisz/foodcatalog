
type InputLabelProps = {
    htmlFor: string
    children: React.ReactNode
    required?: boolean
}
const InputLabel = ({ htmlFor, children, required }: InputLabelProps) => {
    return (<div >
        <label htmlFor={htmlFor}>
            {children}
            {required ? <span aria-hidden="true">*</span> : null}
        </label>
    </div>)
}

export default InputLabel