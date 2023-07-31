import styles from "./ProjectBtns.module.scss";

export default function ProjectBtns(props) {
  return (
    <>
      <div className={styles.buttons}>
        <a
          className={styles.liveSite}
          href={props.project.liveSite}
          target="_blank"
        >
          Live Site
        </a>
        <a
          className={styles.sourceCode}
          href={props.project.sourceCode}
          target="_blank"
        >
          Source Code
        </a>
      </div>
    </>
  );
}
