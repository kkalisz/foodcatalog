"use client"
import { useAuth } from "@/providers/AuthContext"

import { RestaurantForm } from "@/components/restaurants/RestaurantForm";
import { Wrapper } from "@/components/ui/wrapper";

export const NewResteurant = () => {

    const { user, logout } = useAuth();

    return <Wrapper>
        <RestaurantForm />
    </Wrapper>

}
export default NewResteurant