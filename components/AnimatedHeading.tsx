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
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.15 * index,
        }
    })
}

const AnimatedHeading = ({ text, headingLevel, highlightWords, className }: AnimatedHeadingProps) => {

    const Tag = headingLevel || "h2"
    return (
        <Tag className={`block ${className}`}>
            <span className="sr-only">{text}</span>
            <span 
                aria-hidden 
            >
                {text.split(' ').map((word, index) => (
                    <motion.span 
                        key={`${word}_${index}`}
                        variants={defaultAnimations}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                        once: true
                        }}
                        className={`${highlightWords && highlightWords.includes(word) && "text-highlight"}`}
                    >
                        {word + " "} 
                    </motion.span>
                    
                ))}
            </span>
        </Tag>
    )
}

export default AnimatedHeading