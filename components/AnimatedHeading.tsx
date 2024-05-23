"use client";
import { motion } from "framer-motion"

type AnimatedHeadingProps = {
    text: string
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
    className?: string,
    highlightWords?: string[]
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

const AnimatedHeading = ({ text, headingLevel, highlightWords, className }: AnimatedHeadingProps) => {

    const Tag = headingLevel || "h2"
    return (
        <Tag className={`block ${className}`}>
            <span className="sr-only">{text}</span>
            <motion.span 
                aria-hidden 
                initial="hidden" 
                transition={{ staggerChildren: 0.15 }}
                animate="visible"
                viewport={{ once: true }}
            >
                {text.split(' ').map((word, index) => (
                    <motion.span 
                        key={`${word}_${index}`}
                        variants={defaultAnimations}
                        className={`${highlightWords && highlightWords.includes(word) && "text-highlight"}`}
                    >
                        {word + " "} 
                    </motion.span>
                    
                ))}
            </motion.span>
        </Tag>
    )
}

export default AnimatedHeading