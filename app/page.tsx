import GradientMouseFollow from "@/components/GradientMouseFollow";
import MobileNavBar from "@/components/MobileNavBar";
import Socials from "@/components/Socials";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Home from "@/sections/Home";
import Projects from "@/sections/Projects";

export default function Page() {

  return (
    <>
      <GradientMouseFollow/>
      
      {/* Page sections */}
      <Home/>
      <About/>
      <Experience />
      <Projects/>
      <Contact/>
      <Footer />

      <MobileNavBar/>
    </>
  );
}
