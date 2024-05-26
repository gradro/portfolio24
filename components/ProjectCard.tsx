import Image from "next/image"
import Card from "./Card"
import { stack as stackItems } from "@/constants"
import Link from "next/link"
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";


type ProjectCardProps = {
    title: string
    stack: string[]
    image: string
    description: string,
    previewLink?: string,
    githubLink?: string
    reverse?: boolean
}

const ProjectCard = ({ title, stack, image, description, previewLink, githubLink, reverse }: ProjectCardProps) => {
  return (
    <Card
        className="cursor-pointer transition p-4 lg:p-8 group"
    >
      <div className={`flex lg:gap-10 flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <figure className={`mb-6 -mt-4 lg:-mb-4 lg:-mt-4 -ml-4 -mr-4 lg:w-5/12 overflow-hidden ${reverse ? "lg:-mr-4" : "lg:-ml-4"}`}>
          <Image className="h-full w-full object-cover aspect-video rounded-md transition-transform group-hover:scale-105" src={image} width={300} height={220} alt={`Screenshot of my project: ${title}`}/>
        </figure>
        <div className="lg:w-7/12 flex flex-col">
          <h3 className='h5 !mb-1'>{title}</h3>
          <p className='opacity-80'>{description}</p>
          <div className='flex items-center gap-1 pt-3 mt-auto'>
              {stackItems.map((stackItem: { name: string, image: string }) => (
                (stack.includes(stackItem.name) && 
                  <span key={stackItem.name} className='rounded-md border border-white-100 h-[40px] w-[40px] flex align-center p-2'>
                    <Image title={stackItem.name} src={stackItem.image} width={40} height={40} alt={stackItem.name} className='object-cover w-full h-auto' />
                  </span>
                )
              ))}
          </div>
          {(githubLink || previewLink) && 
            <div className="flex pt-6 gap-8 text-sm justify-between lg:justify-normal">
              {/* GitHub link */}
              {githubLink && 
                <Link 
                  target="_blank"
                  className="opacity-80 hover:opacity-100 flex items-center font-medium" 
                  href={githubLink}
                >
                  <FaGithub className="mr-1 w-4 h-4"/>Show on GitHub
                </Link>
              }
              {/* Live preview link */}
              {previewLink && 
                <Link 
                  target="_blank" 
                  className="opacity-80 hover:opacity-100 flex items-center font-medium" 
                  href={previewLink}
                >
                  Visit page <HiOutlineExternalLink className="ml-1 w-4 h-4"/>
                </Link>
              }
            </div>
          }
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard