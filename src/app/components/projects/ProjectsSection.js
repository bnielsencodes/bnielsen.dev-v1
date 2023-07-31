import { projects } from "../../../data";
import FeaturedProject from "@/app/components/projects/FeaturedProject";
import ViewMoreBtn from "@/app/components/projects/ViewMoreBtn";
import styles from "./ProjectsSection.module.scss";

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
        <div className={styles.list}>{featuredProjects}</div>
        <ViewMoreBtn />
      </section>
    </>
  );
}
