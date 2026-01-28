"use client"
import MenuForm from "@/components/menu/MenuCategoryForm";
import { PageSizeWrapper } from "@/components/ui/wrapper";

const Menu = () => {
    console.log("MENU PAGE RENDER")
    return <PageSizeWrapper>
        <MenuForm></MenuForm>
    </PageSizeWrapper>;
};

export default Menu;