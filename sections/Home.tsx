"use client"
import AnimatedHeading from '@/components/AnimatedHeading'
import Button from '@/components/Button'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='relative overflow-hidden pt-40 pb-32'>
      <div className="dots-background absolute z-[-1] w-full h-full top-1 left-1 right-1 bottom-1"/>
      <section className="pt-14 flex items-center flex-col justify-center text-center lg:max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className='topline text-center'>
            Personal Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Transforming Ideas into <br/>Interactive <span className="text-highlight">Web Solutions</span>
        </motion.h1>
     
        
        {/* <AnimatedHeading
          text="Transforming Ideas into Interactive Web Solutions"
          headingLevel="h1"
          highlightWords={["Web", "Solutions"]}
        />
     */}
        <motion.h2 
          className='h3'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Hello there! I'm Gracjan, a Web Developer.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 flex gap-4 flex-col md:flex-row"
        >
          <Button variant="outline" href="#about-me">Learn more</Button>
        </motion.div>
      </section>
    </div>
  )
}

export default Home