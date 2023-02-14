type InputProp = {
    type: "text" | "password" | "email" | "date" | "number",
    className?: string,
    style?: object,
    placeholder?: string,
    icon?: string,
    validation?: {
        regex?: string,
    },
    search?: "innerLeft" | "innerRight" | "button",
    error?: object,
    name: string,
    defaultValue?: string
}

export default InputProp;