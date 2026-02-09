import { Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { PlusCircle, LayoutDashboard, User, CreditCard, TrendingUp, PhoneCall } from "lucide-react";

const FooterForRestauratorsInfo = () => {
    return (
        <Flex direction="column" gap="2"  >
            <Card style={{ height: "20vh", width: "10vw", paddingLeft: "30px" }} >
                <Heading size="5">
                    Dla restauratorów
                </Heading>
                <Box>
                    <Flex gap="2" align="center">
                        <PlusCircle size={16} className="text-primary" />
                        <Link href="#" color="gray" highContrast>Dodaj restaurację</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <LayoutDashboard size={16} className="text-primary" />
                        <Link href="#" color="gray" highContrast>Panel restauratora</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <User size={16} className="text-primary" />
                        <Link href="#" color="gray" highContrast>Zaloguj się</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <CreditCard size={16} className="text-primary" />
                        <Link href="#" color="gray" highContrast>Cennik/Pakiety</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <TrendingUp size={16} className="text-primary" />
                        <Link href="#" color="gray" highContrast>Korzyści współpracy</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <PhoneCall size={16} className="text-primary" />
                        <Link href="#" color="gray" highContrast>Kontakt biznesowy</Link>
                    </Flex>
                </Box>
            </Card>
        </Flex>
    );
};

export default FooterForRestauratorsInfo;