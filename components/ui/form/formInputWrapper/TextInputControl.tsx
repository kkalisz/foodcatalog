
import * as React from "react";
import { TextField } from "@radix-ui/themes";
import InputLabel from "../label/InputLabel";
import { useId } from "react";
import ErrorLabel from "../label/ErrorLabel";

type RadixTextFieldInputProps = React.ComponentPropsWithoutRef<typeof TextField.Root>;

// export type TetxInputControlerProps =
//   Omit<RadixTextFieldInputProps, "required" | "id"> & {
//     id?: string;
//     label?: string;
//     required?: boolean;
//     error?: string | null;
//   };

export type TetxInputControlerProps = RadixTextFieldInputProps & {
    label?: string;
    error?: string | null;
};

export const TextInputControl = React.forwardRef<
    React.ElementRef<typeof TextField.Root>,
    TetxInputControlerProps
>(({ id, label, required, error, disabled, ...inputProps }, ref) => {

    const generatedInpuId = useId()
    const inputId = id ? id : generatedInpuId;
    const errorId = `${inputId}-error`
    const hasError = Boolean(error);
    return (
        <div>
            {label ? <InputLabel htmlFor={inputId} children={undefined}></InputLabel> : null}
            <TextField.Root
                ref={ref}
                id={inputId}
                required={required}
                disabled={disabled}
                className={[hasError ? "border border-red-500" : "",
                disabled ? "opacity-50 cursor-not-allowed" : "",
                ].join("")}
                {...inputProps}
            />
            <ErrorLabel role="alert" id={errorId} error={error} />
        </div>
    )
})

export default TetxInputControlerProps
