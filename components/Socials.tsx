import { socialLinks } from '@/constants'
import React from 'react'

const Socials = () => {
  return (
    <div className='hidden md:block fixed left-4 bottom-0'>
      <div className='relative pb-24 after:absolute after:bg-white after:opacity-80 after:bottom-0 after after:w-0.5 after:h-20 after:left-0 after:right-0 after:mx-auto'>
        {socialLinks.map(social => (
          <a 
            href={social.href} 
            title={social.title} 
            key={social.name} 
            target='_blank'
            className="opacity-80 hover:opacity-100 duration-100 p-2 block"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials