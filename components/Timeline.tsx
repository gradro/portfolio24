import { motion } from "framer-motion"

type TimelineProps = {
    items: { period: string, title: string, company?: string, location?: string, icon?: React.ReactNode }[]
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

const iconsAnimation = {
  hidden: {
    opacity: 0  
 },
  visible: {
    opacity: 1
  }
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <motion.div 
      className="relative pl-6 lg:pl-0 after:absolute after:w-1 after:left-6 lg:after:left-1/2 after:-translate-x-1/2 after:top-0 after:bottom-0 after:h-full after:bg-white-100 after:rounded-md"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
      whileInView="animate"
      viewport={{ once: true }}
    >
        {items && items.map((item, index) => (
            <div className={`relative w-full lg:w-1/2 ${index % 2 ? "lg:ml-auto lg:pl-20" : "lg:pr-20"} ${index === 0 && "pt-6 lg:pt-10"} ${index+1 === items.length && "pb-6 lg:pb-10"}`} >
                <motion.div
                    className={
                        `border border-white-100 bg-primary-300 ml-12 lg:ml-0 p-4 rounded-md ${index+1 !== items.length && "mb-10 lg:mb-20"}`
                    }
                    variants={experienceAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true
                    }}
                    custom={index}
                    key={item + "_" + index}
                >
                    <p className='text-xs opacity-80'>{item.period}</p>
                    <strong>{item.title}</strong>
                    {item.company && <p className='text-sm'>{item.company}</p>}
                    {item.location && <p className='text-xs opacity-80'>{item.location}</p>}
                </motion.div>
                {/* Icon */}
                <motion.div 
                  className={`absolute [&>svg]:w-full [&>svg]:h-full py-4 [&>svg]:opacity-80 top-1/2 -translate-y-1/2 -translate-x-1/2 ${index === 0 && "mt-2.5 lg:mt-5"} ${index+1 === items.length && "-mt-2.5 lg:-mt-5"} rounded-full w-14 h-14 lg:w-16 lg:h-16 bg-primary-300 border border-white-100 z-10 ${index % 2 ? 'lg:left-0 lg:-translate-x-1/2' : 'lg:right-0 lg:translate-x-1/2'}`}
                  variants={iconsAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                >
                    {item.icon}
                </motion.div>
            </div>
        ))}
    </motion.div>
  )
}

export default Timeline