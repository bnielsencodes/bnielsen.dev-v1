import styles from "./BioImage.module.scss";

export default function BioImage() {
  return (
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
  );
}
