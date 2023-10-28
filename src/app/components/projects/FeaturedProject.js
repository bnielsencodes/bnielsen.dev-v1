import Image from "next/image";
import ProjectTech from "@/app/components/projects/ProjectTech";
import ProjectBtns from "@/app/components/projects/ProjectBtns";
import styles from "./FeaturedProject.module.scss";

export default function FeaturedProject(props) {
  return (
    <>
      <article className={styles.project}>
        <div className={styles.container}>
          <div
            className={`${styles.imgContainer} ${
              props.project.name === "SecurePass" ||
              props.project.name === "Dictionary Web App" ||
              props.project.name === "Quizzical"
                ? styles.stretchImg
                : null
            } ${
              props.project.name === "SecurePass"
                ? styles.securePassBg
                : props.project.name === "Dictionary Web App"
                ? styles.dictionaryBg
                : null
            }`}
          >
            <Image
              className={`${styles.img} ${
                props.project.name === "Audiophile"
                  ? styles["img--audiophile"]
                  : props.project.name === "SecurePass"
                  ? styles["img--securepass"]
                  : props.project.name === "Quizzical"
                  ? styles["img--quizzical"]
                  : styles["img--dictionary"]
              }`}
              src={props.project.featuredImg}
              alt="project screenshot"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
          <div className={styles["container--bottom"]}>
            <h3 className={styles.heading}>{props.project.name}</h3>
            <p className={styles.description}>{props.project.description}</p>
            <ProjectTech project={props.project} />
            <ProjectBtns project={props.project} />
          </div>
        </div>
      </article>
    </>
  );
}
