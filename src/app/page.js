import Header from "@/app/components/header/Header";
import Navigation from "@/app/components/navigation/Navigation";
import AboutSection from "@/app/components/about/AboutSection";
import DividerTop from "@/app/components/projects/DividerTop";
import DividerBottom from "@/app/components/projects/DividerBottom";

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
        <DividerTop id="top-divider" />
        <DividerBottom id="bottom-divider" />
      </main>
    </>
  );
}
