import Bio from "@/app/components/about/Bio";
import styles from "./AboutSection.module.scss";

export default function AboutSection() {
  return (
    <>
      <section id="about-section" className={styles["about-section"]}>
        <h2 className={styles.heading}>
          <span className={styles.span}>About</span>
        </h2>
        <div className={styles.container}>
          <Bio />
        </div>
      </section>
    </>
  );
}
