import styles from "./Tooltip.module.scss";

export default function Tooltip(props) {
  return (
    <>
      <div
        id={styles.tooltip}
        className={styles[`tooltip--${props.name}`]}
        style={{ display: props.showTooltip ? "inline-block" : "none" }}
      >
        <div className={`${styles.arrow} ${styles[`arrow--${props.name}`]}`} />
        <div className={`${styles["label"]} ${styles[`label--${props.name}`]}`}>
          {props.tech}
        </div>
      </div>
    </>
  );
}
