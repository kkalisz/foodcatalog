type WrapperProps = {
    children: React.ReactNode
    className?: string
}

export const PageSizeWrapper = ({ children
}: WrapperProps) => {
    return (
        <div className={`mx-auto w-full max-w-7xl px-4 bg-white m-4 border rounded-lg sm:px-6 lg:px-8 sm:py-8`}>
            {children}
        </div>
    )
}
