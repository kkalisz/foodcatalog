"use client"
import { useAuth } from "@/providers/AuthContext"

import { RestaurantForm } from "@/components/restaurants/RestaurantForm";

export const NewResteurant = () => {

    const { user, logout } = useAuth();

    return <div className="flex flex-col items-center justify-center h-full w-full pt-20">
        <RestaurantForm />
    </div>

}
export default NewResteurant