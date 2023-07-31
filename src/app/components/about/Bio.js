export default function Bio() {
  return (
    <>
        <article className={styles.bio}>
          <div className={styles.imgContainer}>
            <div className={styles.imgBorderContainer}>
              <div className={styles.imgBorderOuter}>
                <div className={styles.imgBorderInner}>
                  <div className={styles.imgBorderInner2}></div>
                </div>
              </div>
            </div>
            <div className={styles.bioHex}>
              <div className={styles.inner1}>
                <div className={styles.inner2}></div>
              </div>
            </div>
          </div>
          <div className={styles.locationContainer}>
            <div className={styles.inner}>
              <div className={styles.icon}>
              </div>
              <h4 className={styles.location}>Oregon, US</h4>
            </div>
          </div>
          <p className={styles.text}>
            Brandon Nielsen is an expert web developer, combining an impressive
            range of technical acumen and creative flair. His background
            involves working directly with people, inspiring him to always
            create the best user experiences. With his analytical and creative
            expertise, he is the perfect choice for any project.
          </p>
          <a
            className={styles.resume}
            href="https://drive.google.com/file/d/1pJRoHl7UbfoqWO87wGbVoFV1ib-B3G5C/view?usp=sharing"
            aria-label="view resume"
            target="_blank"
          >
            View My Resume
          </a>
        </article>
    </>
  );
}
