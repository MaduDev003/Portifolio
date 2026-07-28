import Header from "../components/layout/Header";
import AboutMe from "../features/aboutMe";

export default function Home() {
  return (
    <>
    <Header />
    <main className="py-6 min-h-screen px-14 mt-2">
      <AboutMe />
    </main>
    </>
  );
}