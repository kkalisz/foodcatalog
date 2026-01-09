"use client";
import { useForm } from "react-hook-form";

import { Category, Dish } from "@/data/types/dishMenu";
import { useState } from "react";
import { Button } from "../ui/button";
import MenuDishForm from "./MenuDishForm";
import { set } from "zod";
import { doc, serverTimestamp, setDoc, updateDoc } from "@firebase/firestore";
import { db } from "@/lib/firebase/client";
import { getAuth } from "firebase/auth";
type CategoryFormData = {
    categoryName: string;
};

export const MenuCategoryForm = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
    const { register, handleSubmit, reset } = useForm<CategoryFormData>();

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

    const removeDishFromCategory = (categoryID: string, dishId: string) => {
        setCategories(prev => prev.map(category => category.id === categoryID ? {
            ...category,
            dishes: category.dishes.filter(dish => dish.id !== dishId),
        } : category));
    }

    const saveMenuToFirestore = async () => {
        const auth = getAuth();

        console.log("AUTH:", auth.currentUser);

        if (!auth.currentUser) {
            throw new Error("AUTH IS NULL – USER NOT LOGGED IN");
        }

        const firmId = "firmId";
        const restaurantId = "kuzaAbCjUqAwlJntJpyc";

        const menuRef = doc(
            db,
            "firms",
            firmId,
            "restaurants",
            restaurantId,
            "menu",
            "main"
        );

        console.log("MENU PATH:", menuRef.path);

        await setDoc(
            menuRef,
            {
                categories,
                updatedAt: serverTimestamp(),
            },
            { merge: true }
        );

        console.log("MENU SAVED");
    };

    return (
        <div className="p-6 space-y-6 border rounded">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
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
                <h2 className="font-bold text-lg">Podgląd menu</h2>

                {categories.map(category => (
                    <div key={category.id} className="mt-3">
                        <h3 className="font-semibold">{category.name}</h3>

                        {category.dishes.length === 0 && (
                            <p className="text-sm text-gray-400">Brak dań</p>
                        )}

                        {category.dishes.map(dish => (
                            <div key={dish.id} className="ml-4 text-sm">
                                <div className="flex justify-between">
                                    <span>{dish.name}</span>
                                    <span>{dish.price} zł</span>
                                    <button
                                        onClick={() => removeDishFromCategory(category.id, dish.id)}
                                        className="text-red-600 text-xs hover:underline"
                                    >
                                        Usuń
                                    </button>
                                </div>
                                {dish.description && (
                                    <p className="text-xs text-gray-500">
                                        {dish.description}
                                    </p>
                                )}
                            </div>
                        ))}
                        <Button
                            onClick={saveMenuToFirestore}
                            className="mt-6 bg-green-600 text-white"
                        >
                            Zapisz menu
                        </Button>

                    </div>
                ))}
            </div>
        </div>
    );
};
export default MenuCategoryForm;