import Navigation from "@/app/components/navigation/Navigation";
export default function Projects() {
  return (
    <>
      <main id="main">
        <Navigation
          homePath="/#header"
          aboutPath="/#about-section"
          projectsPath="#main"
          contactPath="#contact-section-anchor"
        />
      </main>
    </>
  );
}
