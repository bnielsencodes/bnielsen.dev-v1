import styles from "./NavList.module.scss";

export default function NavList(props) {
  return (
    <>
      <ul className={`${styles["nav-list"]} hidden--sm`}>
        <li className={styles.item}>
          <a
            className={`${styles.link} ${styles["link--home"]} ${styles.underlineAnimation}`}
            href={props.homePath}
            aria-label="home"
          >
            Home
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={`${styles.link} ${styles.underlineAnimation}`}
            href={props.aboutPath}
            aria-label="about"
          >
            About
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={`${styles.link} ${styles.underlineAnimation}`}
            href={props.projectsPath}
            aria-label="projects"
          >
            Projects
          </a>
        </li>
        <li className={styles.item}>
          <a
            className={`${styles.link} ${styles.underlineAnimation}`}
            href={props.contactPath}
            aria-label="contacts"
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
