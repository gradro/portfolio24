"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import Input from "./Input"

type FormProps = {
    submit: () => void
}

const Form = ({ submit }: FormProps) => {

    const { register, formState } = useForm()
    console.log(formState)
    return (
        <form className="">
            <Input type="text" name="name" required/> 
            <Input type="email" name="email" required/> 
            <textarea placeholder="Enter your message" {...register("message", { required: true })}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form