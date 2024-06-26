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
    <div className='md:fixed md:left-4 md:bottom-0'>
      <motion.div 
        initial="hidden" 
        animate="visible"
        transition={{ staggerChildren: 0.15, duration: 0.3 }}
        className='relative pt-4 md:pt-0 pb-6 md:pb-24 inline-flex justify-center w-full md:block md:w-auto'
      >

        {socialLinks.map(social => (
          <motion.a 
            variants={defaultAnimations}
            href={social.href} 
            title={social.title} 
            key={social.name} 
            target='_blank'
            className="will-change-transform hover:!opacity-100 hover:duration-100 p-2 block"
          >
            {social.icon}
          </motion.a>
        ))}

        {/* Vertical line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.4 }}
          className='hidden md:block absolute bg-white opacity-80 bottom-0 w-0.5 h-20 left-0 right-0 mx-auto'
        />

      </motion.div>
    </div>
  )
}

export default Socials