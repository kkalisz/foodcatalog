"use client";
import { useForm, Controller } from "react-hook-form";

import { Category, Dish } from "@/data/types/dishMenu";
import { useEffect, useState } from "react";
import { Button, } from "../ui/button";
import MenuDishForm from "./MenuDishForm";
import { doc, getDoc, serverTimestamp, setDoc, } from "@firebase/firestore";
import { db } from "@/lib/firebase/client";
import { getAuth } from "firebase/auth";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import * as Select from "@radix-ui/react-select"
type CategoryFormData = {
    categoryName: string;
};

export const MenuCategoryForm = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
    const { register, handleSubmit, reset, control } = useForm<CategoryFormData>();

    const router = useRouter();
    const params = useParams<{ id: string }>()
    const restaurantId = params.id
    const auth = getAuth();

    const onSubmit = (data: CategoryFormData) => {
        const newCategoryId = Date.now().toString();
        setCategories(prev => [...prev,
        {
            id: newCategoryId,
            name: data.categoryName,
            dishes: [],
        }]);
        setActiveCategoryId(newCategoryId)
        reset();
    }

    const addDishToActiveCategory = (dish: Dish) => {
        if (!activeCategoryId) return;
        setCategories(prev =>
            prev.map(category =>
                category.id === activeCategoryId ? {
                    ...category,
                    dishes: [...category.dishes,
                    { ...dish, id: Date.now().toString() }],
                } : category));
    }
    const updateDish = (categoryId: string, dishId: string, data: Partial<Dish>) => {
        setCategories(prev => prev.map(category => category.id === categoryId ? {
            ...category,
            dishes: category.dishes.map(dish => dish.id === dishId ? {
                ...dish,
                ...data,
            } : dish),
        } : category));
    }
    const removeDishFromCategory = (categoryID: string, dishId: string) => {
        setCategories(prev => prev.map(category => category.id === categoryID ? {
            ...category,
            dishes: category.dishes.filter(dish => dish.id !== dishId),
        } : category));
    }
    const saveMenuToFirestore = async () => {

        if (!restaurantId) {
            throw new Error("NO RESTAURANT ID IN URL");
        }
        if (!auth.currentUser) {
            throw new Error("AUTH IS NULL – USER NOT LOGGED IN");
        }
        const firmId = auth.currentUser.uid;
        const menuRef = doc(
            db,
            "firms",
            firmId,
            "restaurants",
            restaurantId,
            "menu",
            "main"
        );
        const publicMenuRef = doc(
            db,
            "public_restaurants",
            restaurantId,
            "menu",
            "main"
        );
        await setDoc(
            menuRef,
            {
                categories,
                updatedAt: serverTimestamp(),
            },
            { merge: true }
        );
        await setDoc(
            publicMenuRef,
            {
                categories,
                updatedAt: serverTimestamp(),
            },
            { merge: true }
        );
    };
    useEffect(() => {
        if (!restaurantId || !auth.currentUser) return

        const fetchMenu = async () => {
            const firmId = auth.currentUser!.uid

            const menuRef = doc(
                db,
                "firms",
                firmId,
                "restaurants",
                restaurantId,
                "menu",
                "main"
            )

            const snap = await getDoc(menuRef)

            if (snap.exists()) {
                setCategories(snap.data().categories || [])
            }
        }
        fetchMenu()
    }, [restaurantId])
    return (
        <div className="h-80vh overflow-y-auto p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 gap-2 mb-3">
                <input
                    {...register("categoryName")}
                    placeholder="Nazwa kategorii"
                    className="w-full p-2 border rounded"
                    required
                />
                <Button type="submit">Dodaj kategorię</Button>
            </form>
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => setActiveCategoryId(category.id)}
                    className={`p-2 border rounded text-left ${category.id === activeCategoryId
                        ? "bg-green-100 border-green-500"
                        : ""
                        }`}
                >
                    {category.name}
                </button>
            ))}
            {activeCategoryId && (
                <div className="border p-4 rounded">
                    <h2 className="font-bold mb-2">
                        Dodajesz danie do:{" "}
                        {categories.find(c => c.id === activeCategoryId)?.name}
                    </h2>
                    <MenuDishForm onAddDish={addDishToActiveCategory} />
                </div>
            )}
            <div className="mt-6">
                {categories.map(category => (
                    <div key={category.id} className="mt-3">
                        <h3 className="font-semibold">{category.name}</h3>

                        {category.dishes.length === 0 && (
                            <p className="text-sm text-gray-400">Brak dań</p>
                        )}
                        {category.dishes.map(dish => (
                            <div key={dish.id} className="ml-4 rounded-lg border p-4 text-sm">
                                <div className="flex gap-6">
                                    {/* LEWA STRONA – nazwa + opis */}
                                    <div className="flex-1 space-y-2">
                                        <input
                                            value={dish.name}
                                            onChange={(e) =>
                                                updateDish(category.id, dish.id, { name: e.target.value })
                                            }
                                            className="w-full rounded border px-2 py-1 font-medium"
                                            placeholder="Nazwa dania"
                                        />
                                        <input className="border rounded py-2 px-2 w-full text-gray-600 text-xs"
                                            type="text"
                                            placeholder="Składniki"
                                            value={dish.ingriediens}
                                            onChange={(e) => updateDish(category.id, dish.id, { ingriediens: e.target.value })} />

                                        <textarea
                                            value={dish.description}
                                            onChange={(e) =>
                                                updateDish(category.id, dish.id, { description: e.target.value })
                                            }
                                            className="w-full rounded border px-2 py-1 text-xs text-gray-600"
                                            placeholder="Opis (opcjonalnie)"
                                            rows={2}
                                        />
                                    </div>
                                    {/* PRAWA STRONA – cena + akcje */}
                                    <div className="flex flex-col items-end justify-between gap-5 ">
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500 mb-1">Cena</p>
                                            <input
                                                type="number"
                                                value={dish.price}
                                                onChange={(e) =>
                                                    updateDish(category.id, dish.id, {
                                                        price: Number(e.target.value),
                                                    })
                                                }
                                                className="w-24 rounded border px-2 py-1 text-right font-semibold"
                                            />
                                        </div>

                                        <button
                                            onClick={() =>
                                                removeDishFromCategory(category.id, dish.id)
                                            }
                                            className="text-xs text-red-600 hover:underline"
                                        >
                                            Usuń
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className=" flex gap-2 p-2"><Button
                onClick={saveMenuToFirestore}
                className="mt-6 bg-green-600 text-white"
            >
                Zapisz menu
            </Button>
                <Button
                    onClick={() => router.push(`/restaurant/${restaurantId}`)}
                    className="mt-6 bg-green-600 text-white"
                >
                    Powrót do restauracji
                </Button></div>
        </div>
    );
};
export default MenuCategoryForm;