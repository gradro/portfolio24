"use client";

import { navLinks } from '@/constants'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {

    const [hidden, setHidden] = useState(false);
    const [active, setActive] = useState("Home")
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if(latest > previous && latest > 200) {
            return setHidden(true)
        }
        return setHidden(false)
    })


    return (
        <>
        <motion.div 
            className="absolute left-4 top-6"
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0}
            }}
            initial="hidden"
            animate="visible"
        >
            <Image src="/assets/logo.svg" width={64} height={64} alt="gdrozdek.com" className="opacity-80 mx-auto"/>
        </motion.div>
        <motion.div 
            variants={{
                visible: { transform: "translateY(0px)" },
                hidden: { transform: "translateY(-200px)" }
            }}
            initial="hidden"
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hidden md:flex fixed left-1 top-6 right-1 z-20 justify-center"
        >

            <nav aria-label='Main Navigation' className='inline-block rounded-md p-4 bg-primary-300 border border-white-100'>
                {navLinks && 
                    <ul role="menu" className='gap-4 flex-wrap justify-center inline-flex'>
                        {navLinks.map((navItem, index) => (
                            <li role="presentation" key={index}>
                                <Link className='p-2 hover:text-primary focus:text-primary font-extralight relative' role="menuitem" href={navItem.href}>
                                    <span className={`relative md:text-[16px] opacity-80 font-medium after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:bg-primary after:h-[3px] ${active !== navItem.label && 'after:opacity-0'}`}>
                                        {navItem.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                }
            </nav>
        </motion.div>
        </>

  )
}

export default Header