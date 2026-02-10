type WrapperProps = {
  children: React.ReactNode
  className?: string
}

export const PageSizeWrapper = ({ children, className }: WrapperProps) => {
  return <div className={className}>{children}</div>
}
