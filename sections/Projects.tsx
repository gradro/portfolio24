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
        <div className='flex flex-col gap-4'>
          {projects && projects.map((item, index) => (
            <ProjectCard 
              key={item.name} 
              image={item.image} 
              title={item.name}
              stack={item.stack}
              description={item.description}
              githubLink={item.githubLink}
              previewLink={item.previewLink}
              reverse={index % 2 ? true : false}
            />
          ))}
        </div>
    </section>
  )
}

export default Projects