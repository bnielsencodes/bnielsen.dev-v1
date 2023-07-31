import Link from "next/link";
import styles from "./ViewMoreBtn.module.scss";

export default function ViewMoreBtn() {
  return (
    <>
      <div className={styles.container}>
        <Link className={styles.btn} href="/projects" target="_blank">
          View More Projects
        </Link>
      </div>
    </>
  );
}
