"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/pro-duotone-svg-icons";
import { motion } from "framer-motion";
import styles from "./Bio.module.scss";

export default function Bio() {
  return (
    <>
      <motion.div
        className={styles.motion}
        initial={{ opacity: 0, translateX: "-20rem" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{
          duration: 1.4,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        viewport={{ once: true }}
      >
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
                <FontAwesomeIcon
                  className={styles["fa-map-pin"]}
                  icon={faMapPin}
                />
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
      </motion.div>
    </>
  );
}
