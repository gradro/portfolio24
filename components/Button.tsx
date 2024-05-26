type ButtonProps = {
    as?: keyof JSX.IntrinsicElements;
    children: React.ReactNode
    href: string
    variant: "primary" | "outline",
    download?: boolean,
    onClick?: () => void;
}

const Button = ({ as, children, href, variant="primary", onClick, download }: ButtonProps) => {

    const Tag = as || "a";
    const variants = {
        primary: "bg-primary border border-primary border-solid",
        outline: "bg-transparent border border-primary border-solid text-primary hover:text-white hover:bg-primary"
    }

    return (
        <Tag onClick={onClick} href={href || "#"} download={download} className={`rounded-sm px-8 py-3 font-medium cursor-pointer ${variants[variant]}`}>
            {children}
        </Tag>
    )
}

export default Button