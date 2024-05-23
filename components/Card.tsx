import Image from 'next/image'
import { motion } from 'framer-motion';

type CardProps = {
    children?: React.ReactNode
    title?: string,
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    headingShowAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    className?: string,
    image?: string
} 

const cardAnimations = {
    initial: {
        opacity: 0,
    },
    animate: (index: number) => ({
        opacity: 1,
        transition: {
          delay: 0.15 * index
        }
    })
}

const Card = ({ children, title, image, headingLevel, headingShowAs, className }: CardProps) => {

    const Tag = headingLevel || "h2"

    return (
        <div className={`border border-white-100 bg-primary-300 p-4 rounded-md flex flex-col ${className}`}>
            {image && 
                <figure className='mt-[-1rem] ml-[-1rem] mr-[-1rem] overflow-hidden'>
                    <Image 
                        src={image} 
                        alt={title || "Card image"} 
                        width={500} 
                        height={260}
                        className="object-cover aspect-video mb-6 w-full h-auto rounded-t-md"
                    />
                </figure>
            }
            {title &&
                <Tag className={headingShowAs}>{title}</Tag>
            }
            {children}
        </div>
    )
}

export default Card