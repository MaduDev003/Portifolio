import Header from "../components/layout/Header";
import AboutMe from "../features/aboutMe";

export default function Home() {
  return (
    <>
    <Header />
    <main className="py-18 min-h-screen px-14">
      <AboutMe />
    </main>
    </>
  );
}