"use client"
import { useForm } from 'react-hook-form'

type InputProps = {
    type: "email" | "number" | "text",
    name: string,
    required?: boolean
}

const Input = ({ type, name, required }: InputProps) => {

    const { register, formState } = useForm()

    return (
        <input 
            type={type} 
            {...register(name, { required: required })}
            className=''
        />
    )
}

export default Input