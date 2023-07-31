import Link from "next/link";

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
