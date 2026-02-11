import { Button, Card, Flex, Heading } from "@radix-ui/themes"

type SubscriptionCardProps = {
    header:string,
    price:number,
    children:React.ReactNode,}
const SubscriptionCard = ({header,price,children}:SubscriptionCardProps) => {
    return (
        <Flex direction="column" gap="3" width="100%">
            <Card >
                <Heading className=" p-4" align="center">{header}</Heading>
                <Heading size="5">Cena: {price} zł/miesiąc</Heading>
                {children}  
            </Card>                
            <Button size="4">Wybierz</Button>     
        </Flex>
    )
}

export default SubscriptionCard