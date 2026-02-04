"use client"

import MenuForm from "@/components/MenuForm/MenuForm";
import { PageSizeWrapper } from "@/components/ui/wrapper";
import { useParams } from "next/navigation";

const Menu = () => {
    const params = useParams<{ id: string }>();
    const restaurantId = params?.id;
    return <PageSizeWrapper>
        <MenuForm restaurantId={restaurantId} />
    </PageSizeWrapper>;
};

export default Menu;