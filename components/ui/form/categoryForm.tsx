
import { Category, Dish, MenuForm, } from "@/data/types/dishMenu";
import { Box, Button, Flex, TextArea, TextField } from "@radix-ui/themes";
import { useFieldArray, useForm, UseFormReturn, useWatch } from "react-hook-form";
import InputLabel from "./label/InputLabel";
import ErrorLabel from "./label/ErrorLabel";

type FormCategoryProps = {
    form: UseFormReturn<MenuForm, any, MenuForm>,
    index: number,
    category: Category
    onRemoveCategory: () => void

}

const CategoryForm = ({ form, index, category, onRemoveCategory }: FormCategoryProps) => {
    const { control, register, formState: { errors }, handleSubmit } = form
    const { append, remove, fields: dishes } = useFieldArray({
        name: `categories.${index}.dishes`,
        control
    })

    const onAddNewDish = () => {
        const newDish: Dish = {
            id: crypto.randomUUID(),
            name: "",
            price: 0,
            description: ""
        }
        append(newDish)
    }
    const removeDish = () => {
        remove(index)
    }
    return <Flex key={category.id} direction="column" gap="2">

        <Box maxWidth="300px" className="p-2">
            <TextField.Root
                key={category.id}
                {...register(`categories.${index}.name`)}
                size="3"
                placeholder="Nazwa kategorii w menu"
                variant="soft"
                color="green"
            />

        </Box>
        {dishes.map((dish, indexDish) => (<div key={dish.id} className="flex flex-col gap-3 border-2 p-5 rounded-lg ">
            <div>
                <InputLabel htmlFor={`categories.${index}.dishes.${indexDish}.name`} required={true} children={"Nazwa dania"}></InputLabel>
                <Box maxWidth="300px">
                    <TextField.Root color="jade" variant="classic" placeholder="Wpisz nazwe dania.."
                        {...register(`categories.${index}.dishes.${indexDish}.name`, { required: true, minLength: { value: 3, message: "Nazwa dania musi mieć minimum 3 litery" } })}
                    />
                    {errors.categories?.[index]?.dishes?.[indexDish]?.name && (
                        <p style={{ color: "green", fontSize: "12px", marginTop: "4px" }}>
                            {errors.categories?.[index]?.dishes?.[indexDish]?.name?.message}
                        </p>
                    )}
                </Box>

            </div>
            <div>
                <InputLabel htmlFor={`categories.${index}.dishes.${indexDish}.description`} required={false} children={"Krótki opis"}></InputLabel>
                <TextArea color="green" variant="soft" placeholder="Krótko opis potrawy..."
                    {...register(`categories.${index}.dishes.${indexDish}.description`, { required: true, minLength: { value: 10, message: "Minimum 20 znaków" } })}
                />
                <ErrorLabel error={errors.categories?.[index]?.dishes?.[indexDish]?.description?.message} id={"minLength"}></ErrorLabel>

            </div>
            <div>
                <h1>Cena:</h1>
                <Box maxWidth="300px">
                    <TextField.Root size="1" placeholder="Cena"
                        {...register(`categories.${index}.dishes.${indexDish}.price`, { required: true, min: { value: 1, message: "Minimalna cena musi być większa od 0" } })}
                    />
                    <p style={{ color: "green", fontSize: "12px", marginTop: "4px" }}>
                        {errors.categories?.[index]?.dishes?.[indexDish]?.price?.message}
                    </p>
                </Box>
            </div>
            <Box maxWidth="200px">
                <Button onClick={() => remove(indexDish)}>Usuń danie</Button>
            </Box>
        </div>))}
        <Button color="gold" type="button" onClick={onAddNewDish}>Dodaj danie</Button>
        <Button type="button" color="red" onClick={onRemoveCategory}>
            Usuń kategorię
        </Button>

    </Flex>
}

export default CategoryForm