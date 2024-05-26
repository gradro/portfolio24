import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const MobileNavBar = () => {
  return (
    <nav className='md:hidden fixed bottom-0 left-0 right-0 w-full h-16 bg-primary-300 border border-white-100'>
        {navLinks && 
            <ul role="menu" className='gap-4 px-4 flex-wrap flex justify-between h-full items-center'>
                {navLinks.map((navItem, index) => (
                    <li role="presentation" key={index} className=''>
                        <Link className='[&>svg]:w-5 [&>svg]:h-5 font-medium opacity-80 flex flex-col items-center &>svg:' role="menuitem" href={navItem.href}>
                                {navItem.icon}
                                <span className="text-sm mt-1">
                                    {navItem.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
        }
    </nav>
  )
}

export default MobileNavBar