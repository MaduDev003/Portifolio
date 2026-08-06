import Header from "../components/layout/Header";
import AboutMe from "../features/aboutMe";
import Experience from "../features/experience";
import Presentation from "../features/presentation";
import Skills from "../features/Skills";
import Projects from "../features/Projects";
import Contact from "../features/Contact";

export default function Home() {
  return (
    <>
    <Header />
    <main className="py-6 min-h-screen mt-6">
      <Presentation />
      <AboutMe />
      <Skills/>
      <Experience />
      <Projects />
      <Contact />
    </main>
    </>
  );
}