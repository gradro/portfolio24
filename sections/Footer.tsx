import { GoHeartFill } from "react-icons/go";

const Footer = () => {
  return (
    <footer className='relative overflow-hidden py-10 mt-16'>
        <div className="dots-background absolute z-[-1] w-full h-full top-1 left-1 right-1 bottom-1"/>
        <div className='container text-center'>
            <p className="text-sm opacity-80 inline-flex items-center gap-1">Made with <span><GoHeartFill/></span></p>
            <p className="text-sm opacity-80">
                &copy; {new Date().getFullYear()}
            </p>
        </div>
    </footer>
  )
}

export default Footer