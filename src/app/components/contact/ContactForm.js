"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mknewaqj");

  if (state.succeeded) {
    return <p className={styles["send-confirm"]}>Thanks for your email!</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Let&apos;s connect!</h2>
      <div className={styles.text}>
        Email me at{" "}
        <div className={styles["clipboard-copy"]}>
        </div>
        <strong>
          <a className={styles["mailto"]} href="mailto:bnielsencodes@gmail.com">
            brandon@bnielsen.dev
          </a>
        </strong>
        <br />
        or send me a quick message here:
      </div>
    </form>
  );
}
