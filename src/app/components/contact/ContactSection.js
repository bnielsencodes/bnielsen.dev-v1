import ContactForm from "@/app/components/contact/ContactForm";
import styles from "./ContactSection.module.scss";

export default function ContactSection(props) {
  return (
    <section
      id={styles["contact-section"]}
      className={`${props.projectPage ? styles["project-page"] : null}`}
    >
      <h2 className={styles.heading}>
        <span className={styles.span}>Want to work together?</span>
      </h2>
      <ContactForm />
    </section>
  );
}
