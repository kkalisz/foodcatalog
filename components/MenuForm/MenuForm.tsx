"use client";

import { useFieldArray, useForm, useWatch } from "react-hook-form";
import type { Category, MenuForm as MenuFormType } from "@/data/types/dishMenu";
import { Button } from "@radix-ui/themes";
import { saveMenuToFirestore } from "@/lib/firebase/restantMenu";
import { useFirmId } from "@/lib/firebase/restaurants";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useEffect } from "react";
import { MessageSquareWarningIcon, PlusIcon, SaveIcon } from "lucide-react";
import CategoryForm from "../ui/form/categoryForm";
import { EmptyMenu } from "./EmptyMenu/EmptyMenu";

const MenuForm = ({ restaurantId }: { restaurantId: string }) => {
    const { firmId, loading } = useFirmId();
    const form = useForm<MenuFormType>({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        defaultValues: {
            categories: [],
        },
    });

    const { control, handleSubmit, formState: { isDirty }, reset } = form;
    const { fields, append, remove } = useFieldArray({
        name: "categories",
        control,
    });

    const onAddNewCategory = () => {
        const category: Category = {
            id: crypto.randomUUID(),
            name: "",
            dishes: [],
        };
        append(category);
    };

    const onHandleSubmit = async (data: MenuFormType) => {
        try {
            if (!firmId) return;
            await saveMenuToFirestore(firmId, restaurantId, data);
            reset(data)
        } catch (error) {
            console.error("Error saving menu:", error);
        }
    };

    const categoriesWatch = useWatch({
        control,
        name: "categories",
    });

    const dishesCount = categoriesWatch.reduce((acc, category) => acc + category.dishes.length, 0);
    useEffect(() => {
        if (!firmId || !restaurantId) return;

        const loadMenu = async () => {
            const ref = doc(
                db,
                "firms",
                firmId,
                "restaurants",
                restaurantId,
                "menu",
                "main"
            );

            const snap = await getDoc(ref);

            if (snap.exists()) {
                form.reset({
                    categories: snap.data().categories || [],
                });
            }
        };

        loadMenu();
    }, [firmId, restaurantId]);
    return (
        <div>
            <div className="flex p-2 items-center w-full justify-between">
                <div>  <h1 className="text-3xl">Menu Editor</h1>
                    <p>{`${fields.length} category, ${dishesCount} dish`}</p>
                    {isDirty ? <div className="flex gap-2 text-amber-700 pt-3" ><MessageSquareWarningIcon /> You have unsaved changes</div> : null}
                </div>


                <Button
                    color="brown"
                    type="submit"
                    size="3"
                    onClick={handleSubmit(onHandleSubmit)}
                >
                    <SaveIcon />   Zapisz menu
                </Button>
            </div>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div>
                    {fields.length === 0 ?
                        <EmptyMenu addNewCategory={onAddNewCategory} />

                        : fields.map((category, indexCategory) => (
                            <CategoryForm
                                key={category.id}
                                form={form}
                                index={indexCategory}
                                category={category as Category}
                                onRemoveCategory={() => remove(indexCategory)}
                            />
                        ))}
                </div>
                {fields.length > 0 ?
                    <div className="flex justify-center m-0 border p-10 border-solid rounded-md">
                        <Button
                            type="button"
                            color="gray"
                            variant="ghost"
                            size="3"
                            onClick={onAddNewCategory}
                            className="
                                -full
                                py-6
                                bg-transparent
                                hover:bg-transparent
                                focus:bg-transparent
                                active:bg-transparent
                                focus:outline-none
                                focus:ring-0
                                shadow-none
                                "
                        ><PlusIcon />
                            Add category
                        </Button>
                    </div>
                    : null}
            </form>
        </div>
    );
};

export default MenuForm;
