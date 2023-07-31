"use client";
import { useState } from "react";
import NavList from "@/app/components/navigation/NavList";
import MobileNav from "@/app/components/navigation/MobileNav";
import styles from "./Navigation.module.scss";

export default function Navigation(props) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <nav id="nav" className={styles.nav}>
        <div className={styles.container}>
          <svg
            className={styles.logo}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-0.013577461242675781 0.004145622253417969 86.6033706665039 86.63381958007812"
            width="28px"
            height="28px"
          >
            <g fillRule="evenodd">
              <path
                d="M84.08 28.85l-6.4 11.91c.06.83.09 1.66.09 2.51a34.5 34.5 0 0 1-60.17 23l20.72-39.34 10.27 17.79 6.26-10.9-7.76-14.53-16.28-1.37-20 37.17L6 65.3a43.28 43.28 0 0 0 78.08-36.45z"
                fill="#2DB67D"
              />
              <path
                d="M2.46 57.69a43.28 43.28 0 0 1 78.05-36.46L75.68 31.4l-20 37.18-16.23-1.34-7.76-14.53L38 41.82 48.22 59.6l20.72-39.39A34.51 34.51 0 0 0 8.77 43.27c0 .84 0 1.68.09 2.51z"
                fill="#785AF0"
              />
            </g>
          </svg>
          <h1 className={styles.name}>
            <a className={styles.link} href="/">
              Brandon Nielsen
            </a>
          </h1>
        </div>
        <NavList
          homePath={props.homePath}
          aboutPath={props.aboutPath}
          projectsPath={props.projectsPath}
          contactPath={props.contactPath}
        />
        <div
          className={`${styles["hamburger-menu"]} hidden--md ${
            showMobileNav ? styles.active : null
          }`}
          onClick={() => {
            setShowMobileNav((prevState) => !prevState);
          }}
        >
          <div className={`${styles.bar} ${styles.barTop}`}></div>
          <div className={`${styles.bar} ${styles.barMid}`}></div>
          <div className={`${styles.bar} ${styles.barBottom}`}></div>
          <MobileNav showMobileNav={showMobileNav} />
        </div>
      </nav>
    </>
  );
}
