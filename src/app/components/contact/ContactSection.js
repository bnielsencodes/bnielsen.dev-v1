export default function ContactSection(props) {
  return (
    <section
      id={styles["contact-section"]}
      className={`${props.projectPage ? styles["project-page"] : null}`}
    >
      <h2 className={styles.heading}>
        <span className={styles.span}>Want to work together?</span>
      </h2>
    </section>
  );
}
