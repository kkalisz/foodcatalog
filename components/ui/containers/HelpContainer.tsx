import { Card } from "@radix-ui/themes";

const HelpContainer = ({ tittle, description }: { tittle: string; description: string }) => {
    return (
        <Card>
            <h1>{tittle}</h1>
            <p>{description}</p>
        </Card>
    );
};

export default HelpContainer;
