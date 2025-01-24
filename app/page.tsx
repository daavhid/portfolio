import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Divider from "@/components/section-divider";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <div className=" flex flex-col px-4 items-center">
      <Intro/>
      <Divider/>
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Experience/>
      <Contact/>
      
    </div>
  );
}
