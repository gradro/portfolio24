"use client";
import AnimatedHeading from '@/components/AnimatedHeading'
import Timeline from '@/components/Timeline';
import { experience } from '@/constants'
import { motion } from 'framer-motion'

const experienceAnimation = {
    initial: {
      opacity: 0,
      y: -10
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      }
    })
}

const Experience = () => {
  return (
    <section className='container'>
        <AnimatedHeading
            topline="Experience"
            text="My Professional Path"
            highlightWords={["Path"]}
            className='text-center'
        />
        {/* Work experience */}
        <Timeline items={experience}/>
    </section>
  )
}

export default Experience