"use client"
import { useAuth } from "@/providers/AuthContext"

import { RestaurantForm } from "@/components/restaurants/RestaurantForm";
import { PageSizeWrapper } from "@/components/ui/wrapper";


export const NewResteurant = () => {

    const { user, logout } = useAuth();

    return <PageSizeWrapper>
        <RestaurantForm />
    </PageSizeWrapper>

}
export default NewResteurant