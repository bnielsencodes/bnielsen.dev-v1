import Header from "@/app/components/header/Header";
import Navigation from "@/app/components/navigation/Navigation";
import AboutSection from "@/app/components/about/AboutSection";

export default function Home() {
  return (
    <>
      <main className="main">
        <Header />
        <Navigation
          homePath="#header"
          aboutPath="#about-section"
          projectsPath="#top-divider"
          contactPath="#bottom-divider"
        />
        <AboutSection />
      </main>
    </>
  );
}
