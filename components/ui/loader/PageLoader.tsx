import { Flex, Spinner } from "@radix-ui/themes"


type PageLoaderProps = {
    loadingText: string
}
const PageLoader = ({ loadingText }: PageLoaderProps) => {
    return (
        <Flex direction="column" align="center" justify="center" className="min-h-screen">
            <Spinner size="3"></Spinner>
            <p>{loadingText}</p>
        </Flex>
    )
}

export default PageLoader