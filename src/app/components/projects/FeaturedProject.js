export default function FeaturedProject(props) {
  return (
    <>
      <article
        className={`${styles.project} ${
          props.project.id === 1
            ? styles["project--left"]
            : props.project.id === 3
            ? styles["project--left"]
            : styles["project--right"]
        }`}
      >
        <div className={styles.container}>
          <video className={styles.video} width="100%" autoPlay muted loop>
            <source src={props.project.video} type="video/mp4" />
          </video>
          <div className={styles["container--bottom"]}>
            <h3 className={styles.heading}>{props.project.name}</h3>
            <p className={styles.description}>{props.project.description}</p>
          </div>
        </div>
      </article>
    </>
  );
}
