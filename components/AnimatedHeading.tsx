"use client";
import { motion } from "framer-motion"

type AnimatedHeadingProps = {
    text: string
    headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'
    className?: string,
    highlightWords?: string[],
    topline?: string,
    id?: string
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
          duration: 0.3
        }
    })
}

const toplineAnimation = {
    hidden: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 0.8,
        y: 0
    }
}

const AnimatedHeading = ({ text, headingLevel, highlightWords, topline, className, id }: AnimatedHeadingProps) => {

    const Tag = headingLevel || "h2"
    return (
        <div className="relative pt-4" id={id}>
            {topline && 
                <motion.p
                    variants={toplineAnimation}
                    whileInView="visible" 
                    initial="hidden"
                    viewport={{ once: true }}
                    className="topline text-center"
                >
                    {topline}
                </motion.p>
            }
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
        </div>
    )
}

export default AnimatedHeading