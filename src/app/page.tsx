import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import AboutMe from "../features/AboutMe";
import Experience from "../features/Experience";
import Presentation from "../features/Presentation";
import Skills from "../features/Skills";
import Projects from "../features/Projects";
import Contact from "../features/Contact";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex-1 mt-6">
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