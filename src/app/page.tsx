import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { getPortraitSrc } from "@/lib/portrait";

export default function HomePage() {
  const portraitSrc = getPortraitSrc();

  return (
    <>
      <Hero portraitSrc={portraitSrc} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
