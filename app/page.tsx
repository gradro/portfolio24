import GradientMouseFollow from "@/components/GradientMouseFollow";
import Socials from "@/components/Socials";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
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
      <Projects/>
      <Contact/>
      <Footer />

      {/* Social buttons */}
      <Socials/>

    </>
  );
}
