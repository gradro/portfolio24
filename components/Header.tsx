"use client";

import { navLinks } from '@/constants'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react';

const Header = () => {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if(latest > previous && latest > 200) {
            return setHidden(true)
        }
        return setHidden(false)
    })

    const active = ""

    return (
        <motion.div 
            variants={{
                visible: { transform: "translateY(0px)" },
                hidden: { transform: "translateY(-200px)" }
            }}
            animate={hidden ? "hidden" : "visible"}
            // transition={{ duration: "0.3s" }}
            className="fixed left-0 top-6 right-0 z-10 flex justify-center"
        >
            <nav aria-label='Main Navigation' className='inline-block rounded-md p-4 bg-primary-300 border border-white-100'>
                {navLinks && 
                    <ul role="menu" className='inline-flex gap-4'>
                        {navLinks.map((navItem, index) => (
                            <li role="presentation" key={index}>
                                <Link className='p-2 hover:text-primary focus:text-primary font-extralight relative' role="menuitem" href={navItem.href}>
                                    <span className={`relative md:text-[16px] opacity-80 font-medium after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:bg-primary after:h-[3px] ${index !== 0 && 'after:opacity-0'}`}>
                                        {navItem.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                }
            </nav>
        </motion.div>
  )
}

export default Header