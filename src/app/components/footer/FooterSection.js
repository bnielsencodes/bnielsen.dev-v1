import ReturnHomeBtn from "./ReturnHomeBtn";
import FooterSocials from "@/app/components/footer/FooterSocials";
import styles from "./FooterSection.module.scss";

export default function FooterSection(props) {
  return (
    <>
      <section id={styles["footer-section"]}>
        <ReturnHomeBtn returnHomePath={props.returnHomePath} />
        <div className={styles.container}>
          <FooterSocials />
          <p className={styles.signature}>Brandon Nielsen - 2023</p>
        </div>
      </section>
    </>
  );
}
