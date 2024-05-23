"use client";
import { socialLinks } from '@/constants'
import { motion } from "framer-motion"

const defaultAnimations = {
  hidden: {
      opacity: 0,
      y: 10
  },
  visible: {
      opacity: 0.8,
      y: 0
  }
}

const Socials = () => {
  return (
    <div className='hidden md:block fixed left-4 bottom-0'>
      <motion.div 
        initial="hidden" 
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className='relative pb-24'
      >

        {socialLinks.map(social => (
          <motion.a 
            variants={defaultAnimations}
            href={social.href} 
            title={social.title} 
            key={social.name} 
            target='_blank'
            className="opacity-80 [transform-style:preserve-3d] [backface-visibility:hidden] will-change-transform; hover:opacity-100 duration-100 p-2 block"
          >
            {social.icon}
          </motion.a>
        ))}

        {/* Vertical line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.4 }}
          className='absolute bg-white opacity-80 bottom-0 w-0.5 h-20 left-0 right-0 mx-auto'
        />

      </motion.div>
    </div>
  )
}

export default Socials