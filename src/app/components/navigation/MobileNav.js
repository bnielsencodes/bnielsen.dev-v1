export default function MobileNav(props) {
  if (!props.showMobileNav) {
    return null;
  }

  return (
    <>
      <div className={`${styles["mobile-nav"]} `}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li>
              <a className={styles.link} href="#header" aria-label="home">
                Home
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#about-section"
                aria-label="about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#top-divider"
                aria-label="projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#bottom-divider"
                aria-label="contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
