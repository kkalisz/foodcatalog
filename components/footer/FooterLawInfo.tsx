import { Box, Card, Flex, Heading, Link } from "@radix-ui/themes";
import { Scale, Lock, Cookie, ShieldCheck, Mail, DotIcon } from "lucide-react";

const FooterLawInfo = () => {
    return (
        <Flex direction="column" gap="2"  >
            <Card style={{ height: "20vh", width: "10vw", paddingLeft: "30px" }} >
                <Heading size="5" >Informacje prawne</Heading>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray" >Regulamin</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray" >Polityka Prywatności</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray" >Polityka Cookies</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray" >RODO</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray" >Kontakt</Link>
                    </Flex>
                </Box>
            </Card>

        </Flex>
    );
};

export default FooterLawInfo;