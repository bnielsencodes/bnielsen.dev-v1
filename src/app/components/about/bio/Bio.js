"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/pro-duotone-svg-icons";
import { motion } from "framer-motion";
import ResumeBtn from "./resumeBtn";
import styles from "./Bio.module.scss";

export default function Bio() {
  const [reveal, setReveal] = useState(false);

  return (
    <>
      <motion.div
        className={styles.motion}
        initial={{ opacity: 0, translateX: "-19rem" }}
        whileInView={{ opacity: 1, translateX: "0" }}
        transition={{
          duration: 1.8,
          ease: [0.21, 1.11, 0.81, 0.99],
        }}
        viewport={{ once: true }}
      >
        <article
          className={`${styles.bio} ${reveal ? styles.marginBottom : null}`}
        >
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
            My journey in the world of web development has equipped me with a
            unique set of skills, enabling me to combine analytical thinking
            with a keen eye for aesthetics. Whether it&apos;s designing an
            intuitive user interface, optimizing website performance, or
            tackling complex coding challenges, I always strive for excellence.
          </p>
          <p className={styles.text}>
            With a firm belief in the power of innovation and continuous
            improvement, I take on every project as an opportunity to push
            {reveal ? (
              <span>
                {" "}
                boundaries and exceed expectations. By keeping myself updated
                with the latest industry trends and emerging technologies, I
                ensure that my work remains at the forefront of the
                ever-evolving web development landscape.
              </span>
            ) : (
              <>
                <span>... {""}</span>
                <button
                  className={styles.readMoreBtn}
                  onClick={() => {
                    setReveal((prevState) => !prevState);
                  }}
                >
                  Read more
                </button>
              </>
            )}
          </p>
          {reveal && (
            <>
              <p className={styles.text}>
                From conceptualization to implementation, I invest myself
                wholeheartedly in each project, driven by the desire to provide
                the best user experience. By combining my technical expertise
                with an artistic touch, I aim to leave a lasting impression on
                every website I create.
              </p>
              <p className={styles.text}>
                In a constantly changing digital world, I am excited to embrace
                new challenges, learn from experiences, and continue growing as
                a web developer. Through my work, I hope to inspire and elevate
                online experiences for users across the globe.
              </p>
            </>
          )}

          <ResumeBtn />
        </article>
      </motion.div>
    </>
  );
}
