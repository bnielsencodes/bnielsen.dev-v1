import HeaderCTABtn from "./HeaderCTABtn";

export default function HeaderIntro() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Hi, I&apos;m
          <span className={styles.span}> Brandon</span>
          <span className={styles.span}> Nielsen</span>,
        </h2>
        <h2 className={styles.subheading}>a front-end web developer.</h2>
      </div>
      <HeaderCTABtn />
    </>
  );
}
