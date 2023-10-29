import Bio from "@/app/components/about/bio/Bio";
import Skills from "@/app/components/about/skills/Skills";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <>
      <div className={styles["overflow-clip"]}>
        <section id="about-section" className={styles["about-section"]}>
          <h2 className={styles.heading}>
            <span className={styles.span}>About</span>
          </h2>
          <div className={styles.container}>
            <Bio />
            <Skills />
          </div>
        </section>
      </div>
    </>
  );
}
