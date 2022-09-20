import { InputHTMLAttributes } from "react";
import { FieldErrorsImpl, FieldValues, useController, useForm, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<FieldValues>;
    options: object;
    errors: FieldErrorsImpl;
}

export function Input2(props: InputProps) {

    return (
        <>
            <input
                {...props.register(props.name ? props.name : '', props.options)}
                className='bg-BACKGROUND_900 py-3 px-4 rounded text-sm placeholder:text-CAPTION_500'
                {...props}
            />
            {props.name && props.errors[props.name] && <span className="valida-erro">This field is required</span>}
        </>
    )
}