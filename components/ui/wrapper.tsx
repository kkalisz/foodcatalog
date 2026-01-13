type WrapperProps = {
    children: React.ReactNode
    className?: string
}

export const Wrapper = ({ children
}: WrapperProps) => {
    return (
        <div className={`mx-auto w-full max-w-7xl px-4 bg-white m-2 rounded-lg sm:px-6 lg:px-8 sm:py-8`}>
            {children}
        </div>
    )
}
