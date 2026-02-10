import { Button, Card, Flex, Heading } from "@radix-ui/themes"
import { Box } from "lucide-react"

type SubscriptionCardProps = {
    header:string,
    children:React.ReactNode,}
    


const SubscriptionCard = ({header,children}:SubscriptionCardProps) => {
    return (
        <Flex direction="column" gap="2" width="100%">
            <Card>
                <Heading align="center">{header}</Heading>{children}   
            </Card>
                         
            <Button size="4">Wybierz</Button>     
        </Flex>
    )
}

export default SubscriptionCard