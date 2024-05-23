import Image from "next/image"
import Card from "./Card"
import { stack as stackItems } from "@/constants"
import Link from "next/link"
import { HiOutlineExternalLink } from "react-icons/hi";


type ProjectCardProps = {
    title: string
    stack: string[]
    image: string
    description: string,
    previewLink?: string,
    githubLink?: string
}

const ProjectCard = ({ title, stack, image, description, previewLink, githubLink }: ProjectCardProps) => {
  return (
    <Card
        image={image}
        className="cursor-pointer transition hover:"
    >
        <h3 className='h6 !mb-1'>{title}</h3>
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
        <div className="flex pt-4 justify-between text-sm">
            <Link className="opacity-80 hover:opacity-100" href="github.com">Show on GitHub</Link>
            <Link target="_blank" className="opacity-80 hover:opacity-100 flex items-center font-medium" href="github.com">Visit live <HiOutlineExternalLink className="ml-1"/></Link>
        </div>
    </Card>
  )
}

export default ProjectCard