import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronsUp } from "@fortawesome/pro-duotone-svg-icons";

export default function ReturnHomeBtn(props) {
  return (
    <>
      <div className={`${styles.container} ${styles["hvr-bob"]}`}>
        <a
          className={styles.link}
          href={props.returnHomePath}
          aria-label="return home"
        >
          <FontAwesomeIcon
            className={styles["fa-chevrons-up"]}
            icon={faChevronsUp}
          />
        </a>
      </div>
    </>
  );
}
