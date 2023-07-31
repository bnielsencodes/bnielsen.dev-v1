import Image from "next/image";
import ProjectTech from "@/app/components/projects/ProjectTech";
import ProjectBtns from "@/app/components/projects/ProjectBtns";
import styles from "./Project.module.scss";

export default function Project(props) {
  return (
    <>
      <article className={styles.project}>
        <div className={styles.container}>
          <div className={styles["img-container"]}>
            <Image
              className={styles.img}
              src={props.project.img}
              alt="project screenshot"
              width="0"
              height="0"
              sizes="100vw"
            />
            <div className={`${styles.overlay} hidden--sm`}>
              <div className={styles["overlay-text"]}>
                An e-commerce website for a fictional company named Audiophile
                that is a one stop shop for all things audio.
              </div>
            </div>
          </div>
          <div className={styles["container--bottom"]}>
            <h3 className={styles.heading}>{props.project.name}</h3>
            <p className={`${styles.description} hidden--md`}>
              {props.project.description}
            </p>
            <ProjectTech project={props.project} />
            <ProjectBtns project={props.project} />
          </div>
        </div>
      </article>
    </>
  );
}
