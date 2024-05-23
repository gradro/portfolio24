import AnimatedHeading from '@/components/AnimatedHeading'
import ProjectCard from '@/components/ProjectCard'
import { projects, stack } from '@/constants'
import React from 'react'

const Projects = () => {
  return (
    <section className="container pt-24" id="my-projects">
        <p className='topline text-center'>My Projects</p>
        <AnimatedHeading 
          text="Showcase of My Work" 
          className='text-center' 
          highlightWords={["My", "Work"]}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects && projects.map(item => (
            <ProjectCard 
              key={item.name} 
              image={item.image} 
              title={item.name}
              stack={item.stack}
              description={item.description}
            />
          ))}
        </div>
    </section>
  )
}

export default Projects