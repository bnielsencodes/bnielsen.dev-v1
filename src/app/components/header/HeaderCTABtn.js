import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/sharp-solid-svg-icons";
import styles from "./HeaderCTABtn.module.scss";

export default function HeaderCTABtn() {
  return (
    <>
      <div className={styles.container}>
        <a className={styles.link} href="#top-divider" aria-label="view work">
          View my work
          <span className={styles.span}>
            <FontAwesomeIcon
              className={styles["fa-arrow-down"]}
              icon={faArrowDown}
            />
          </span>
        </a>
      </div>
    </>
  );
}
