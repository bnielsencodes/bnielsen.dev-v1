import styles from "./ResumeBtn.module.scss";

export default function ResumeBtn() {
  return (
    <>
      <a
        className={styles.resume}
        href="https://drive.google.com/file/d/1pJRoHl7UbfoqWO87wGbVoFV1ib-B3G5C/view?usp=sharing"
        aria-label="view resume"
        target="_blank"
      >
        View My Resume
      </a>
    </>
  );
}
