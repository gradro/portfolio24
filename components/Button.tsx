
type ButtonProps = {
    as?: keyof JSX.IntrinsicElements
    icon?: JSX.Element
    children: React.ReactNode
    href: string
    variant: "primary" | "outline",
    download?: boolean,
    onClick?: () => void;
}

const Button = ({ as, children, href, variant="primary", onClick, download, icon }: ButtonProps) => {

    const Tag = as || "a";
    const variants = {
        primary: "bg-primary border border-primary border-solid",
        outline: "bg-transparent border border-primary border-solid text-primary hover:text-white hover:bg-primary"
    }

    return (
        <Tag onClick={onClick} href={href || "#"} download={download} className={`inline-flex items-center [&>svg]:ml-2 rounded-sm px-8 py-3 font-medium cursor-pointer ${variants[variant]}`}>
            {children}
            {icon}
        </Tag>
    )
}

export default Button