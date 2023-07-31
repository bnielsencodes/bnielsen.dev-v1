import { projects } from "../../data";
import Navigation from "@/app/components/navigation/Navigation";
import ContactSection from "@/app/components/contact/ContactSection";
import FooterSection from "@/app/components/footer/FooterSection";

const projectsList = projects.map((project) => {
  return <Project key={project.id} project={project} />;
});

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
        {/* <!-- PAGE TOP DIVIDER --> */}
        <div className={styles["top-divider"]}></div>
        <div id="contact-section-anchor"></div>
        <ContactSection projectPage={true} />
        <FooterSection returnHomePath="#main" />
      </main>
    </>
  );
}
