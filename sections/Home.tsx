"use client";
import { FiDownload } from "react-icons/fi";
import Button from '@/components/Button'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <div className='relative overflow-hidden pt-10 md:pt-40 pb-20 md:pb-38 flex flex-col justify-center md:justify-start min-h-screen md:min-h-full'>
      <div className="dots-background absolute z-[-1] w-full h-full top-1 left-1 right-1 bottom-1"/>
      <section className="container pt-14 flex items-center flex-col justify-center text-center lg:max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease:"easeInOut" }}
          className='topline text-center'>
            Personal Portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease:"easeInOut" }}
        >
          Transforming Ideas into <br/>Interactive <span className="text-highlight block md:inline-block">Web Solutions</span>
        </motion.h1>
        
        {/* <AnimatedHeading
          text="Transforming Ideas into Interactive Web Solutions"
          headingLevel="h1"
          highlightWords={["Web", "Solutions"]}
        />
        */}
        <motion.h2 
          className='h3'
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8, ease:"easeInOut" }}
        >
          Hello there! I'm Gracjan, a Web Developer.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease:"easeInOut" }}
          className="mt-6 flex gap-4"
        >
          <Button variant="primary" href="#about-me">About me</Button>
          <Button variant="outline" icon={<FiDownload/>} href="/assets/resume.pdf" download>Resume</Button>
        </motion.div>
      </section> 
    </div>
  )
}

export default Home