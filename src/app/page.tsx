import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";
import AboutMe from "@/src/features/AboutMe";
import Experience from "@/src/features/Experience";
import Presentation from "@/src/features/Presentation";
import Skills from "@/src/features/Skills";
import Projects from "@/src/features/Projects";
import Contact from "@/src/features/Contact";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex-1">
      <Presentation />
      <AboutMe />
      <Skills/>
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer/>
    </>
  );
}