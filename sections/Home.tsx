"use client"
import Button from '@/components/Button'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div className='relative overflow-hidden pt-40 pb-32'>
      <div className="dots-background absolute z-[-1] w-full h-full top-1 left-1 right-1 bottom-1"/>
      <section className="container pt-14 flex items-center flex-col justify-center text-center">
        <motion.p 
          className='topline text-center'>
            Personal Portfolio
        </motion.p>
        <motion.h1

        >
          Transforming Ideas into <br/>Interactive <span className="text-highlight">Web Solutions</span>
        </motion.h1>
        <h2 className='h3'>Hello there! I'm Gracjan, a Web Developer.</h2>
          <div className="mt-6 flex gap-4 flex-col md:flex-row">
            <Button variant="outline" href="#about-me">Learn more</Button>
          </div>
      </section>
    </div>
  )
}

export default Home