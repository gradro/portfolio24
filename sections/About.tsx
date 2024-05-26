"use client";
import AnimatedHeading from '@/components/AnimatedHeading'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeUpAnimation, stack } from '@/constants/index'

const stackAnimation = {
    initial: {
      opacity: 0,
      y: 25
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      }
    })
  }


const About = () => {
  return (
    <section className='container lg:max-w-4xl' id="about-me">

        {/* About me introduction */}
        <AnimatedHeading
            text='Meet the Developer behind the Code'
            highlightWords={["Developer"]}
            topline='About me'
            className='text-center lg:max-w-lg mx-auto'
        />
        <motion.figure {...fadeUpAnimation}>
            <Image itemProp="image" src="/assets/me.png" alt="Gracjan Drozdek" width={280} height={380} className='mx-auto'/>
        </motion.figure>
        <motion.p className='text-center' {...fadeUpAnimation}>
          Hi, I'm <span className='underline' itemProp="name">Gracjan Drozdek</span>, a passionate <span itemProp='jobTitle'>web developer </span> with 3 years of experience in creating user-friendly and dynamic websites. I work with <span className='underline'>HubSpot CMS</span>, creating custom themes and templates to meet clients' unique needs. 
          Additionally, I develop modern and efficient web applications using <span className='underline'>React</span> and <span className='underline'>Next.js</span> . I love learning new technologies and constantly improving my skills to deliver the best solutions for my clients. <br/> Let's build something amazing together!
        </motion.p>

        {/* My tech stack */}
        <div className='flex flex-wrap gap-2 justify-center pt-10'>
            {stack && stack.map((item, index) => (
              <motion.span 
                key={item.name} 
                className="rounded-md bg-primary-300 border border-white-100 p-3 text-sm font-medium"
                variants={stackAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true
                }}
                custom={index}
            >
                {item.name}
            </motion.span>
            ))}
        </div>
    </section>
  )
}

export default About