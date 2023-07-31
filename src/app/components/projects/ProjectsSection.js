import { projects } from "../../../data";
import FeaturedProject from "@/app/components/projects/FeaturedProject";

const featuredProjects = projects.slice(0, 4).map((project) => {
  return <FeaturedProject key={project.id} project={project} />;
});

export default function ProjectsSection() {
  return (
    <>
      <section id={styles["projects-section"]}>
        <h2 className={styles.heading}>
          <span className={styles.span}>Projects</span>
        </h2>
      </section>
    </>
  );
}
