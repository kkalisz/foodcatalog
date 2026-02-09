import { Box, Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { Info, HelpCircle, MessageCircleQuestion, Newspaper, DotIcon } from "lucide-react";

const FooterAboutUs = () => {
    return (
        <Flex direction="column" gap="2"  >
            <Card style={{ height: "20vh", width: "10vw", paddingLeft: "30px" }} >
                <Heading size="5">
                    O nas
                </Heading>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray">O nas</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray">Jak działa LocalGastro</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray">FAQ</Link>
                    </Flex>
                </Box>
                <Box>
                    <Flex gap="2" align="center">
                        <DotIcon size={30} className="text-primary" />
                        <Link href="#" color="gray">Blog</Link>
                    </Flex>
                </Box>
            </Card>

        </Flex>
    );
};

export default FooterAboutUs;