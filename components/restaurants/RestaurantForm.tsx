"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "@/providers/AuthContext"

import {
    createPublicRestaurant,
    updatePublicRestaurant,
    getRestaurantById,
} from "@/lib/firebase/restaurants"

import { createPublickRestaurantSchema } from "@/lib/validators/createPublickRestaurantSchema"
import { CreatePublicRestaurantForm } from "@/data/types/createPublicRestaurantForm"
import { createRestaurant } from "@/lib/firebase/restaurants"
import { CUISINES } from "@/data/constans/cusines"
import { useRouter } from "next/navigation"

type Props = {
    restaurantId?: string
}

export const RestaurantForm = ({ restaurantId }: Props) => {
    const { user } = useAuth()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CreatePublicRestaurantForm>({
        resolver: zodResolver(createPublickRestaurantSchema),
        defaultValues: {
            name: "",
            phone: "",
            city: "",
            category: [],
            shortDescription: "",
            coverImage: "",
            delivery: false,
        },
    })

    useEffect(() => {
        if (!restaurantId || !user) return

        const loadRestaurant = async () => {
            const restaurant = await getRestaurantById(restaurantId)
            if (!restaurant) return
            if (restaurant.firmId !== user.uid) return

            reset({
                name: restaurant.name,
                city: restaurant.city,
                category: Array.isArray(restaurant.category) ? restaurant.category : [restaurant.category],
                shortDescription: restaurant.shortDescription,
                coverImage: restaurant.coverImage,
                delivery: restaurant.delivery,
            })
        }

        loadRestaurant()
    }, [restaurantId, user, reset])

    const onSubmit = async (data: CreatePublicRestaurantForm) => {
        if (!user) return

        try {
            if (restaurantId) {
                await updatePublicRestaurant(restaurantId, data)
                alert("Zapisano zmiany")
            } else {
                const newRestaurantId = await createRestaurant(data, user.uid)

                router.push(
                    `/owner/restaurants/${newRestaurantId}/menu`
                )
            }
        } catch (error: any) {
            console.error(error)
            alert(error.message)
        }
    }



    return (

        <form onSubmit={handleSubmit(onSubmit)} className="w-full p-20 space-y-4">
            {/* NAZWA */}
            <div>
                <input
                    {...register("name")}
                    placeholder="Nazwa restauracji"
                    className="w-full p-4 border rounded"
                    required
                />
                <p className="text-red-600">{errors.name?.message}</p>
            </div>

            {/* MIASTO */}
            <div>
                <input
                    {...register("city")}
                    placeholder="Miasto"
                    className="w-full p-4 border rounded"
                    required
                />
                <p className="text-red-600">{errors.city?.message}</p>
            </div>

            {/* KUCHNIE */}
            <div>
                <p className="font-medium mb-2">Rodzaj kuchni</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {CUISINES.map((cuisine) => (
                        <label
                            key={cuisine}
                            className="flex items-center gap-2 border p-2 rounded"
                        >
                            <input
                                type="checkbox"
                                value={cuisine}
                                {...register("category")}
                            />
                            <span>{cuisine}</span>
                        </label>
                    ))}
                </div>

                <p className="text-red-600">{errors.category?.message}</p>
            </div>


            {/* OPIS */}
            <div>
                <textarea
                    {...register("shortDescription")}
                    placeholder="Krótki opis restauracji"
                    className="w-full p-4 border rounded"
                    required
                />
                <p className="text-red-600">{errors.shortDescription?.message}</p>
            </div>
            {/* TELEFON */}
            <div>
                <input
                    {...register("phone")}
                    placeholder="Numer telefonu"
                    className="w-full p-4 border rounded"
                    required
                />
                <p className="text-red-600">{errors.shortDescription?.message}</p>
            </div>

            {/* ZDJĘCIE */}
            <div>
                <input
                    {...register("coverImage")}
                    placeholder="URL zdjęcia"
                    className="w-full p-4 border rounded"
                />
                <p className="text-red-600">{errors.coverImage?.message}</p>
            </div>

            {/* DOSTAWA */}
            <label className="flex items-center gap-2">
                <input type="checkbox" {...register("delivery")} />
                <span>Dostawa</span>
            </label>

            {/* SUBMIT */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 border rounded transition hover:bg-blue-600 hover:text-white"
            >
                {isSubmitting ? "Zapisywanie..." : restaurantId ? "Zapisz zmiany" : "Dodaj restaurację"}
            </button>
        </form>

    )
}
