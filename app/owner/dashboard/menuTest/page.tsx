"use client";
import { PageSizeWrapper } from "@/components/ui/wrapper";
import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { Flex, Button } from "@radix-ui/themes";

import "./style.css";
import CategoryForm from "@/components/ui/categoryForm";
import { MenuForm } from "@/data/types/dishMenu";

const MenuTest = () => {
    const form = useForm<MenuForm>({ defaultValues: { categories: [{ name: "", id: "", dishes: [] }] }, mode: "onSubmit", reValidateMode: "onSubmit" });
    const { handleSubmit, formState: { errors }, control } = form
    const { append, remove, fields: categories } = useFieldArray({
        name: "categories", control
    })
    // const categories = useWatch({
    //     name: "categories",
    //     control
    // });

    const onAddNewCategory = () => {

        const newCategory = { name: "", id: crypto.randomUUID(), dishes: [] };
        append(newCategory);

    }

    const onSubmit = (data: any) => {
        console.log("czesc");
    }
    return (<PageSizeWrapper>
        <div className="p-10 text-center">Menu Testowe</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
                {categories.map((category, index) =>
                    <CategoryForm
                        key={category.id}
                        index={index}
                        form={form}
                        category={category}
                        onRemoveCategory={() => remove(index)}

                    />
                )}
            </div>
            <Flex gap="3">
                <Button type="submit" onClick={onAddNewCategory} color="cyan" variant="soft">
                    Dodaj nową kategorie
                </Button>
            </Flex>

            <Flex gap="3">
                <Button onClick={onSubmit} color="blue" variant="surface">
                    Zapisz menu
                </Button>
            </Flex>
        </form>
    </PageSizeWrapper>
    );
};

export default MenuTest;