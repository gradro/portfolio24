import Card from '@/components/Card'
import { projects, stack } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <section className="container pt-24" id="my-projects">
        <p className='topline text-center'>My Projects</p>
        <h2 className="text-center">Showcase of <span className='text-highlight'>My Work</span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects && projects.map(item => (
            <Card key={item.name} image={item.image}>
              <h3 className='h6 !mb-1'>{item.name}</h3>
              <p className='opacity-80'>{item.description}</p>
              <div className='flex items-center gap-1 pt-3 mt-auto'>
                {stack.map(stackItem => (
                  (item.stack.includes(stackItem.name) && 
                    <span key={stackItem.name} className='rounded-md border border-white-100 h-[40px] w-[40px] flex align-center p-2'>
                      <Image title={stackItem.name} src={stackItem.image} width={40} height={40} alt={stackItem.name} className='object-cover w-full h-auto' />
                    </span>
                  )
                ))}
              </div>
            </Card>
          ))}
        </div>
    </section>
  )
}

export default Projects