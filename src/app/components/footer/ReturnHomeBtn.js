export default function ReturnHomeBtn(props) {
  return (
    <>
      <div className={`${styles.container} ${styles["hvr-bob"]}`}>
        <a
          className={styles.link}
          href={props.returnHomePath}
          aria-label="return home"
        >
        </a>
      </div>
    </>
  );
}
