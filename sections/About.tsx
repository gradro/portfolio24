"use client";
import Card from '@/components/Card'
import { experience, stack } from '@/constants'
import Image from 'next/image'
import { motion } from 'framer-motion'

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


const About = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 mx-auto w-full" id="about-me">
        <Card 
          title="About me" 
          headingShowAs='h3' 
          className='row-span-1 flex flex-col lg:col-span-3 md:col-span-6 md:row-span-4 text-center'
        >
          <motion.div 
            itemType="https://schema.org/Person" 
            itemScope
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Image itemProp="image" src="/assets/me.png" alt="Gracjan Drozdek" width={280} height={380} className='mx-auto'/>
            <p>
              Hi, I'm <span itemProp="name">Gracjan Drozdek</span>, a passionate <span itemProp='jobTitle'>web developer </span> with 3 years of experience in creating user-friendly and dynamic websites. I work with HubSpot CMS, creating custom themes and templates to meet clients' unique needs. 
              Additionally, I develop modern and efficient web applications using React and Next.js. I love learning new technologies and constantly improving my skills to deliver the best solutions for my clients. Let's build something amazing together!
            </p>
          </motion.div>
        </Card>
        <Card title="Tech stack" headingLevel='h3' headingShowAs='h5' className='row-span-1 lg:col-span-2 md:col-span-3 md:row-span-2 flex flex-col'>
          <div className='flex flex-wrap gap-2'>
            {stack && stack.map((item, index) => (
              <motion.span 
                key={item.name} 
                className="rounded-md border border-white-100 p-3 text-sm font-medium"
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
        </Card>
        <Card title="Education & Experience" headingLevel='h3' headingShowAs='h5' className='row-span-1 lg:col-span-2 md:col-span-3 md:row-span-2  flex flex-col'>
          {experience && experience.map((item, index) => (
            <motion.div 
              key={index} 
              className={`${index+1 !== experience.length && 'border-b border-white-100'} py-2`}
              variants={experienceAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false
              }}
              custom={index}
            >
              <p className='text-xs opacity-80'>{item.period}</p>
              <strong>{item.title}</strong>
              <p className='text-sm'>{item.company}</p>
              <p className='text-xs opacity-80'>{item.location}</p>
            </motion.div>
          ))}
        </Card>
    </section>
  )
}

export default About